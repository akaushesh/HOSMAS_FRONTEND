'use client';

import * as React from 'react';
import type { ProfileResponse } from '@/services/profile';
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToParentElement, restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Divider, Paper, Typography, Button } from '@mui/material';
import type { AxiosResponse } from 'axios';

import type { SelectedRoomProps } from '@/hooks/mutation/use-room';
import NavIcon from '@/components/core/icons';

import Column from './components/Column';
import { useGroup } from '@/hooks/query/use-group';

interface LowerCont2Props {
  selectedRooms: SelectedRoomProps[];
  user: AxiosResponse<ProfileResponse>;
  onConfirm: () => Promise<void>;
}

interface DndEvent {
  active: SubDndEvent;
  over: SubDndEvent;
}
interface SubDndEvent {
  id: number;
  data: { current: { sortable: { containerId: string } } };
}

export default function DndMembers({ selectedRooms, user, onConfirm }: LowerCont2Props): React.JSX.Element {
  const { data: groupRes } = useGroup();
  const groupData = groupRes?.data;

  // Build member list: leader first, then members
  const allMembers = React.useMemo(() => {
    const list: { rollNum: string; id: string; name: string }[] = [];
    if (groupData?.leader) {
      list.push({ rollNum: groupData.leader.rollno, id: groupData.leader.rollno, name: groupData.leader.name });
    }
    for (const m of groupData?.members ?? []) {
      list.push({ rollNum: m.rollno, id: m.rollno, name: m.name });
    }
    return list;
  }, [groupData]);

  const [members, setMembers] = React.useState(allMembers);

  // Sync if group data loads after mount
  React.useEffect(() => {
    if (allMembers.length > 0) setMembers(allMembers);
  }, [allMembers.length]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const getPos = (rollNum: string): number => members.findIndex((member) => member.rollNum === rollNum);

  const handleDragEnd = (event: any): void => {
    const { active, over } = event;
    if (!over) return;

    if (active.id === over.id) return;

    setMembers(arrayMove(members, getPos(active.id as string), getPos(over.id as string)));
  };

  return (
    <Paper sx={{ width: 1, p: 3, height: 1 }} elevation={10}>
      <Typography variant="h5">Allot Members</Typography>
      <Typography variant="body2">Allign the members with rooms respectively</Typography>

      <Box width="100%" mt={3} sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>
       
       
       
       
        <Box width="50%">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis,restrictToParentElement]}
          >
            <Column id="toDo" main={members} />
          </DndContext>
        </Box>

       
       
       
        <Box width="40%" sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between' 
          }}
        >
          {selectedRooms.map((room) => {
            return (
              <Paper
                elevation={10}
                key={room.room}
                sx={{ 
                  gap: 2.5, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-evenly', 
                  p: 1 ,
                  border: '1px dashed var(--mui-palette-secondary-main)',
                }}
              >
                <Typography variant="h5" fontWeight={700}>
                  {room.room}
                </Typography>

                <Box gap={1.3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Divider
                    orientation="vertical"
                    sx={{ border: '3px solid var(--mui-palette-secondary-main)', borderRadius: '8px' }}
                    variant="middle"
                    flexItem
                  />
                  <PersonOutlineIcon sx={{ fontSize: 34, color: 'var(--mui-palette-text-primary)' }} />
                  <NavIcon logo={`${String(room.capacity)}S`} />
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button variant="contained" color="success" onClick={() => { void onConfirm(); }}>
          Confirm &amp; Book Rooms
        </Button>
      </Box>
    </Paper>
  );
}
