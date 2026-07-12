import * as React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box, Paper, Typography } from '@mui/material';

interface CardProps {
  rollNum: string;
  id: string;
  name: string;
}

export default function Card({ id, name, rollNum }: CardProps): React.JSX.Element {
  const { setNodeRef, attributes, listeners, transition, transform } = useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Paper
      elevation={10}
      style={{ '--Card-BorderColor': 'var(--mui-palette-secondary-main)' } as React.CSSProperties}
      sx={{
        width: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        p: 1,
        border: '1px dashed var(--Card-BorderColor)',
        touchAction: 'none',
        ...style,
      }}
      ref={setNodeRef}
    >
      <Box
        sx={{
          width: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box ml={4}>
          <Typography variant="h6" fontSize="20px" fontWeight={700}>
            {name}
          </Typography>
          <Typography variant="body2">{rollNum}</Typography>
        </Box>
        <Typography
          variant="h4"
          sx={{ cursor: 'grab' }}
          letterSpacing={4}
          ref={setNodeRef}
          {...attributes}
          {...listeners}
        >
          :::
        </Typography>
      </Box>
    </Paper>
  );
}
