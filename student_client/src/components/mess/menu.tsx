'use client';

import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

interface MenuProps {
  timing: string;
}

export default function MenuTable({ timing }: MenuProps): React.JSX.Element {
  const tempData: Record<string, string[]> = {
    MONDAY: ['Item 1', 'Item 2', 'Item 3'],
    TUESDAY: ['Item 4', 'Item 5'],
    WEDNESDAY: ['Item 6', 'Item 7', 'Item 8'],
    THURSDAY: ['Item 9'],
    FRIDAY: [
      'Item 10',
      'Item 11',
      'Item 12',
      'Item 13',
      'Item 23',
      'Item 113',
      'Item 212',
      'Item 413',
      'Item 77113',
      'Item 77212',
      'Item 77413',
    ],
    SATURDAY: ['Item 14'],
    SUNDAY: ['Item 15', 'Item 16'],
  };

  const minItemColumns = 6;
  const maxItems = Math.max(...Object.values(tempData).map((arr) => arr.length));
  const itemColumns = Math.max(minItemColumns, maxItems);


  return (
    <TableContainer
      component={Paper}
      sx={{
        mt:5,overflowX: 'auto', border: '2px solid var(--mui-palette-secondary-dark)',borderRadius:1,borderTopWidth:"1px"
		,mb: {xs:3,md:0},
		
      }}
    >
      <Table>
        <TableBody>
          {['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'].map((day) => (
            <TableRow key={day}>
              <TableCell
                 sx={{
					fontWeight: 'bold',
					textAlign: 'center',
					minWidth: {xs:130,md:200},
					px: {xs:1,md:2},
					py: {xs:3,md:2.4},
					border: '2px solid var(--mui-palette-secondary-dark)', 
					borderTopWidth: '1px',
					borderLeftWidth: '0px',
				  }}
                align="center"
              >
                {day}
              </TableCell>
              {tempData[day]?.map((item) => (
                <TableCell
                  key={`${timing}-${item}`}
                  sx={{
                    border: '1px solid var(--mui-palette-secondary-main)',
                    textAlign: 'center',
                    minWidth: {xs:110,md:150},
                    px: {xs:1,md:2},
                  }}
                  align="center"
                >
                  {item}
                </TableCell>
              ))}
              {Array.from({ length: itemColumns - (tempData[day]?.length || 0) }).map((_, index) => (
                <TableCell
                  key={`empty-${timing}-${String(index)}`}
                  sx={{
                    border: '1px solid var(--mui-palette-secondary-main)',
                    minWidth: {xs:110,md:150},
                  }}
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
