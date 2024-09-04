'use client';

import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Box } from '@mui/system';
import dayjs from 'dayjs';

interface ClothingTransaction {
  id: string;
  dateGiven: string;
  numberOfClothes: number;
  dateOfDelivery: string;
  details: [string, number, number][];
}

interface EleProps {
  slips: ClothingTransaction[];
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e9e9e9',
    color: '#595959',
    fontWeight: 600,
  },
}));

export default function LaundryTable({ slips }: EleProps): React.JSX.Element {
  return (
    <Paper sx={{ borderRadius: '8px', overflowY: 'auto', overflowX: 'hidden', height: '35.5 vh' }} elevation={10}>
      <Table stickyHeader>
        <TableHead>
          <TableRow sx={{ borderRadius: '8px', backgroundColor: 'red' }}>
            <StyledTableCell align="center">Date Given</StyledTableCell>
            <StyledTableCell align="center">Number of Clothes</StyledTableCell>
            <StyledTableCell align="center">Date of Delivery</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ borderRadius: '8px' }}>
          {slips.map((slip) => (
            <RowLaundry key={slip.id} slip={slip} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

function RowLaundry({ slip }: { slip: ClothingTransaction }): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <>
      <TableRow
        onClick={handleOpen}
        sx={{
          cursor: 'pointer',
          transition: 'background-color 200ms ease-in-out',
          '&:hover': {
            backgroundColor: 'var(--mui-palette-action-hover)',
          },
        }}
      >
        <TableCell align="center">{dayjs(slip.dateGiven).format('DD MMM YYYY')}</TableCell>
        <TableCell align="center">{slip.numberOfClothes}</TableCell>
        <TableCell align="center">{dayjs(slip.dateOfDelivery).format('DD MMM YYYY')}</TableCell>
      </TableRow>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle fontSize={22} fontWeight={600} >{`Laundry Details - ${dayjs(slip.dateGiven).format('DD MMM YYYY')}`}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 5, py: 1 }} gap={6}>
            <Paper elevation={10}  sx={{width:"40vw"}}>

            <Table>
              <TableHead sx={{ borderRadius: '8px' }}>
                <TableRow sx={{ borderRadius: '8px' }}>
                  <StyledTableCell sx={{fontSize:18}} align="center">Items</StyledTableCell>
                  <StyledTableCell sx={{fontSize:18}} align="center">Quantity</StyledTableCell>
                  <StyledTableCell sx={{fontSize:18}} align="center">Damaged</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody sx={{ borderRadius: '8px' }}>
                {slip.details.map((item) => (
                  <TableRow
                    key={item[0]}
                    >
                    <TableCell align="center" sx={{fontSize:15,color:item[2]>0?"red":"green"}} >{item[0]}</TableCell>
                    <TableCell align="center" sx={{fontSize:15,color:item[2]>0?"red":"green"}} >{item[1]}</TableCell>
                    <TableCell align="center" sx={{fontSize:15,color:item[2]>0?"red":"green"}} >{item[2]===0?"No":item[2]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
                </Paper>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{mb:1,mr:3}} variant="contained">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
