'use client';

import * as React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { laundryItems, useCreateLaundrySlip, useUpdateLaundrySlip } from '@/hooks/mutation/use-laundry';
import { type QRDataProps } from './RightCont/LowerRightCont';
import { type LaundrySlipResponse } from '@/services/laundry';
import { type AxiosError, type AxiosResponse } from 'axios';
import { logger } from '@/lib/default-logger';
import { type ErrorResponse } from '@/services/auth';
import { LoadingButton } from '@mui/lab';

interface LaundryFormProps {
  toggleForm: boolean;
  setToggleForm: (prev: boolean) => void;
  QRData: QRDataProps | null;
  setQRData: (val:QRDataProps | null)=>void;
}

export default function LaundryForm({QRData,setQRData, toggleForm, setToggleForm }: LaundryFormProps): React.JSX.Element {

  const [laundryData, setLaundryData] = React.useState<Record<string, number>>(QRData ? QRData.details :{
    jeans: 0,
    pants: 0,
    pyjama: 0,
    shorts: 0,
    shirts: 0,
    tshirts: 0,
    kurta_salwar: 0,
    skirts: 0,
    dupatta: 0,
    bedsheet: 0,
    pillow_cover: 0,
    towel_hand_towel: 0,
    turban: 0,
    upper_hood: 0,
  });

  
  const totalClothes = Object.values(laundryData).reduce((total, count) => total + count, 0);

  const onSuccess = async (res: AxiosResponse<LaundrySlipResponse>): Promise<void> => {
    // setLaundryData(res.data);
    logger.debug(res.data);

    const { LaundrySlipID: _LaundrySlipID, id: _id, ...rest } = res.data.items;
    const items: Record<string, number> = rest;

    setQRData({
      details: items,
      LaundryId: String(res.data.user_id),
      transactionId: res.data.transaction_id,
    });
    setToggleForm(false);
  };

  const onError = (error: AxiosError<ErrorResponse>): void => {
    logger.error(error);
  };

  const { mutate: createSlip, isPending } = useCreateLaundrySlip({ onSuccess, onError });
  const { mutate: updateSlip, isPending:isPendingUpdate } = useUpdateLaundrySlip({ onSuccess, onError });

  const handleSubmit = (): void => {
    if(!QRData){
      createSlip({
        items: laundryData,
      });
    }
    else{
      updateSlip({
        transaction_id: QRData?.transactionId || '' ,
        items: laundryData,
      });
    }
  }


  return (
    <Paper>
      <Dialog
        open={toggleForm}
        onClose={() => {
          setToggleForm(false);
        }}
        maxWidth="lg"
        sx={{
          '& .MuiDialog-paper': {
            width: { xs: '90%', lg: '45%' },
            maxWidth: 'none',
          },
        }}
      >
        <DialogTitle fontSize={28} fontWeight={600}>
          Fill Laundry Form
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={1}>
            {Object.keys(laundryData).map((item) => {
              return (
                <Grid item xs={12} md={6} key={item}>
                  <Box>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      gap={6}
                      sx={{
                        background: 'var(--mui-palette-secondary-light)',
                        border: '1px solid var(--mui-palette-secondary-main)',
                        borderRadius: 1,
                        px: 2,
                        py: 0.5,
                      }}
                    >
                      <Typography variant="h6" sx={{ justifySelf: 'flex-start' }}>
                        {laundryItems[item]}
                      </Typography>

                      <Stack
                        sx={{ justifySelf: 'flex-end' }}
                        direction="row"
                        justifyContent="flex-right"
                        alignItems="center"
                        gap={1}
                      >
                        <IconButton
                          disabled={laundryData[item] <= 0}
                          onClick={() => {
                            setLaundryData({ ...laundryData, [item]: laundryData[item] - 1 });
                          }}
                          sx={{
                            py: 0.7,
                            color: 'var(--mui-palette-primary-main)',
                            '&:disabled': {
                              color: 'var(--mui-palette-secondary-dark)',
                              // border: '1px solid var(--mui-palette-secondary-main)',
                              opacity: 0.8,
                            },
                          }}
                        >
                          <Typography variant="h6">-</Typography>
                        </IconButton>

                        <Paper
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 0.8,
                            px: 0.8,
                            border: '1px solid var(--mui-palette-secondary-main)',
                            py: 0.15,
                          }}
                        >
                          {laundryData[item]}
                        </Paper>

                        <IconButton
                          disabled={totalClothes >= 10}
                          onClick={() => {
                            setLaundryData({ ...laundryData, [item]: laundryData[item] + 1 });
                          }}
                          sx={{
                            py: 0.7,
                            color: 'var(--mui-palette-primary-main)',
                            '&:disabled': {
                              color: 'var(--mui-palette-secondary-dark)',
                              // border: '1px solid var(--mui-palette-secondary-main)',
                              opacity: 0.8,
                            },
                          }}
                        >
                          <Typography variant="h6">+</Typography>
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Divider />
          <Stack direction="row" justifyContent="flex-end" gap={2} sx={{ mt: 2 }}>
            <Button
              onClick={() => {
                setToggleForm(false);
              }}
              sx={{
                fontWeight: 600,
                borderRadius: 1,
                px: 5,
                background: 'var(--mui-palette-secondary-dark)',
                color: 'var(--mui-palette-common-white)',
                '&:hover': { background: 'var(--mui-palette-secondary-main)' },
              }}
              variant="contained"
            >
              Cancel
            </Button>
            <LoadingButton
              variant="contained"
              onClick={() => {
                handleSubmit();
              }}
              loading={isPending||isPendingUpdate}
              disabled={totalClothes <= 0}
              sx={{
                fontWeight: 600,
                borderRadius: 1,
                px: 5,
              }}
            >
              Submit
            </LoadingButton>
          </Stack>
        </DialogContent>
      </Dialog>
    </Paper>
  );
}
