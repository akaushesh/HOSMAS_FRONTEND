'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';
import type { ProfileResponse } from '@/services/profile';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import type { AxiosResponse } from 'axios';

import { useCreatePreference, useRetain } from '@/hooks/mutation/use-preference';
import { useChoices, usePreference, usePreferenceStatus } from '@/hooks/query/use-preference';
import { useProfile2 } from '@/hooks/query/use-profile';
import CheckboxSelect from '@/components/allocation/preference/checkbox-select';
import DnDLarge from '@/components/allocation/preference/DnDLarge';
import DnDMobile from '@/components/allocation/preference/DnDMobile';

interface Card {
  logo: string;
  id: number;
  room: string;
  hostel: string;
  priority: number;
}

interface ChoicesResponse {
  id: number;
  room_hostel: string;
  room_name: string;
}

interface PrefStatusResponse {
  can_retain: boolean;
  is_live: boolean;
  is_room_allotment_live: boolean;
}

interface PrefInternalData {
  id: number;
  priority: number;
  hostel_name: string;
  room_type_name: string;
}
interface PreferenceResponse {
  status: boolean;
  data: { retain: boolean; preferences: PrefInternalData[] };
}

export default function Page(): React.JSX.Element {
  // QUERIES
  const { data: choicesRes, isLoading: isLoadingChoices } = useChoices();
  const choices = choicesRes as AxiosResponse<ChoicesResponse[]>;

  const { data: preferncesRes, isLoading: isLoadingPreferences } = usePreference();
  const prefernces = preferncesRes as AxiosResponse<PreferenceResponse>;

  const { data: PrefStatusRes, isLoading: isLoadPrefStatus } = usePreferenceStatus();
  const PrefStatus = PrefStatusRes as AxiosResponse<PrefStatusResponse>;

  const { data: profile } = useProfile2();
  const user = profile as AxiosResponse<ProfileResponse>;

  // ADMIN RESTRICTIONS
  const [allowPref, setAllowPref] = useState<boolean>(true);
  const [allowRetain, setAllowRetain] = useState<boolean>(true);

  // CLIENT SIDE
  const [data1, setData1] = useState<Card[]>([]);
  const [data2, setData2] = useState<Card[]>([]);
  const [isRetain, setIsRetain] = useState<boolean>(false);

  const isLeader = !user?.data?.group || user?.data?.user?.email === user?.data?.group?.leader_email;

  const NotAllowed = isRetain || !allowPref || !isLeader;

  // TEMP DATA TO CHECK IF CHANGES ARE DONE
  const [initialData, setInitialData] = useState({
    data2: [] as Card[],
    isRetain: false,
  });

  // INITIALISATION
  useEffect(() => {
    if (!isLoadingChoices && !isLoadingPreferences && !isLoadPrefStatus) {
      const d1: Card[] = [];
      const d2: Card[] = [];

      choices?.data.forEach((el) => {
        if (
          prefernces?.data.data.preferences.some(
            (pref) => pref.room_type_name === el.room_name && pref.hostel_name === el.room_hostel
          )
        ) {
          const foundPreference = prefernces.data.data.preferences.find(
            (pref: PrefInternalData) => pref.room_type_name === el.room_name && pref.hostel_name === el.room_hostel
          );
          const priority = foundPreference ? foundPreference.priority : 0;

          d2.push({
            logo: el.room_name.substr(0, 2),
            id: el.id,
            room: el.room_name.substr(3),
            hostel: el.room_hostel,
            priority,
          });
        } else {
          d1.push({
            logo: el.room_name.substr(0, 2),
            id: el.id,
            room: el.room_name.substr(3),
            hostel: el.room_hostel,
            priority: 0,
          });
        }
      });

      d2.sort((a: Card, b: Card) => (a.priority || 0) - (b.priority || 0));
      setData1(d1);
      setData2(d2);

      setInitialData({
        data2: d2,
        isRetain: PrefStatus?.data.can_retain ? prefernces?.data.data.retain : false,
      });

      if (PrefStatus?.data.can_retain) {
        setIsRetain(prefernces?.data.data.retain);
      }

      setAllowRetain(PrefStatus?.data.can_retain);
      setAllowPref(PrefStatus?.data.is_live);
    }
  }, [isLoadingChoices, isLoadingPreferences, isLoadPrefStatus, PrefStatus, choices, prefernces]);

  // SAVE--DISABLED--CONDITION

  const arraysAreEqualExcludingId = (arr1: Card[], arr2: Card[]): boolean => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (JSON.stringify({ ...arr1[i], id: null }) !== JSON.stringify({ ...arr2[i], id: null })) {
        return false;
      }
    }

    return true;
  };

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    const arraysAreEqual = arraysAreEqualExcludingId(initialData.data2, data2);

    if ((initialData.isRetain && isRetain) || (arraysAreEqual && initialData.isRetain === isRetain)) {
      if (!disabled) {
        setDisabled(true);
      }
    } else if (data1.length === 0 || isRetain) {
      setDisabled(false);
    } else if (!disabled) {
      setDisabled(true);
    }
  }, [data1, isRetain, data2, initialData, disabled]);

  // RESET BUTTON
  const handleReset = (): void => {
    setData1(
      choices.data.map((el: ChoicesResponse) => {
        return {
          logo: el.room_name.substr(0, 2),
          id: el.id,
          room: el.room_name.substr(3),
          hostel: el.room_hostel,
          priority: 0,
        };
      })
    );

    setData2([]);
    if (allowRetain) setIsRetain(false);
  };

  // SAVE BUTTON
  const [msg, setMsg] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const onSuccess = (): void => {
    setMsg('Preferences Saved Successfully!');
    setSuccess(true);

    setInitialData({
      data2,
      isRetain,
    });

    setTimeout(() => {
      setMsg('');
    }, 1500);
  };

  const onError = (): void => {
    setMsg('Something went wrong! Please try again.');
    setSuccess(false);
    setTimeout(() => {
      setMsg('');
    }, 1500);
  };

  const { mutate: PrefMutation, isPending: pendingPref } = useCreatePreference({ onSuccess, onError });
  const { mutate: RetainMutation, isPending: pendingRetain } = useRetain({ onSuccess, onError });

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    event.preventDefault();

    if (isRetain) {
      RetainMutation();
    } else {
      const pref: Record<number, number> = {};
      data2.forEach((el, index) => {
        pref[index + 1] = el.id;
      });

      PrefMutation({ order: pref });
    }
  };

  return (
    <Stack
      sx={{
        '--Page-HeadColor': 'var(--mui-palette-text-secondaryChannel)',
        '--PButton-Color': 'var(--mui-palette-primary-main)',
        '--PButton-HoverColor': 'var(--mui-palette-primary-dark)',
        '--SButton-Color': 'var(--mui-palette-secondary-dark)',
        '--SButton-HoverColor': 'var(--mui-palette-secondary-main)',
        '--Button-FontColor': 'var(--mui-palette-common-white)',
        '--Room-Available': 'transparent',
        '--Room-Allotted': '#32a83c',
        '--Room-Color': 'var(--mui-palette-secondary-main)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: { md: 'space-between', xs: 'center' },
          mb: 5,
          flexDirection: { md: 'row', xs: 'column' },
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ color: 'var(--Page-HeadColor)', mb: 1 }}>
            Hostel Preference Order
          </Typography>

          <Typography>
            {allowPref ? ' Drag and Drop your hostel preferences in order' : 'Preference Selection is now locked.'}
          </Typography>
        </Box>

        <Box
          sx={{
            opacity: !allowPref || !isLeader ? 0.45 : 1,
            pointerEvents: !allowPref || !isLeader ? 'none' : 'initial',
            width: { md: '25%', xs: '80%' },
          }}
        >
          <Box
            sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' }, alignItems: 'flex-end', mb: 2 }}
            gap={2}
          >
            <Button
              sx={{
                px: { md: 7, xs: 5 },
                fontSize: { md: 16, xs: 14 },
                height: 43,
                width: 1,
                background: 'var(--SButton-Color)',
                color: 'var(--Button-FontColor)',
                '&:hover': { background: 'var(--SButton-HoverColor)' },
              }}
              variant="contained"
              onClick={() => {
                handleReset();
              }}
            >
              RESET
            </Button>
            <Button
              sx={{
                px: { md: 7, xs: 5 },
                fontSize: { md: 16, xs: 14 },
                background: 'var(--PButton-Color)',
                color: 'var(--Button-FontColor)',
                height: 43,
                width: 1,
                '&:hover': { background: 'var(--PButton-HoverColor)' },
              }}
              disabled={disabled}
              variant="contained"
              onClick={handleSubmit}
            >
              {pendingPref || pendingRetain ? <CircularProgress color="inherit" size={31} /> : 'SAVE'}
            </Button>
          </Box>

          <Typography
            sx={{
              color: success ? 'var(--mui-palette-success-dark)' : 'var(--mui-palette-error-main)',
              textAlign: 'end',
            }}
            variant="body2"
          >
            {msg}
          </Typography>

          <Box sx={{ width: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckboxSelect
              title={allowRetain ? 'Retain Current Allotment' : 'Retainment Not Allowed'}
              IsSelect={isRetain}
              disabled={!allowRetain || !isLeader}
              setSelect={setIsRetain}
            />
          </Box>
        </Box>
      </Box>

      <Box sx={{ position: 'relative', display: { lg: 'block', xs: 'none' } }}>
        <DnDLarge
          isLoadingChoices={isLoadingChoices}
          isLoadingPreferences={isLoadingPreferences}
          data1={data1}
          data2={data2}
          NotAllowed={NotAllowed}
          setD1={setData1}
          setD2={setData2}
        />
      </Box>

      <Box sx={{ position: 'relative', display: { lg: 'none', xs: 'block' } }}>
        <DnDMobile
          isLoadingChoices={isLoadingChoices}
          isLoadingPreferences={isLoadingPreferences}
          data1={data1}
          data2={data2}
          NotAllowed={NotAllowed}
          setD1={setData1}
          setD2={setData2}
        />
      </Box>
    </Stack>
  );
}
