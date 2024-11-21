import type { Components } from '@mui/material/styles';

import type { Theme } from '../types';

export const MuiTextField = {
  styleOverrides: {
    root: {
      [`& .MuiInputBase-input`]: {
        backgroundColor: '#ffffff',
      },
      [`& .MuiOutlinedInput-root`]: {
        borderRadius: 8,
      },
    },
  },
} satisfies Components<Theme>['MuiTextField'];
