'use client';

import * as React from 'react';
import {
  assignFloorToWorkers,
  assignRequestsToWorkers,
  getWorkersOfHostel,
  markWorkerAttendance,
  Worker,
} from '@/services/cleaning';
import { LoadingButton } from '@mui/lab';
import { Avatar, Box, Checkbox, Divider, Paper, Skeleton, Stack, Typography } from '@mui/material';

import { useProfile } from '@/hooks/query/use-profile';

export default function Attendance(): React.JSX.Element {
  const [cleaners, setCleaners] = React.useState<Worker[]>([]);
  const [attendanceMarked, setAttendanceMarked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const { data } = useProfile();

  React.useEffect(() => {
    const fetchCleaners = async () => {
      try {
        if (data?.data?.supervisor?.hostel?.id) {
          const response = await getWorkersOfHostel(data.data.supervisor.hostel.id);
          setCleaners(response.data);
          const anyAttendanceMarked = response.data.some((cleaner: Worker) => cleaner.attendance !== null);
          setAttendanceMarked(anyAttendanceMarked);
        }
      } catch (error) {
        console.error('Error fetching cleaners:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (data?.data?.supervisor?.hostel?.id) {
      fetchCleaners();
    } else if (data !== undefined) {
      setIsLoading(false);
    }
  }, [data]);

  const totalCleaners = cleaners.length;
  const presentCount = cleaners.filter((c) => c.attendance?.is_present).length;
  const absentCount = totalCleaners - presentCount;

  const handleAttendanceToggle = (id: number) => {
    setCleaners((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              attendance: c.attendance
                ? { ...c.attendance, is_present: !c.attendance.is_present }
                : { is_present: true, levels: [] },
            }
          : c
      )
    );
  };

  const markAttendance = async () => {
    try {
      setLoading(true);
      const updatedWorkers = cleaners.map((c) => ({
        id: c.id,
        is_present: c.attendance?.is_present || false,
      }));
      await markWorkerAttendance(updatedWorkers);
      await assignFloorToWorkers();
      await assignRequestsToWorkers();
      alert('Attendance saved and tasks auto-assigned!');
    } catch (error) {
      console.error(error);
      alert('Failed to save attendance');
    } finally {
      setAttendanceMarked(true);
      setLoading(false);
    }
  };

  const skeletonCards = Array.from({ length: 6 });

  return (
    <Paper elevation={10} sx={{ p: 3, mt: 3 }}>
      {/* ── Stats row ── */}
      <Stack direction="row" spacing={4}>
        {(['Total Cleaners', 'Present', 'Absent'] as const).map((label, i) => {
          const value = i === 0 ? totalCleaners : i === 1 ? presentCount : absentCount;
          return (
            <Typography key={label} variant="body1">
              {label}:&nbsp;
              {isLoading ? (
                <Skeleton variant="text" width={30} sx={{ display: 'inline-block' }} />
              ) : (
                <span style={{ fontWeight: 600, fontSize: '22px' }}>{value}</span>
              )}
            </Typography>
          );
        })}
      </Stack>

      {/* ── Cleaner cards ── */}
      <Box mt={3} sx={{ overflowY: 'auto', height: '45vh', width: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 5,
            justifyItems: 'center',
          }}
        >
          {isLoading
            ? skeletonCards.map((_, i) => (
                <Skeleton key={i} variant="rectangular" width="100%" height="30vh" sx={{ borderRadius: 2 }} />
              ))
            : cleaners.map((el) => (
                <Box
                  key={el.id}
                  onClick={() => handleAttendanceToggle(el.id)}
                  sx={{
                    width: '100%',
                    p: 1,
                    height: '30vh',
                    background: el.photo ? `url(${el.photo})` : undefined,
                    backgroundColor: el.photo ? undefined : 'grey.200',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    borderRadius: 2,
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: el.attendance?.is_present ? '0 0 7px 7px rgba(0,0,0,0.25)' : '',
                    transform: el.attendance?.is_present ? 'scale(0.9)' : 'scale(1)',
                    display: 'flex',
                    alignItems: el.photo ? undefined : 'center',
                    justifyContent: el.photo ? undefined : 'center',
                  }}
                >
                  {!el.photo && (
                    <Avatar sx={{ width: 64, height: 64, fontSize: 28 }}>
                      {el.name.charAt(0)}
                    </Avatar>
                  )}
                  <Checkbox
                    sx={{
                      background: 'white',
                      borderRadius: 0.6,
                      p: 0,
                      touchAction: 'none',
                      pointerEvents: 'none',
                      position: 'absolute',
                      top: 8,
                      left: 8,
                    }}
                    checked={el.attendance?.is_present || false}
                  />
                  <Typography
                    sx={{
                      bottom: 9,
                      right: 15,
                      position: 'absolute',
                      background: '#ffffffcd',
                      px: 1,
                      py: 0.5,
                      borderRadius: 0.5,
                    }}
                    color="var(--TextMain-Color)"
                    fontWeight={700}
                    variant="h6"
                  >
                    {el.name}
                  </Typography>
                </Box>
              ))}
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />
      <Stack direction="row" justifyContent="flex-end" mt={2} width={1}>
        <LoadingButton
          variant="contained"
          sx={{ px: 6 }}
          color="primary"
          onClick={markAttendance}
          loading={loading}
          disabled={loading || isLoading}
        >
          Save
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
