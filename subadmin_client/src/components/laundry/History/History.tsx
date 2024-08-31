'use client';

import * as React from 'react';
import {
  Box,
  Pagination,
  Paper,
  Typography,
} from '@mui/material';

import SearchLaundry from './SearchLaundry';
import LaundryTable from './LaundryTable';

interface ClothingTransaction {
  id: string;
  dateGiven: string;
  numberOfClothes: number;
  dateOfDelivery: string;
  details: [string, number, number][];
}

export default function History(): React.JSX.Element {
  const [slips, setSlips] = React.useState<ClothingTransaction[]>([
    {
      id: "1",
      dateGiven: "2024-05-04T00:00:00",
      numberOfClothes: 8,
      dateOfDelivery: "2024-05-11T00:00:00",
      details: [
        ["Tshirt", 4, 0],
        ["Lower", 3, 1]
      ]
    },
    {
      id: "2",
      dateGiven: "2024-04-31T00:00:00",
      numberOfClothes: 7,
      dateOfDelivery: "2024-05-04T00:00:00",
      details: [
        ["Shirt", 3, 0],
        ["Jeans", 2, 1],
        ["Towel", 2, 0]
      ]
    },
    {
      id: "3",
      dateGiven: "2024-04-31T00:00:00",
      numberOfClothes: 7,
      dateOfDelivery: "2024-05-04T00:00:00",
      details: [
        ["Shorts", 2, 0],
        ["BedSheet", 2, 0],
        ["Pants", 3, 1]
      ]
    },
    {
      id: "4",
      dateGiven: "2024-04-31T00:00:00",
      numberOfClothes: 7,
      dateOfDelivery: "2024-05-04T00:00:00",
      details: [
        ["Hoodie", 2, 0],
        ["Zipper", 2, 0],
        ["PillowCovers", 3, 1]
      ]
    },
    {
      id: "5",
      dateGiven: "2024-04-31T00:00:00",
      numberOfClothes: 7,
      dateOfDelivery: "2024-05-04T00:00:00",
      details: [
        ["Sweater", 2, 0],
        ["HandTowel", 3, 1],
        ["Skirts", 2, 0]
      ]
    }
  ]);

  const [pagination, setPagination] = React.useState({ page: 1, totalPages: 1 });
  
  const [searchFilters,setSearchFilters]=React.useState({dateGiven:""});

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number): void => {
    if (page === pagination.page) return;
    setPagination({ ...pagination, page });
  };

  return (
    <Paper elevation={10} sx={{ width: 1, height: 1, p: 3 }}>
      <Typography variant="h5">Laundry History</Typography>
      <Typography variant="body2" mt={0.2}>
        You can view your current and past laundry. Gets cleared after every 30 days.
      </Typography>

      <Box mt={3}>
        <SearchLaundry searchFilters={searchFilters} setSearchFilters={setSearchFilters} />
      </Box>



      <Box mt={2}>
        <LaundryTable slips={slips}/>
      </Box>

      <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: 0 }}>
        <Pagination count={pagination.totalPages} onChange={handleChangePage} variant="outlined" color="primary" />
      </Box>
    </Paper>
  );
}
