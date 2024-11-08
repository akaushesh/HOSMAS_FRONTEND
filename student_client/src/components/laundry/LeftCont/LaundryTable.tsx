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
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import dayjs from 'dayjs';
import { type LaundrySlipResponse } from '@/services/laundry';
import { laundryItems } from '@/hooks/mutation/use-laundry';


interface EleProps {
  laundrySlips: LaundrySlipResponse[];
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e9e9e9',
    color: '#595959',
    fontWeight: 600,
  },
}));

function separateIntegerAndDecimal(number: number): { integer: number; decimal: number } {
  const [integerPart, decimalPart] = number.toString().split(".");
  return {
    integer: parseInt(integerPart, 10),
    decimal: decimalPart ? parseInt(decimalPart, 10) : 0
  };
}

export default function LaundryTable({ laundrySlips }: EleProps): React.JSX.Element {
  return (
    <Paper sx={{ borderRadius: '8px', overflowY: 'auto', overflowX: 'hidden', height: '35.5 vh' }} elevation={10}>
      <Table stickyHeader>
        <TableHead>
          <TableRow sx={{ borderRadius: '8px', backgroundColor: 'red' }}>
            <StyledTableCell align="center">Drop-off</StyledTableCell>
            <StyledTableCell align="center">Clothes</StyledTableCell>
            <StyledTableCell align="center">Pick-up</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ borderRadius: '8px' }}>
          {laundrySlips.map((slip) => (
            <RowLaundry key={slip.id} slip={slip} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

function RowLaundry({ slip }: { slip: LaundrySlipResponse }): React.JSX.Element {
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const { LaundrySlipID: _LaundrySlipID, id: _id, ...rest } = slip.items;
  const items: Record<string, number> = rest;

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
        <TableCell align="center" sx={{display:{xs:'none',md:"block"}}}>{dayjs(slip.dropoff_time).format('DD MMM YYYY')}</TableCell>
        <TableCell align="center" sx={{display:{xs:'block',md:"none"}}}>{dayjs(slip.dropoff_time).format('DD/MM/YY')}</TableCell>

        <TableCell align="center">{slip.item_count}</TableCell>
        
        <TableCell align="center" sx={{display:{xs:'none',md:"block"}}}>{slip.is_delivered?dayjs(slip.delievery_time).format('DD MMM YYYY'):"Pending"}</TableCell>
        <TableCell align="center" sx={{display:{xs:'block',md:"none"}}}>{slip.is_delivered?dayjs(slip.delievery_time).format('DD/MM/YY'):"Pending"}</TableCell>
      </TableRow>

      <Dialog
  open={open}
  onClose={handleClose}
  maxWidth="lg"
  sx={{
    '& .MuiDialog-paper': {
      width: { xs: '90%', md: '40%' }, // 90% for xs, 40% for md and larger
      maxWidth: 'none', // Ensure it doesn't shrink unnecessarily
    },
  }}
>
  <DialogTitle fontSize={25} fontWeight={600}>
    Laundry Details
    <Typography variant="body1" fontSize="19px">
      {dayjs(slip.delievery_time).format('DD MMM YYYY')}
    </Typography>
  </DialogTitle>
  <DialogContent>
    <Paper elevation={10}>
      <Table
        sx={{
          width: '100%',
          tableLayout: 'fixed', // Ensure table takes up the full width and doesn't overflow
        }}
      >
        <TableHead sx={{ borderRadius: '8px' }}>
          <TableRow>
            <StyledTableCell sx={{ fontSize: 14 }} align="center">
              Items
            </StyledTableCell>
            <StyledTableCell sx={{ fontSize: 14 }} align="center">
              Quantity
            </StyledTableCell>
            <StyledTableCell sx={{ fontSize: 14 }} align="center">
              Damaged
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(items).map((item ) =>{ 
            if(item==='id'||item==="LaundrySlipID"||items[item]===0) return null;
            const { integer: total, decimal: damaged } = separateIntegerAndDecimal(items[item]);
            return(
            <TableRow key={item[0]}>
              <TableCell
                align="center"
                sx={{
                  fontSize: 15,
                  color: damaged > 0 ? 'red' : 'green',
                  wordWrap: 'break-word', // Ensure no content overflow
                }}
              >
                {laundryItems[item]}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: 15,
                  color: damaged > 0 ? 'red' : 'green',
                  wordWrap: 'break-word',
                }}
              >
                {total}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  fontSize: 15,
                  color: damaged > 0 ? 'red' : 'green',
                  wordWrap: 'break-word',
                }}
              >
                {damaged === 0 ? 'No' : damaged}
              </TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </Paper>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose} sx={{ mb: 1, mr: 3 }} variant="contained">
      Cancel
    </Button>
  </DialogActions>
</Dialog>

    </>
  );
}
