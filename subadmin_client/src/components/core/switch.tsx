import * as React from 'react';
import { styled } from '@mui/material/styles';
import Switch, { type SwitchProps } from '@mui/material/Switch';

const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 48,
  height: 32,
  padding: 0,
  opacity: 1, // Default opacity
  pointerEvents: 'auto', // Default pointer-events
  '&.Mui-disabled': {
    opacity: 0.5, // Reduced opacity when disabled
    pointerEvents: 'none', // Disable pointer events
  },
  '& .MuiSwitch-switchBase': {
    padding: 3,
    display: 'flex',
    alignItems: 'center',
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& .MuiSwitch-thumb': {
        backgroundColor: 'white', // Thumb color when checked
        opacity: 1,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: 'var(--mui-palette-primary-main)',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: 'var(--mui-palette-primary-main)',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100],
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[600],
      }),
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    backgroundColor: 'red',
    width: 22,
    height: 22,
    borderRadius: 6,
    transition: theme.transitions.create(['background-color'], {
      duration: 300,
    }),
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#E9E9EA',
    border: '2px solid var(--mui-palette-primary-main)',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: 'var(--mui-palette-primary-main)',
    }),
  },
}));

export default CustomSwitch;
