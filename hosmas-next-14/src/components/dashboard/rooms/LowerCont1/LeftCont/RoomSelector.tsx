import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';

import { rooms1 } from './roomstemp';
import type { SelectedRoomProps } from '@/hooks/mutation/use-room';

interface RoomSelectorProps{
    selectedRooms: SelectedRoomProps[];
    floor: string;
    setSelectedRooms: (val: SelectedRoomProps[]) => void;
}

interface ClickProps{
  attached: string;
  room: string;
  capacity: number;
  str: string;
}

export default function RoomSelector({selectedRooms,floor,setSelectedRooms}:RoomSelectorProps): React.JSX.Element {

  const handleSelect = ({attached,room,capacity,str}: ClickProps): void => {
    if(str==='gr'){
      setSelectedRooms((prevSelectedRooms:SelectedRoomProps[  ]) => {
        const index = prevSelectedRooms.findIndex((ele) => ele.room === room);
        return index !== -1
          ? [...prevSelectedRooms.slice(0, index), ...prevSelectedRooms.slice(index + 1)]
          : prevSelectedRooms;
      });
      
      return;
    }
    setSelectedRooms([...selectedRooms, {floor,attached,room,capacity}]);
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
        height: '42vh',
        overflowY: 'auto',
      }}
    >
      {rooms1.map((cluster) => {
        return (
          <Box
            key={cluster.clusterId}
            sx={{
              display: 'flex',
              gap: 0,
              width: { xs: '100%', xl: '48%' },
              alignItems: 'center',
              p: 1,
              justifyContent: 'center',
            }}
          >
            {cluster.room.map((el, i) => {
              const count = selectedRooms.filter(ele => ele.room === el).length;
              const roomCapacity = Array.from({ length: cluster.capacity[i] }, (_, j) =>
                j < cluster.availability[i]
                  ? 'av'
                  : j < cluster.availability[i] + count
                    ? 'gr'
                    : 'dis'
              );

              const initCond = cluster.attached > 1 && i !== 0;
              const endCond = cluster.attached > 1 && i !== cluster.room.length - 1;

              return (
                <Box
                  key={el}
                  sx={{
                    display: 'flex',
                    alignItems: 'stretch',
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
                        return (
                          // eslint-disable-next-line react/button-has-type -- button type is not necessary.
                          <button
                            key={x}
                            onClick={()=>{handleSelect({attached: cluster.room[i+1]||cluster.room[i-1], room: el, capacity: cluster.capacity[i],str});}}
                            style={{ width: '45%', aspectRatio: '1', borderRadius: '8px', border: '1px black solid',
                            background: str === 'av' ? 'transparent' : str === 'gr' ? '#32a83c' : 'var(--mui-palette-secondary-main)',
                              opacity: str==='dis' ? 0.18 : 1,
                              cursor: str==='dis' ? 'auto' : 'pointer',
                              pointerEvents: str==='dis' ? 'none' : 'initial',
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
