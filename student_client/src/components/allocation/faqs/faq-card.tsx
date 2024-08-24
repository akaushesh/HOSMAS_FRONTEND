import * as React from 'react';
import { Card, Typography } from '@mui/material';
import { Stack } from '@mui/system';

interface FAQCardProps {
  sx?: React.CSSProperties;
  question: string;
  answer: string;
}

export function FAQCard({ sx, question, answer }: FAQCardProps): React.JSX.Element {
  return (
    <Card sx={sx}>
      <Stack spacing={3}>
        <Typography variant="body1">{question}</Typography>
        <Typography variant="body2" color="grey">
          {answer}
        </Typography>
      </Stack>
    </Card>
  );
}
