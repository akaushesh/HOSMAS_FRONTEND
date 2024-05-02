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
import { Box, Button, Checkbox, CircularProgress, Paper, Stack, Typography } from '@mui/material';

import { useChoices, usePreference, usePreferenceStatus } from '@/hooks/query/use-preference';

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
  const { data: choices, isLoading: isLoadingChoices } = useChoices() as Response;
  const { data: prefernces, isLoading: isLoadingPreferences } = usePreference() as Response;
  const { data: PrefStatus, isLoading: isLoadPrefStatus } = usePreferenceStatus() as Response;

  const [allowPref, setAllowPref] = useState<boolean>(true);

  const [data1, setData1] = useState<Card[]>([]);
  const [data2, setData2] = useState<Card[]>([]);
  const [allowRetain, setAllowRetain] = useState<boolean>(true);
  const [isRetain, setRetain] = useState<boolean>(false);



  useEffect(() => {
    if (!isLoadingChoices && !isLoadingPreferences && !isLoadPrefStatus) {
      setData1(
        choices.data.map((el: any) => {
          const preferenceExists = prefernces.data.data.preferences.find(
            (pref: any) => pref.room_type_name === el.room_name && pref.hostel_name === el.room_hostel
          );
          if (preferenceExists) return null;

          return {
            logo: el.room_name.substr(0, 2),
            id: el.id,
            room: el.room_name.substr(3),
            hostel: el.room_hostel,
          };
        })
      );

      console.log(prefernces.data.data.preferences);

      let d2=prefernces.data.data.preferences.map((el: any) => {
        return {
          logo: el.room_type_name.substr(0, 2),
          id: el.id,
          room: el.room_type_name.substr(3),
          hostel: el.hostel_name,
        };
      }) as Card[];
      setData2(d2);

      
      let retain;
      if (PrefStatus.data.can_retain) {
        retain=(prefernces.data.data.retain);
      }
      setRetain(retain);

      setAllowRetain(PrefStatus.data.can_retain);
      setAllowPref(PrefStatus.data.is_live);
    }
  }, [isLoadingChoices, isLoadingPreferences, isLoadPrefStatus]);

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

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (data1.length === 0 || isRetain ){
      setDisabled(false);
    }
    else {
      if(disabled !== true) {
        setDisabled(true);
      }
    }

  }, [data1, isRetain,data2]);


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


  const[saving,setSaving]=useState(false);
  const[saveCont,setSaveCont]=useState("SAVE");

  const handleSubmit=(event:any)=>{
    event.preventDefault();
    setSaving(true);
    
    let pref:any=[];

    if(!isRetain){
      pref=data2.map((el,index)=>{
        return({
          id: el.id,
          room_type_name: el.logo+' '+el.room,
          hostel_name: el.hostel,
          preference:index
        })
      })
    }



    console.log(pref);

    // POST

    setSaving(false);
    setSaveCont('SAVED!');
    setTimeout(()=>{
      setSaveCont('SAVE');
    },2000)
  }

  return (
    <Stack>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 8 }}>
        <Box>
          <Typography variant="h3" sx={{ color: 'inherit' }}>
            Hostel Preference Order
          </Typography>
          
          <Typography>
            {allowPref?" Drag and Drop your hostel preferences in order":"Preference Selection is now locked."}
          </Typography>
        
        </Box>

        <Box 
          width={'35%'} 
          sx={{ 
            opacity: !allowPref ? 0.45 : 1, 
            pointerEvents: !allowPref ? 'none' : 'initial' 
          }}
        >

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', mb: 1 }} gap={2}>
            <Button sx={{ px: 7, fontSize: 16 }} color="inherit" variant="contained" onClick={() => handleReset()}>
              RESET
            </Button>
            <Button sx={{ px: 7, fontSize: 16 }} disabled={disabled} color="inherit" variant="contained" onClick={(e)=>handleSubmit(e)}>
              {saving?<CircularProgress/>:saveCont}
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
            justifyContent: 'space-evenly',
            opacity: (isRetain||!allowPref) ? 0.45 : 1,
            pointerEvents: (isRetain||!allowPref) ? 'none' : 'initial',
          }}
        >
          <Paper
            elevation={4}
            sx={{
              width: '30%',
              minHeight: '45vh',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: isLoadingChoices ? 'center' : 'space-between',
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

          <Paper
            elevation={4}
            sx={{
              width: '30%',
              minHeight: '45vh',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: isLoadingPreferences ? 'center' : 'space-between',
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
