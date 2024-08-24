'use client';

import * as React from 'react';
import {
  Box,
  Pagination,
  Paper,
  Typography,
} from '@mui/material';

import CleaningTable from './CleaningTable';
import SearchCleaning from './SearchCleaning';

interface Task {
  id:string;
  date: string;
  janitor: string;
  status: string;
  rating: number;
}

export default function LeftCont(): React.JSX.Element {
  const [tasks, setTasks] = React.useState<Task[]>([
    {
      id: 'task-1',
      date: '2024-07-31T00:00',
      janitor: 'Prakash',
      status: 'Pending',
      rating: 0,
    },
    {
      id: 'task-2',
      date: '2024-07-30T19:40',
      janitor: 'Prakash',
      status: 'Completed',
      rating: 5,
    },
    {
      id: 'task-3',
      date: '2024-07-29T19:40',
      janitor: 'Prakash',
      status: 'Completed',
      rating: 5,
    },
    {
      id: 'task-4',
      date: '2024-03-19T19:40',
      janitor: 'Prakash',
      status: 'Completed',
      rating: 4,
    },
    {
      id: 'task-5',
      date: '2024-03-17T19:40',
      janitor: 'Prakash',
      status: 'Completed',
      rating: 4,
    },
    {
      id: 'task-6',
      date: '2024-03-12T19:40',
      janitor: 'Prakash',
      status: 'Completed',
      rating: 5,
    },
    {
      id: 'task-7',
      date: '2024-03-11T19:40',
      janitor: 'Prakash',
      status: 'Cancelled',
      rating: 1,
    },
    {
      id: 'task-8',
      date: '2024-07-30T19:40',
      janitor: 'Prakash',
      status: 'Completed',
      rating: 0,
    },
  ]);
  
  
  const [pagination, setPagination] = React.useState({ page: 1, totalPages: 1 });
  
  const [searchFilters,setSearchFilters]=React.useState({name:"",date:""});

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number): void => {
    if (page === pagination.page) return;
    setPagination({ ...pagination, page });
  };

  return (
    <Paper elevation={10} sx={{ width: 1, height: 1, p: 3 }}>
      <Typography variant="h5">Room Cleaning History</Typography>
      <Typography variant="body2" mt={0.2}>
        You can view your current and past room cleaning. Gets cleared after every 30 days.
      </Typography>

      <Box mt={3}>
        <SearchCleaning searchFilters={searchFilters} setSearchFilters={setSearchFilters} />
      </Box>



      <Box mt={2}>
        <CleaningTable tasks={tasks}/>
      </Box>

      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: 0 }}>
        <Pagination count={pagination.totalPages} onChange={handleChangePage} variant="outlined" color="primary" />
      </Box>
    </Paper>
  );
}
