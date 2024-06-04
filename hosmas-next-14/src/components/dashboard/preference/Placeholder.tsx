import * as React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box } from '@mui/material';

interface PlaceHolderProps {
  id: string;
}

export default function Placeholder ({ id }:PlaceHolderProps):React.JSX.Element {
  const { setNodeRef, transition, transform } = useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <Box
      sx={{
        '--Card-BgColor':'var(--mui-palette-secondary-light)',
        '--Card-BorderColor':'var(--mui-palette-secondary-dark)',
        border: '1px dashed var(--Card-BorderColor)',
        width: 1,
        height: 1,
        fontSize: '50px',
        fontWeight: '400',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--Card-BgColor)',
      }}
      borderRadius={1}
      ref={setNodeRef}
      key={id}
      style={style}
    >
      +
    </Box>
  );
};

