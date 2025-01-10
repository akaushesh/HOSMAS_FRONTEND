'use client';

import * as React from 'react';
import { LoadingButton } from '@mui/lab';
import { Button, Divider, Rating, Stack, TextField, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { useSubmitFeedback } from '@/hooks/mutation/use-mess';
import { useGetFeedback } from '@/hooks/query/use-mess';

import SnackBarAlert, { type SnackBarMsg } from '../core/snackbar-msg';

interface FormProps {
  rating: number;
  feedback: string;
}

const getMealTiming = (): string => {
  const currentHour = dayjs().hour();
  const currentMinute = dayjs().minute();

  if (currentHour >= 7 && currentHour < 12) {
    return 'Breakfast';
  } else if (currentHour >= 12 && (currentHour < 19 || (currentHour === 18 && currentMinute <= 59))) {
    return 'Lunch';
  } else if ((currentHour >= 19 && currentHour <= 23) || (currentHour === 0 && currentMinute === 0)) {
    return 'Dinner';
  }
  return 'No Meal Time';
};

export default function Feedback(): React.JSX.Element {
  const [form, setForm] = React.useState<FormProps>({
    rating: 0,
    feedback: '',
  });

  const [res, setRes] = React.useState<SnackBarMsg>({
    msg: '',
    type: '',
  });

  const onSuccess = async (): Promise<void> => {
    setRes({ msg: 'Feedback Submitted', type: 'success' });
    setForm({ rating: 0, feedback: '' });
  };
  const onError = async (): Promise<void> => {
    setRes({ msg: 'Something went wrong', type: 'error' });
  };

  const { mutate: submitFeedback } = useSubmitFeedback({ onSuccess, onError });

  const onSubmit = (): void => {
    const formattedData = {
      rating: form.rating,
      description: form.feedback,
    };

    submitFeedback(formattedData);
  };

  const { data: prevFeeback,isLoading } = useGetFeedback();

  const handleReset = (): void => {
    setForm({ rating: 0, feedback: '' });
  };

  const isDisabled = form.rating === 0;
  const timing = getMealTiming();

  const formDisableCondition = timing === 'No Meal Time' || (prevFeeback?.data.feedback_open === false);

  return (
    <Stack
      alignItems="center"
      sx={{
        ...((formDisableCondition||isLoading) && {
          opacity: 0.46,
          pointerEvents: 'none',
        }),
      }}
    >
      <Typography
        variant="h4"
        sx={{ mt: { xs: 3, md: 4 }, lineHeight: 1.2, fontSize: { xs: '20px', md: '26px' } }}
        textAlign="center"
      >
        {isLoading?`Submit Feedback`:
        timing === 'No Meal Time'
          ? `Feedback cannot be submitted at this moment`
          : prevFeeback?.data.feedback_open === false
            ? `Already Submitted Feedback for Today's ${timing} menu`
            : `Leave a Rating for Today's ${timing} menu`}
      </Typography>
      <Rating
        name="rating"
        value={form.rating}
        onChange={(event, newValue) => {
          setForm({ feedback: form.feedback, rating: newValue || 0 });
        }}
        sx={{
          mt: { xs: 2, md: 3 },
          mb: 3,
          '& .MuiRating-icon': {
            fontSize: { xs: '30px', md: '40px' },
            color: 'var(--mui-palette-primary-main)',
          },
        }}
      />

      <TextField
        id="outlined-description"
        label="Description"
        variant="outlined"
        placeholder="Description (Optional)"
        name="description"
        value={form.feedback}
        onChange={(event) => {
          setForm({ rating: form.rating, feedback: event.target.value });
        }}
        sx={{
          width: '90%',
          mb: { xs: 1, md: 3 },
          '& .MuiInputBase-input::placeholder': {
            fontSize: { xs: '16px', md: '22px' },
            fontWeight: 600,
          },
        }}
        rows={6}
        multiline
      />

      <Divider sx={{ mt: 1 }} />
      <Stack direction="row" gap={2} sx={{ mt: 2, justifyContent: { xs: 'center', md: 'flex-end' } }}>
        <Button
          onClick={handleReset}
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
          Reset
        </Button>
        <LoadingButton
          variant="contained"
          disabled={isDisabled}
          sx={{
            fontWeight: 600,
            borderRadius: 1,
            px: 5,
          }}
          onClick={onSubmit}
        >
          Submit
        </LoadingButton>
      </Stack>
      <SnackBarAlert setMsg={setRes} msg={res} />
    </Stack>
  );
}
