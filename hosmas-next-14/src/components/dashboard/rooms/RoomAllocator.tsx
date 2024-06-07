'use-client';

import * as React from 'react';
import type { ProfileResponse } from '@/services/profile';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Button, Divider, Paper, Typography, Zoom } from '@mui/material';
import type { AxiosResponse } from 'axios';

interface RoomAllocatorProps {
  select: string[];
  setSelect: (val: string[]) => void;
  user: AxiosResponse<ProfileResponse>;
}

interface RoomProps {
  Attached: number;
  room: string[];
  capacity: number[];
}

export default function RoomAllocator({ select, setSelect, user }: RoomAllocatorProps): React.JSX.Element {
  const handleRemove = (index: number): void => {
    // setSelect(select.filter((ele)=>ele!==el));
    // setStr(str.filter((ele)=>ele!==el));
    setStr(str.filter((ele, i) => i !== index));
  };
  const [str, setStr] = React.useState<string[]>(['D-203', 'D-203', 'D-203']);

  const rooms = [
    {
      Attached: 2,
      room: ['D-203', 'D-204'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-205', 'D-206'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-207', 'D-208'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-209', 'D-210'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-211', 'D-212'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-213', 'D-214'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-215', 'D-216'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-217', 'D-218'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-219', 'D-220'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-221', 'D-222'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-223', 'D-224'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-225', 'D-226'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-227', 'D-228'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-229', 'D-230'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-231', 'D-232'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-233', 'D-234'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-235', 'D-236'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-237', 'D-238'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-239', 'D-240'],
      capacity: [4, 4],
    },
    {
      Attached: 2,
      room: ['D-241', 'D-242'],
      capacity: [4, 4],
    },
  ] as RoomProps[];

  return (
    <Paper sx={{ width: 1, p: 3 }} elevation={10}>
      <Typography variant="h5">{`Select your rooms (Max ${user?.data?.group?.size.toString()})`}</Typography>
      <Typography variant="body2">Shared washrooms between rooms is depicted via a line between them.</Typography>

      <Paper
        elevation={10}
        sx={{
          display: 'flex',
          mt: 2,
          p: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 2,
          flexWrap: 'wrap',
          background: 'var(--Tray-Color)',
          border: '1px dashed var(--Tray-BorderColor) ',
        }}
      >
        {str.length > 0 ? (
          str.map((el, index) => (
            <Zoom key={index} in={str[index]} style={{ transitionDelay: str[index] ? '500ms' : '0ms' }}>
              <Paper
                sx={{
                  transition: 'ease-in-out 150ms',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '5px',
                  position: 'relative',
                  background: 'var(--Tray-RoomColor)',
                  color: 'white',
                }}
              >
                <Box sx={{ pl: 1, py: '2px', width: 1 }}>
                  <Typography variant="body2" textAlign="right">
                    {el}
                  </Typography>
                </Box>
                <Box sx={{ cursor: 'pointer', pr: '4px', pt: '2px' }} onClick={() => handleRemove(index)}>
                  <CancelIcon fontSize="small" />
                </Box>
              </Paper>
            </Zoom>
          ))
        ) : (
          <Typography variant="body2" textAlign="center">
            No rooms selected
          </Typography>
        )}
      </Paper>

      <Box
        sx={{
          mt: 6,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width: '100%',
          px: 1,
          height: '35vh',
          overflowY: 'auto',
        }}
      >
        {rooms.map((el, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                gap: 0,
                width: '40%',
                alignItems: 'center',
                justifyContent: 'center',
                px: 1,
              }}
            >
              {el.room.map((room, i) => {
                return (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '50%',
                    }}
                  >
                    {el.Attached > 1 && i !== 0 && (
                      <hr style={{ width: '8%', border: '2px var(--Room-ConnectorColor) solid' }} />
                    )}
                    <Paper elevation={10} sx={{ width: '92%' }}>
                      <Button
                        sx={{
                          background: 'var(--Room-color)',
                          color: 'var(--Room-FontColor)',
                          transition: 'ease-in-out 150ms',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '5px',
                          width: 1,
                          p: 1,
                        }}
                      >
                        <Box sx={{ py: '2px', width: 1 }}>
                          <Typography variant="body1">{room}</Typography>
                        </Box>
                      </Button>
                    </Paper>
                    {el.Attached > 1 && i !== el.room.length - 1 && (
                      <hr style={{ width: '8%', border: '2px var(--Room-ConnectorColor) solid' }} />
                    )}
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Paper>
  );
}
