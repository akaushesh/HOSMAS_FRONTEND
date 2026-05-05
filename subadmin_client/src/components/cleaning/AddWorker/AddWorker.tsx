'use client';

import * as React from 'react';
import { createWorker, getWorkersOfHostel, Worker } from '@/services/cleaning';
import { useProfile } from '@/hooks/query/use-profile';
import { LoadingButton } from '@mui/lab';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { PersonAdd as PersonAddIcon, Badge as BadgeIcon, Phone as PhoneIcon } from '@mui/icons-material';

export default function AddWorker(): React.JSX.Element {
  const { data: profileData } = useProfile();

  // ── Add worker form state ──
  const [workerName, setWorkerName] = React.useState('');
  const [workerPhone, setWorkerPhone] = React.useState('');
  const [workerPhoto, setWorkerPhoto] = React.useState('');
  const [workerLoading, setWorkerLoading] = React.useState(false);

  // ── Workers list state ──
  const [workers, setWorkers] = React.useState<Worker[]>([]);
  const [isLoadingWorkers, setIsLoadingWorkers] = React.useState(true);

  const hostelId = profileData?.data?.supervisor?.hostel?.id;
  const hostelName = profileData?.data?.supervisor?.hostel?.name;

  const fetchWorkers = React.useCallback(async () => {
    if (!hostelId) return;
    try {
      setIsLoadingWorkers(true);
      const res = await getWorkersOfHostel(hostelId);
      setWorkers(res.data);
    } catch (err) {
      console.error('Failed to fetch workers', err);
    } finally {
      setIsLoadingWorkers(false);
    }
  }, [hostelId]);

  React.useEffect(() => {
    if (hostelId) fetchWorkers();
    else if (profileData !== undefined) setIsLoadingWorkers(false);
  }, [hostelId, profileData, fetchWorkers]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setWorkerPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleAddWorker = async () => {
    try {
      setWorkerLoading(true);
      await createWorker({
        name: workerName,
        phone: workerPhone,
        photo: workerPhoto || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      });
      setWorkerName('');
      setWorkerPhone('');
      setWorkerPhoto('');
      await fetchWorkers(); // refresh list
    } catch (err) {
      console.error(err);
      alert('Failed to add worker');
    } finally {
      setWorkerLoading(false);
    }
  };

  const skeletonRows = Array.from({ length: 4 });

  return (
    <Stack spacing={4}>
      {/* ── Add worker form ── */}
      <Card>
        <CardHeader
          avatar={
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '12px',
                backgroundColor: 'var(--mui-palette-primary-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PersonAddIcon sx={{ color: 'white', fontSize: 24 }} />
            </Box>
          }
          title={
            <Typography variant="h6" fontWeight={700}>
              Add Cleaning Staff
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="text.secondary">
              Register a new worker to{' '}
              <strong>{hostelName ?? '—'}</strong>
            </Typography>
          }
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Full Name"
                value={workerName}
                onChange={(e) => setWorkerName(e.target.value)}
                InputProps={{
                  startAdornment: <BadgeIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Phone Number"
                value={workerPhone}
                onChange={(e) => setWorkerPhone(e.target.value)}
                InputProps={{
                  startAdornment: <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button variant="outlined" component="label" fullWidth sx={{ height: '56px' }}>
                {workerPhoto ? 'Photo Uploaded ✓' : 'Upload Photo'}
                <input type="file" hidden accept="image/*" onChange={handlePhotoUpload} />
              </Button>
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                variant="contained"
                onClick={handleAddWorker}
                disabled={!workerName || !workerPhone}
                loading={workerLoading}
                startIcon={<PersonAddIcon />}
              >
                Add Worker
              </LoadingButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* ── Workers list ── */}
      <Paper elevation={4}>
        <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <BadgeIcon color="primary" />
          <Typography variant="h6" fontWeight={700}>
            Staff Directory
          </Typography>
          {!isLoadingWorkers && (
            <Chip label={`${workers.length} workers`} size="small" color="primary" variant="outlined" />
          )}
        </Box>
        <Divider />
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f9f9f9' }}>
              <TableCell sx={{ fontWeight: 700 }}>Worker</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoadingWorkers
              ? skeletonRows.map((_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <Skeleton variant="circular" width={38} height={38} />
                        <Skeleton variant="text" width={120} />
                      </Stack>
                    </TableCell>
                    <TableCell><Skeleton variant="text" width={100} /></TableCell>
                    <TableCell><Skeleton variant="rounded" width={70} height={24} /></TableCell>
                  </TableRow>
                ))
              : workers.length === 0
              ? (
                  <TableRow>
                    <TableCell colSpan={3} align="center" sx={{ py: 4, color: 'text.secondary' }}>
                      No workers registered yet. Add the first one above!
                    </TableCell>
                  </TableRow>
                )
              : workers.map((w) => (
                  <TableRow
                    key={w.id}
                    sx={{ '&:hover': { backgroundColor: 'action.hover' }, transition: '0.2s' }}
                  >
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1.5}>
                        <Avatar src={w.photo ?? undefined} sx={{ width: 38, height: 38 }}>
                          {w.name.charAt(0)}
                        </Avatar>
                        <Typography fontWeight={600}>{w.name}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <PhoneIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                        <Typography variant="body2">{w.phone}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={w.is_active ? 'Active' : 'Inactive'}
                        color={w.is_active ? 'success' : 'default'}
                        size="small"
                        variant="outlined"
                      />
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </Paper>
    </Stack>
  );
}
