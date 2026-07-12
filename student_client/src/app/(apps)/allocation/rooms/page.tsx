'use client';

import * as React from 'react';
import type { ProfileResponse } from '@/services/profile';
import { lockRoom, confirmBooking } from '@/services/room';
import { Box, Button, Chip, Stack, Typography, CircularProgress } from '@mui/material';
import type { AxiosResponse } from 'axios';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

import type { SelectedRoomProps } from '@/hooks/mutation/use-room';
import { useProfile2 } from '@/hooks/query/use-profile';
import LowerCont1 from '@/components/allocation/rooms/LowerCont1/lower-cont1';
import LowerCont2 from '@/components/allocation/rooms/LowerCont2/lower-cont2';

export default function Rooms(): React.JSX.Element {
  const { data: profile } = useProfile2();
  const user = profile as AxiosResponse<ProfileResponse>;

  const [selectedRooms, setSelectedRooms] = React.useState<SelectedRoomProps[]>([]);
  const [floor, setFloor] = React.useState<string>('  ');
  const [stage, setStage] = React.useState<boolean>(false);

  // Lock state
  const [lockSecondsLeft, setLockSecondsLeft] = React.useState<number>(0);
  const [locking, setLocking] = React.useState<boolean>(false);
  const [lockError, setLockError] = React.useState<string>('');
  const [confirming, setConfirming] = React.useState<boolean>(false);
  const timerRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  // Countdown tick
  React.useEffect(() => {
    if (lockSecondsLeft <= 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setLockSecondsLeft((s) => {
        if (s <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          // Lock expired — reset to room selector
          setStage(false);
          setSelectedRooms([]);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [lockSecondsLeft]);

  const formatTime = (secs: number): string => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // Only the group leader can lock — NEXT button triggers lock
  const handleNext = async (): Promise<void> => {
    const roomId = selectedRooms[0]?.id;
    if (!roomId) return;

    setLocking(true);
    setLockError('');
    try {
      const res = await lockRoom(roomId);
      setLockSecondsLeft(res.data.seconds_left);
      setStage(true);
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- axios error
      setLockError(err?.response?.data?.message || 'Failed to lock room. Try again.');
    } finally {
      setLocking(false);
    }
  };

  const handleConfirm = async (): Promise<void> => {
    const roomId = selectedRooms[0]?.id;
    if (!roomId) return;

    setConfirming(true);
    try {
      await confirmBooking(roomId);
      if (timerRef.current) clearInterval(timerRef.current);
      setLockSecondsLeft(0);
      // Booking done — could redirect or show success
      alert('Booking confirmed! Your room has been allotted.');
    } catch (err: any) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access -- axios error
      alert(err?.response?.data?.message || 'Booking failed. Try again.');
    } finally {
      setConfirming(false);
    }
  };

  return (
    <Stack
      sx={{
        '--Page-HeadColor': 'var(--mui-palette-text-secondaryChannel)',
        '--Tray-BorderColor': 'var(--mui-palette-secondary-main)',
        '--Tray-RoomColor': 'var(--mui-palette-primary-light)',
        '--Tray-Color': 'var(--mui-palette-secondary-light)',
        '--Room-color': 'var(--mui-palette-secondary-light)',
        '--Room-BorderColor': 'var(--mui-palette-secondary-main)',
        '--Room-FontColor': 'var(--mui-palette-text-primary)',
        '--Map-Icon': 'var(--mui-palette-secondary-dark)',
        '--Cluster-BorderColor': 'var(--mui-palette-secondary-main)',
        '--Room-ConnectorColor': 'var(--mui-palette-secondary-dark)',
        '--Room-Allotted': 'var(--mui-palette-success-main)',
        '--Room-Available': 'var(--mui-palette-primary-main)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 1 }}>
        <Box>
          <Typography
            variant="h3"
            sx={{ color: 'var(--Page-HeadColor)', mb: 1 }}
          >{`Room Allocation - ${String(user?.data?.alloted_hostel?.hostel)}`}</Typography>
          <Typography>Team Leader can book rooms for the entire group.</Typography>
          {lockError ? <Typography color="error" variant="body2">{lockError}</Typography> : null}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {lockSecondsLeft > 0 ? (
            <Chip
              icon={<TimerOutlinedIcon />}
              label={`Lock expires in ${formatTime(lockSecondsLeft)}`}
              color={lockSecondsLeft < 60 ? 'error' : 'warning'}
              variant="outlined"
            />
          ) : null}
          {stage ? (
            <Button
              variant="contained"
              color="success"
              disabled={confirming}
              onClick={() => { void handleConfirm(); }}
              startIcon={confirming ? <CircularProgress size={16} /> : null}
            >
              {confirming ? 'Confirming...' : 'Confirm Booking'}
            </Button>
          ) : (
            <Button
              variant="contained"
              disabled={selectedRooms.length < user?.data?.group?.size || locking}
              onClick={() => { void handleNext(); }}
              startIcon={locking ? <CircularProgress size={16} /> : null}
            >
              {locking ? 'Locking...' : 'NEXT'}
            </Button>
          )}
        </Box>
      </Box>

      {stage ? (
        <LowerCont2 selectedRooms={selectedRooms} user={user} onConfirm={handleConfirm} />
      ) : (
        <LowerCont1
          selectedRooms={selectedRooms}
          floor={floor}
          setSelectedRooms={setSelectedRooms}
          setFloor={setFloor}
          user={user}
        />
      )}
    </Stack>
  );
}
