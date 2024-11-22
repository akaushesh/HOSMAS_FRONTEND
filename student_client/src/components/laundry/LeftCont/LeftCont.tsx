'use client';

import * as React from 'react';
import { type LaundrySlipResponse } from '@/services/laundry';
import { Box, CircularProgress, Pagination, Paper, Typography } from '@mui/material';

import LaundryTable from './LaundryTable';
// import SearchLaundry from './SearchLaundry';

interface HistoryDataProps {
  historyData: LaundrySlipResponse[] | null;
}

export default function LeftCont({ historyData }: HistoryDataProps): React.JSX.Element {
  const recordsPerPage = 5;
  const totalPages = historyData ? Math.ceil(historyData.length / recordsPerPage) : 1;

  const [pagination, setPagination] = React.useState({ page: 1, totalPages });
  // const [searchFilters, setSearchFilters] = React.useState({ dateGiven: '' });

  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number): void => {
    if (page === pagination.page) return;
    setPagination((prev) => ({ ...prev, page }));
  };

  const paginatedData = historyData
    ? historyData.slice((pagination.page - 1) * recordsPerPage, pagination.page * recordsPerPage)
    : [];

  React.useEffect(() => {
    setPagination((prev) => ({ ...prev, totalPages }));
  // eslint-disable-next-line react-hooks/exhaustive-deps -- limited deps
  }, [historyData]);


  return (
    <Paper elevation={10} sx={{ width: 1, height: 1, p: 3 }}>
      <Typography variant="h5">Laundry History</Typography>
      <Typography variant="body2" mt={0.4} lineHeight={1.3}>
        You can view your current and past laundry. Gets cleared after every 30 days.
      </Typography>

      <Box mt={3}>
        {/* <SearchLaundry searchFilters={searchFilters} setSearchFilters={setSearchFilters} /> */}
      </Box>

      {historyData === null || historyData?.length === 0 ? (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',height:0.7}}>
          {historyData === null ? (
            <CircularProgress size={35}/>
          ) : (
            <Typography variant="h6">No Previous Records</Typography>
          )}
        </Box>
      ) : (
        <>
          <Box mt={3} sx={{minHeight:{xs:"42vh",md:"36vh"}}}>
            <LaundryTable laundrySlips={paginatedData} />
          </Box>

          <Box sx={{ mt: 2, display: pagination.totalPages>1 ?'flex':'none', alignItems: 'center', justifyContent: 'center' }}>
            <Pagination
              count={pagination.totalPages}
              page={pagination.page}
              onChange={handleChangePage}
              variant="outlined"
              color="primary"
            />
          </Box>
        </>
      )}
    </Paper>
  );
}
