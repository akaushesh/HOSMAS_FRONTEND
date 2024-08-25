'use client';

import { paths } from '@/paths';
import { Box } from '@mui/material';
import { redirect, usePathname } from 'next/navigation';
import * as React from 'react';

export interface NavigationRestrictorProps {
  children: React.ReactNode;
}

export function NavigationRestrictor({ children }: NavigationRestrictorProps): React.JSX.Element {
  
  const pathname=usePathname();
  const disabledPaths=paths.disabled;

  if(disabledPaths.some((path)=>path.allChildren?pathname.startsWith(path.path):pathname===path.path)){
    redirect('/not-found');
  }
  else{
    return(
      <Box>
      {children}
    </Box>
  )
}
}
