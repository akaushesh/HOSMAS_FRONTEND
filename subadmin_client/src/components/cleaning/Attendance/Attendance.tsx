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
import { Box, Button, Checkbox, Divider, Paper, Stack, Typography } from '@mui/material';

import { useProfile } from '@/hooks/query/use-profile';

export default function Attendance(): React.JSX.Element {
  const [cleaners, setCleaners] = React.useState<Worker[]>([]);
  const [attendanceMarked, setAttendanceMarked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const { data } = useProfile();

  React.useEffect(() => {
    const fetchCleaners = async () => {
      try {
        if (data?.data?.supervisor?.hostel?.id) {
          const response = await getWorkersOfHostel(data.data.supervisor.hostel.id);
          setCleaners(response.data);

          const anyAttendanceMarked = response.data.some((cleaner: Worker) => cleaner.attendance !== null);
          setAttendanceMarked(anyAttendanceMarked);

          console.log('cleaners', response.data);
        } else {
          console.log('Hostel ID is not available');
        }
      } catch (error) {
        console.error('Error fetching cleaners:', error);
      }
    };

    fetchCleaners();
  }, [data]);

  const totalCleaners = cleaners.length;
  const presentCount = cleaners.filter((cleaner) => cleaner.attendance?.is_present).length;
  const absentCount = totalCleaners - presentCount;

  const handleAttendanceToggle = (id: number) => {
    setCleaners((prevCleaners) =>
      prevCleaners.map((cleaner) =>
        cleaner.id === id
          ? {
              ...cleaner,
              attendance: cleaner.attendance
                ? { ...cleaner.attendance, is_present: cleaner.attendance.is_present }
                : { is_present: true, levels: [] },
            }
          : cleaner
      )
    );
  };

  const markAttendance = async () => {
    try {
      setLoading(true);
      const updatedWorkers = cleaners.map((cleaner) => ({
        id: cleaner.id,
        is_present: cleaner.attendance?.is_present || false,
      }));

      await markWorkerAttendance(updatedWorkers);
      await assignFloorToWorkers();
      await assignRequestsToWorkers();
    } catch (error) {
      console.error(error);
    } finally {
      setAttendanceMarked(true);
      setLoading(false);
    }
  };

  console.log('attendanceMarked', attendanceMarked);

  return (
    <Paper elevation={10} sx={{ p: 3, mt: 3 }}>
      <Stack direction="row" spacing={4}>
        <Typography variant="body1">
          Total Cleaners:
          <span style={{ fontWeight: '600', fontSize: '22px' }}>{totalCleaners}</span>
        </Typography>
        <Typography variant="body1">
          Present:
          <span style={{ fontWeight: '600', fontSize: '22px' }}>{presentCount}</span>
        </Typography>
        <Typography variant="body1">
          Absent:
          <span style={{ fontWeight: '600', fontSize: '22px' }}>{absentCount}</span>
        </Typography>
      </Stack>

      <Box mt={3} sx={{ overflowY: 'auto', height: '45vh', width: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 5,
            justifyItems: 'center',
          }}
        >
          {cleaners.map((el) => (
            <Box
              key={el.id}
              sx={{
                width: '100%',
                p: 1,
                height: '30vh',
                background: `url(${el.photo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: '0 0',
                position: 'relative',
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: el.attendance?.is_present ? '0px 0px 7px 7px rgba(0,0,0,0.25)' : '',
                transform: el.attendance?.is_present ? 'scale(0.9)' : 'scale(1)',
              }}
              onClick={() => handleAttendanceToggle(el.id)}
            >
              <Checkbox
                sx={{ background: 'white', borderRadius: 0.6, p: 0, touchAction: 'none', pointerEvents: 'none' }}
                checked={el.attendance?.is_present || false}
                disabled={attendanceMarked}
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
          disabled={attendanceMarked || loading}
        >
          Save
        </LoadingButton>
      </Stack>
    </Paper>
  );
}
