'use client';

import * as React from 'react';
import { type CleaningRequest } from '@/services/cleaning';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { Box } from '@mui/system';
import dayjs from 'dayjs';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e9e9e9',
    color: '#595959',
    fontWeight: 600,
  },
}));

interface EleProps {
  tasks: CleaningRequest[] | undefined;
}

export default function CleaningTable({ tasks }: EleProps): React.JSX.Element {
  return tasks?.length === 0 ? (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '30%' }}>
      <Typography variant="body2">No Cleaning Requests Yet!</Typography>
    </Box>
  ) : (
    <Paper sx={{ borderRadius: '8px', overflowY: 'auto', overflowX: 'hidden', maxHeight: '50vh' }} elevation={10}>
      <Table stickyHeader>
        <TableHead>
          <TableRow sx={{ borderRadius: '8px', backgroundColor: 'red' }}>
            <StyledTableCell align="center">Day</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Janitor</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            {/* <StyledTableCell align="center">Rating</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody sx={{ borderRadius: '8px' }}>
          {tasks?.map((task) => <RowCleaning key={task?.date} task={task} />)}
        </TableBody>
      </Table>
    </Paper>
  );
}

function RowCleaning({ task }: { task: CleaningRequest }): React.JSX.Element {
  // const [value, setValue] = React.useState({ rating: 0, status: task.status });
  // const [open, setOpen] = React.useState(false);

  // const handleOpen = (): void => {
  //   setOpen(true);
  // };

  // const handleClose = (): void => {
  //   setOpen(false);
  // };

  // const handleChange = (event: SelectChangeEvent): void => {
  //   setValue({ rating: value.rating, status: event.target.value });
  // };

  // const handleSubmit = (): void => {
  //   setOpen(false);
  // };

  return (
    <>
      <TableRow
        // onClick={handleOpen}
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
        <TableCell align="center">{task.worker_details.name}</TableCell>
        <TableCell align="center">{task.status}</TableCell>
        {/* <TableCell align="center">
          <Rating
            name="read-only"
            sx={{ color: 'var(--mui-palette-text-secondaryChannel)' }}
            size="small"
            value={0}
            readOnly
          />
        </TableCell> */}
      </TableRow>

      {/* <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>{`Review Form - ${dayjs(task.date).format('DD MMM YYYY')}`}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 8, py: 1 }} gap={6}>
            <Box>
              <InputLabel sx={{ mb: 1 }} id="demo-dialog-select-label">
                Ratings
              </InputLabel>
              <Rating
                sx={{ color: 'var(--mui-palette-text-secondaryChannel)' }}
                name="simple-controlled"
                value={value.rating}
                size="large"
                onChange={(event, newValue) => {
                  setValue({ rating: newValue || 0, status: value.status });
                }}
              />
            </Box>

            <FormControl>
              <InputLabel sx={{ mb: 1 }} id="status-label">
                Status
              </InputLabel>
              <Select
                sx={{ width: '9rem' }}
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
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
}
