'use client';

import type * as React from 'react';
import { Button } from '@mui/material';

interface TagButtonProps {
  children: React.ReactNode;
  color: 'green' | 'yellow';
}

export default function TagButton({ children, color }: TagButtonProps): React.JSX.Element {
  const getColorStyles = (): React.CSSProperties => {
    switch (color) {
      case 'green':
        return {
          borderColor: 'green',
          color: 'green',
        };
      case 'yellow':
        return {
          borderColor: 'yellow',
          color: 'yellow',
        };
      default:
        return {};
    }
  };

  return (
    <Button
      component="span"
      variant="outlined"
      sx={{
        ...getColorStyles(),
        padding: '4px 8px',
        borderRadius: '16px',
        borderWidth: '2px',
        textTransform: 'none',
        display: 'inline-block',
        width: '100%',
        maxWidth: 'max-content',
        fontSize: '0.8rem',
      }}
    >
      {children}
    </Button>
  );
}