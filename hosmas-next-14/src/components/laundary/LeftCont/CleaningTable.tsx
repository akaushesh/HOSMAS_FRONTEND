'use client';

import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Rating,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  type SelectChangeEvent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Box } from '@mui/system';
import dayjs from 'dayjs';

interface Task {
  id: string;
  date: string;
  janitor: string;
  status: string;
  rating: number;
}

interface EleProps {
  tasks: Task[];
}

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e9e9e9',
    color: '#595959',
    fontWeight: 600,
  },
}));

export default function CleaningTable({ tasks }: EleProps): React.JSX.Element {
  return (
    <Paper sx={{ borderRadius: '8px', overflowY: 'auto', overflowX: 'hidden', height: '42vh' }} elevation={10}>
      <Table stickyHeader>
        <TableHead>
          <TableRow sx={{ borderRadius: '8px', backgroundColor: 'red' }}>
            <StyledTableCell align="center">Day</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Janitor</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Rating</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ borderRadius: '8px' }}>
          {tasks.map((task) => (
            <RowCleaning key={task.id} task={task} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}



function RowCleaning({ task }: { task: Task }): React.JSX.Element {
  const [value, setValue] = React.useState({ rating: task.rating, status: task.status });
  const [open, setOpen] = React.useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent): void => {
    setValue({ rating: value.rating, status: event.target.value });
  };

  const handleSubmit = (): void => {
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
        <TableCell align="center">{dayjs(task.date).format('DD MMM YYYY')}</TableCell>
        <TableCell align="center">{dayjs(task.date).format('hh:mm A')}</TableCell>
        <TableCell align="center">{task.janitor}</TableCell>
        <TableCell align="center">{task.status}</TableCell>
        <TableCell align="center">
          <Rating name="read-only"
              sx={{color:"var(--mui-palette-text-secondaryChannel)"}}
              size='small'
              value={task.rating} readOnly />
        </TableCell>
      </TableRow>

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>{`Review Form - ${dayjs(task.date).format("DD MMM YYYY")}`}</DialogTitle>
        <DialogContent>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",px:8,py:3}} gap={6}>

          <Box>
            <InputLabel sx={{mb:1}} id="demo-dialog-select-label">Ratings</InputLabel>
            <Rating
              sx={{color:"var(--mui-palette-text-secondaryChannel)"}}
              name="simple-controlled"
              value={value.rating}
              size='large'
              onChange={(event, newValue) => {
                setValue({ rating: newValue || 0, status: value.status });
              }}
            />
          </Box>

            <FormControl>
              <InputLabel sx={{mb:1}} id="status-label">Status</InputLabel>
              <Select
                sx={{width:"9rem"}}
                labelId="status-label"
                id="status-label"
                label="Status"
                value={value.status}
                onChange={handleChange}
                input={<OutlinedInput label="Status" />}
                >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
          </FormControl>

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">Cancel</Button>
          <Button onClick={handleSubmit} variant='contained'>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
