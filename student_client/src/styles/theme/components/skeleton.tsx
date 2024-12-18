import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiSkeleton = {
  styleOverrides: {
    root: {
      backgroundColor: 'rgba(224, 224, 224)',
    },
    rectangular: {
    },
  },
} satisfies Components<Theme>['MuiSkeleton'];
