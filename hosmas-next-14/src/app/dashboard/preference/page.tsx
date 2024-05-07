'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  closestCorners,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';
import { arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box, Button, Checkbox, CircularProgress, Paper, Stack, SvgIcon, Typography } from '@mui/material';
import { ArrowRight } from '@phosphor-icons/react';

import { useChoices, usePreference, usePreferenceStatus } from '@/hooks/query/use-preference';
import { useProfile } from '@/hooks/query/use-profile';

import Collumn from './Components/Collumn';

interface Card {
  logo: string;
  id: string;
  room: string;
  hostel: string;
}

interface Response {
  data: any;
  isLoading: boolean;
}

const page = () => {
  // QUERIES
  const { data: choices, isLoading: isLoadingChoices } = useChoices() as Response;
  const { data: prefernces, isLoading: isLoadingPreferences } = usePreference() as Response;
  const { data: PrefStatus, isLoading: isLoadPrefStatus } = usePreferenceStatus() as Response;
  const { data: user, isLoading: isLoadProfile } = useProfile() as Response;

  // ADMIN RESTRICTIONS
  const [allowPref, setAllowPref] = useState<boolean>(true);
  const [allowRetain, setAllowRetain] = useState<boolean>(true);

  // CLIENT SIDE
  const [data1, setData1] = useState<Card[]>([]);
  const [data2, setData2] = useState<Card[]>([]);
  const [isRetain, setRetain] = useState<boolean>(false);

  const isLeader = !user?.group || user?.user?.email === user?.group?.leader_email;

  // TEMP DATA TO CHECK IF CHANGES ARE DONE
  const [initialData, setInitialData] = useState({
    data2: [] as any,
    isRetain: false,
  });

  // INITIALISATION
  useEffect(() => {
    if (!isLoadingChoices && !isLoadingPreferences && !isLoadPrefStatus) {
      setData1(
        choices.data
          .filter(
            (el: any) =>
              !prefernces.data.data.preferences.some(
                (pref: any) => pref.room_type_name === el.room_name && pref.hostel_name === el.room_hostel
              )
          )
          .map((el: any) => ({
            logo: el.room_name.substr(0, 2),
            id: el.id,
            room: el.room_name.substr(3),
            hostel: el.room_hostel,
          }))
      );

      let d2 = prefernces.data.data.preferences.map((el: any) => {
        return {
          logo: el.room_type_name.substr(0, 2),
          id: el.id,
          room: el.room_type_name.substr(3),
          hostel: el.hostel_name,
        };
      });
      setData2(d2);

      setInitialData({
        data2: d2,
        isRetain: PrefStatus.data.can_retain ? prefernces.data.data.retain : false,
      });

      if (PrefStatus.data.can_retain) {
        setRetain(prefernces.data.data.retain);
      }

      setAllowRetain(PrefStatus.data.can_retain);
      setAllowPref(PrefStatus.data.is_live);
    }
  }, [isLoadingChoices, isLoadingPreferences, isLoadPrefStatus]);

  // DND KIT
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const getPos = (id: string, data: Card[]): number => {
    return data.findIndex((item) => item.id === id);
  };
  const handleDragEndNOver = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const activeCollumn = active.data.current.sortable.containerId;
    const overCollumn = over.data.current.sortable.containerId;

    // Inside Same Collumn
    if (activeCollumn === overCollumn) {
      if (activeCollumn === 'collumn1') {
        setData1((data) => arrayMove(data, getPos(activeId, data1), getPos(overId, data1)));
      } else {
        setData2((data) => arrayMove(data, getPos(activeId, data2), getPos(overId, data2)));
      }
    } else {
      if (activeCollumn === 'collumn1') {
        let card = data1[getPos(activeId, data1)];
        setData1((data) => data.filter((item) => item.id !== activeId));
        data2.splice(getPos(overId, data2), 0, card);
        setData2((data) => [...data2]);
      } else {
        let card = data2[getPos(activeId, data2)];
        setData2((data) => data.filter((item) => item.id !== activeId));
        data1.splice(getPos(overId, data1), 0, card);
        setData1((data) => [...data1]);
      }
    }
  };

  // SAVE--DISABLED--CONDITION

  const arraysAreEqualExcludingId = (arr1: any[], arr2: any[]) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      const obj1 = { ...arr1[i] };
      const obj2 = { ...arr2[i] };

      delete obj1.id;
      delete obj2.id;

      if (JSON.stringify(obj1) !== JSON.stringify(obj2)) {
        return false;
      }
    }

    return true;
  };
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    const arraysAreEqual = arraysAreEqualExcludingId(initialData.data2, data2);

    console.log(initialData.data2, '---', data2);
    if ((initialData.isRetain === true && isRetain === true) || (arraysAreEqual && initialData.isRetain === isRetain)) {
      if (disabled !== true) {
        setDisabled(true);
      }
    } else if (data1.length === 0 || isRetain) {
      setDisabled(false);
    } else {
      if (disabled !== true) {
        setDisabled(true);
      }
    }
  }, [data1, isRetain, data2]);

  // RESET BUTTON
  const handleReset = () => {
    setData1(
      choices.data.map((el: any) => {
        return {
          logo: el.room_name.substr(0, 2),
          id: el.id,
          room: el.room_name.substr(3),
          hostel: el.room_hostel,
        };
      })
    );
    setData2([]);
    if (allowRetain) setRetain(false);
  };

  // SAVE BUTTON
  const [saving, setSaving] = useState(false);
  const [saveCont, setSaveCont] = useState('SAVE');
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSaving(true);

    let pref: any = [];

    if (!isRetain) {
      pref = data2.map((el, index) => {
        return {
          id: el.id,
          room_type_name: el.logo + ' ' + el.room,
          hostel_name: el.hostel,
          priority: index + 1,
        };
      });
    }

    let d = { preferences: pref, retain: isRetain };

    console.log(d);

    // POST

    setSaving(false);
    setSaveCont('SAVED!');
    setTimeout(() => {
      setSaveCont('SAVE');
    }, 2000);
  };

  return (
    <Stack
      sx={{
        '--Card-HeadColor': 'var(--mui-palette-text-secondaryChannel)',
        '--Card-FontColor': 'var(--mui-palette-text-primaryChannel)',
        '--PButton-Color': 'var(--mui-palette-primary-main)',
        '--PButton-HoverColor': 'var(--mui-palette-primary-dark)',
        '--SButton-Color': 'var(--mui-palette-secondary-dark)',
        '--SButton-HoverColor': 'var(--mui-palette-secondary-main)',
        '--Button-FontColor': 'var(--mui-palette-common-white)',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 5 }}>
        <Box>
          <Typography variant="h3" sx={{ color: 'var(--Card-HeadColor)', mb: 1 }}>
            Hostel Preference Order
          </Typography>

          <Typography>
            {allowPref ? ' Drag and Drop your hostel preferences in order' : 'Preference Selection is now locked.'}
          </Typography>
        </Box>

        <Box
          width={'35%'}
          sx={{
            opacity: !allowPref || !isLeader ? 0.45 : 1,
            pointerEvents: !allowPref || !isLeader ? 'none' : 'initial',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', mb: 1 }} gap={2}>
            <Button
              sx={{ px: 7, fontSize: 16, background: 'var(--SButton-Color)', color: 'var(--Button-FontColor)', '&:hover': { background: 'var(--SButton-HoverColor)'}}}
              variant="contained"
              onClick={() => handleReset()}
            >
              RESET
            </Button>
            <Button
              sx={{ px: 7, fontSize: 16, background: 'var(--PButton-Color)', color: 'var(--Button-FontColor)','&:hover': { background: 'var(--PButton-HoverColor)'} }}
              disabled={disabled}
              variant="contained"
              onClick={(e) => handleSubmit(e)}
            >
              {saving ? <CircularProgress /> : saveCont}
            </Button>
          </Box>

          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              opacity: !allowRetain ? 0.45 : 1,
              pointerEvents: !allowRetain ? 'none' : 'initial',
            }}
            variant="h6"
          >
            Retain Current Allotment :: <Checkbox onChange={() => setRetain(!isRetain)} checked={isRetain} />
          </Typography>
        </Box>
      </Box>

      <DndContext
        onDragEnd={handleDragEndNOver}
        onDragOver={handleDragEndNOver}
        sensors={sensors}
        collisionDetection={closestCorners}
        modifiers={[restrictToWindowEdges]}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            opacity: isRetain || !allowPref || !isLeader ? 0.45 : 1,
            pointerEvents: isRetain || !allowPref || !isLeader ? 'none' : 'initial',
            color: 'var(--Card-FontColor)',
          }}
        >
          <Paper
            elevation={4}
            sx={{
              width: '37%',
              minHeight: '60vh',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: isLoadingChoices ? 'center' : 'space-between',
              color: 'var(--Card-FontColor)',
            }}
          >
            {isLoadingChoices && <CircularProgress color="inherit" />}

            {!isLoadingChoices && (
              <>
                <Typography variant="overline" sx={{ textAlign: 'left', mb: 2 }} width={1}>
                  You have selected {data2.length} out of {data1.length + data2.length} items.
                </Typography>
                <Collumn id={'collumn1'} main={data1} second={data2} />
              </>
            )}
          </Paper>

          <Box
            height={'60vh'}
            width={0.1}
            fontSize={'40px'}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <ArrowRight />
          </Box>

          <Paper
            elevation={4}
            sx={{
              width: '37%',
              minHeight: '60vh',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: isLoadingPreferences ? 'center' : 'space-between',
              color: 'var(--Card-FontColor)',
            }}
          >
            {isLoadingPreferences && <CircularProgress color="inherit" />}

            {!isLoadingPreferences && (
              <>
                <Typography variant="overline" sx={{ textAlign: 'left', mb: 2 }} width={1}>
                  Arrange your preferences here.
                </Typography>
                <Collumn id={'collumn2'} main={data2} second={data1} />
              </>
            )}
          </Paper>
        </Box>
      </DndContext>
    </Stack>
  );
};

export default page;
