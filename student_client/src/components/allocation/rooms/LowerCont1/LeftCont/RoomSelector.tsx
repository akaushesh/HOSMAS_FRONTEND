import * as React from 'react';
import { Box, Paper, Typography, CircularProgress } from '@mui/material';

import type { SelectedRoomProps } from '@/hooks/mutation/use-room';
import { useAvailableRooms } from '@/hooks/query/use-room';
import type { AxiosResponse } from 'axios';
import type { ProfileResponse } from '@/services/profile';

interface RoomSelectorProps {
  selectedRooms: SelectedRoomProps[];
  user: AxiosResponse<ProfileResponse>;
  floor: string;
  setSelectedRooms: React.Dispatch<React.SetStateAction<SelectedRoomProps[]>>;
}

interface ClickProps {
  id: number;
  attached: string;
  room: string;
  capacity: number;
  str: string;
}

export default function RoomSelector({ selectedRooms, floor, user, setSelectedRooms }: RoomSelectorProps): React.JSX.Element {
  const { data: roomsRes, isLoading, error } = useAvailableRooms();
  const roomsList = roomsRes?.data || [];

  const clusters = React.useMemo(() => {
    // Sort rooms by name numerically
    const sorted = [...roomsList].sort((a, b) => a.name.localeCompare(b.name));
    const result = [];
    const allottedType = user?.data?.alloted_hostel?.room_type || "2S";
    const cap = parseInt(allottedType) || 2;

    for (let i = 0; i < sorted.length; i += 2) {
      const pair = [sorted[i]];
      if (i + 1 < sorted.length) {
        pair.push(sorted[i + 1]);
      }
      result.push({
        clusterId: `cluster-${sorted[i].id}`,
        attached: pair.length,
        room: pair.map((r) => r.name),
        roomIds: pair.map((r) => r.id),
        availability: pair.map((r) => (r.available ? cap : 0)),
        capacity: pair.map(() => cap),
        ac: pair.map(() => allottedType.includes("AC")),
      });
    }
    return result;
  }, [roomsList, user]);

  const handleSelect = ({ id, attached, room, capacity, str }: ClickProps): void => {
    if (selectedRooms.length >= user?.data?.group?.size && str !== 'gr') {
      return;
    }

    if (str === 'gr') {
      setSelectedRooms((prevSelectedRooms: SelectedRoomProps[]) => {
        const index = prevSelectedRooms.findIndex((ele) => ele.room === room);
        return index !== -1
          ? [...prevSelectedRooms.slice(0, index), ...prevSelectedRooms.slice(index + 1)]
          : prevSelectedRooms;
      });
      return;
    }
    setSelectedRooms([...selectedRooms, { id, floor, attached, room, capacity }]);
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '40vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '40vh' }}>
        <Typography color="error">Error loading available rooms.</Typography>
      </Box>
    );
  }

  if (clusters.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '40vh' }}>
        <Typography>No available rooms found for your allotted type.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        width: '100%',
        px: 1,
        height: '40vh',
        overflowY: 'auto',
      }}
    >
      {clusters.map((cluster) => {
        return (
          <Box
            key={cluster.clusterId}
            sx={{
              display: 'flex',
              gap: 0,
              borderRadius: '8px',
              width: { xs: '100%', xl: '48%' },
              alignItems: 'center',
              p: 1,
              justifyContent: 'center',
            }}
          >
            {cluster.room.map((el, i) => {
              const count = selectedRooms.filter((ele) => ele.room === el).length;
              const roomCapacity = Array.from({ length: cluster.capacity[i] }, (_, j) =>
                j < cluster.availability[i] ? 'av' : j < cluster.availability[i] + count ? 'gr' : 'dis'
              );
              
              const allDisabled = roomCapacity.every(value => value === 'dis');

              const initCond = cluster.attached > 1 && i !== 0;
              const endCond = cluster.attached > 1 && i !== cluster.room.length - 1;

              return (
                <Box
                  key={el}
                  sx={{
                    display: 'flex',
                    alignItems: 'stretch',
                    opacity: allDisabled ? 0.65 : 1,
                    pointerEvents: allDisabled ? 'none' : 'initial',
                    height: 1,
                    width: '50%',
                  }}
                >
                  <Box width="10%" sx={{ display: initCond ? 'flex' : 'none', alignItems: 'center' }}>
                    <hr style={{ width: '100%', border: '4px var(--Room-ConnectorColor) solid' }} />
                  </Box>

                  <Paper
                    elevation={10}
                    sx={{
                      background: 'var(--Room-color)',
                      color: 'var(--Room-FontColor)',
                      transition: 'ease-in-out 150ms',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px dashed var(--Room-BorderColor) ',
                      gap: '5px',
                      width: '92%',
                      height: 1,
                      p: 1,
                    }}
                  >
                    <Typography variant="h6">{el}</Typography>
                    <Typography variant="body2">{`${String(cluster.capacity[i])}S - ${cluster.ac[i] ? 'AC' : 'NonAC'}`}</Typography>

                    <Box
                      sx={{
                        mt: 1,
                        display: 'flex',
                        gap: '7px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        width: { xs: '100%', md: '60%', lg: '60%', xl: '80%' },
                      }}
                    >
                      {roomCapacity.map((str, x) => {
                        const disableCondition = str === 'dis' || (selectedRooms.length >= user?.data?.group?.size && str !== 'gr');

                        return (
                          <button
                            key={x}
                            onClick={() => {
                              handleSelect({
                                id: cluster.roomIds[i],
                                attached: cluster.room[i + 1] || cluster.room[i - 1],
                                room: el,
                                capacity: cluster.capacity[i],
                                str,
                              });
                            }}
                            style={{
                              width: '35%',
                              aspectRatio: '1',
                              borderRadius: '8px',
                              border: '1px black solid',
                              background:
                                str === 'av'
                                  ? 'transparent'
                                  : str === 'gr'
                                    ? '#32a83c'
                                    : 'var(--mui-palette-secondary-main)',
                              opacity: disableCondition ? 0.18 : 1,
                              cursor: disableCondition ? 'auto' : 'pointer',
                              pointerEvents: disableCondition ? 'none' : 'initial',
                            }}
                          />
                        );
                      })}
                    </Box>
                  </Paper>

                  <Box width="10%" sx={{ display: endCond ? 'flex' : 'none', alignItems: 'center' }}>
                    <hr style={{ width: '100%', border: '4px var(--Room-ConnectorColor) solid' }} />
                  </Box>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
}
