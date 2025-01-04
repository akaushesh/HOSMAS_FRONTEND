'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Pagination,
  Paper,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

import { useGetRecords } from '@/hooks/query/use-leave';

import ActiveLeaves from './active';
import AllLeaves from './all-records';
import ApprovalLeave from './approvals';
import CancelLeaves from './cancel-requests';

export default function Records(): React.JSX.Element {
  const searchParams = useSearchParams();
  const queryState = Number(searchParams.get('state')) || 0;

  const [state, setstate] = React.useState(queryState);
  const [showSearch, setShowSearch] = React.useState(false);

  const [page, setPage] = React.useState(1);

  const [searchFilters, setSearchFilters] = React.useState({
    searchText: '',
    departureDate: null,
    arrivalDate: null,
  });

  const {
    data: recordsData,
    isLoading,
    refetch,
  } = useGetRecords({
    status: state === 0 ? 'c' : state === 1 ? 'a' : state === 2 ? 'a' : state === 3 ? 'rc' : 'a',
    page,
    limit: 5,
  });

  const records = recordsData?.data.leaves ?? [];
  const totalPages = recordsData?.data.total_pages ?? 1;

  React.useEffect(() => {
    setstate(queryState);
  }, [queryState]);

  React.useEffect(() => {
    void refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- refetch is a dependency
  }, [page, state]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value);
  };

  const handleSearch = (): void => {
    // console.log(searchFilters);
  };

  return (
    <Paper sx={{ width: 1, p: 3, minHeight: '68vh', mt: 3 }} elevation={10}>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        {!showSearch ? (
          <Stack direction="row" width={1} alignItems="flex-end" justifyContent="space-between" gap={2}>
            <Typography variant="h5">
              {state === 0 ? 'Pending Leaves' : state === 1 ? 'Active Leaves' : 'All Records'}
            </Typography>
            <Stack direction="row" gap={1} sx={{ width: { xs: '85%', md: '45%' }, justifyContent: 'center' }}>
              <Tooltip title="Search">
                <IconButton
                  sx={{
                    transition: '0.3s ease-in-out',
                    mr: 1,
                    '&:hover': {
                      color: 'var(--mui-palette-primary-main)',
                      backgroundColor: '#efc5c5',
                    },
                  }}
                  onClick={() => {
                    setShowSearch(true);
                  }}
                >
                  <SearchIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
              <Button
                sx={{
                  borderRadius: 1,
                  borderWidth: '2px',
                  fontWeight: '600',
                  py: 0.5,
                  '&:hover': { borderWidth: '2px' },
                  minWidth: '20%',
                  fontSize: { xs: '12px', sm: '14px' },
                }}
                variant={state === 0 ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => {
                  if (state !== 0) setstate(0);
                }}
              >
                Pending
              </Button>
              <Button
                sx={{
                  borderRadius: 1,
                  borderWidth: '2px',
                  fontWeight: '600',
                  py: 0.5,
                  '&:hover': { borderWidth: '2px' },
                  minWidth: '20%',
                  fontSize: { xs: '12px', sm: '14px' },
                }}
                variant={state === 1 ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => {
                  if (state !== 1) setstate(1);
                }}
              >
                Active
              </Button>
              <Button
                sx={{
                  borderRadius: 1,
                  borderWidth: '2px',
                  fontWeight: '600',
                  py: 0.5,
                  '&:hover': { borderWidth: '2px' },
                  minWidth: '20%',
                  fontSize: { xs: '12px', sm: '14px' },
                }}
                variant={state === 2 ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => {
                  if (state !== 2) setstate(2);
                }}
              >
                All
              </Button>
              <Button
                sx={{
                  borderRadius: 1,
                  borderWidth: '2px',
                  fontWeight: '600',
                  py: 0.5,
                  '&:hover': { borderWidth: '2px' },
                  minWidth: '20%',
                  fontSize: { xs: '12px', sm: '14px' },
                }}
                variant={state === 3 ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => {
                  if (state !== 3) setstate(3);
                }}
              >
                Cancelled
              </Button>
            </Stack>
          </Stack>
        ) : (
          <>
            <Typography variant="h5">Search</Typography>
            <Stack direction="row" width="70%" gap={2} justifyContent="space-between" alignItems="stretch">
              <TextField
                variant="standard"
                sx={{ width: '50%' }}
                placeholder="Search Student"
                value={searchFilters.searchText}
                onChange={(e) => {
                  setSearchFilters({ ...searchFilters, searchText: e.target.value });
                }}
              />
              <Stack direction="row" gap={1} alignItems="stretch">
                <DatePicker
                  label="Departure Date"
                  value={searchFilters.departureDate}
                  onChange={(newValue) => {
                    setSearchFilters({ ...searchFilters, departureDate: newValue });
                  }}
                  disabled={!searchFilters.searchText}
                  sx={{
                    ml: 1,
                  }}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      size: 'small',
                    },
                  }}
                />
                <DatePicker
                  label="Arrival Date"
                  value={searchFilters.arrivalDate}
                  onChange={(newValue) => {
                    setSearchFilters({ ...searchFilters, arrivalDate: newValue });
                  }}
                  disabled={!searchFilters.searchText}
                  sx={{
                    ml: 1,
                  }}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      size: 'small',
                    },
                  }}
                />

                <Button
                  variant="contained"
                  disabled={!searchFilters.searchText}
                  onClick={() => {
                    handleSearch();
                  }}
                  sx={{ ml: 2, py: 0.5, borderRadius: 1, px: 3 }}
                >
                  Search
                </Button>
                <IconButton
                  sx={{
                    transition: '0.3s ease-in-out',
                    mr: 1,
                    '&:hover': {
                      color: 'var(--mui-palette-primary-main)',
                      backgroundColor: '#efc5c5',
                    },
                  }}
                  onClick={() => {
                    setShowSearch(false);
                    setSearchFilters({
                      searchText: '',
                      departureDate: null,
                      arrivalDate: null,
                    });
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              </Stack>
            </Stack>
          </>
        )}
      </Stack>
      <Box sx={{ width: 1, mt: 2, backgroundColor: 'var(--mui-palette-background-level3)', p: 2 }}>
        <Box width={1} sx={{ height: '50vh', pr: 1, overflowY: 'auto' }}>
          {isLoading ? (
            <Stack alignItems="center" justifyContent="center" height={1}>
              <CircularProgress size={27} />
            </Stack>
          ) : records.length === 0 ? (
            <Stack alignItems="center" justifyContent="center" height={1}>
              <Typography variant="body1" sx={{ color: 'var(--mui-palette-text-secondary)', textAlign: 'center' }}>
                No pending approvals
              </Typography>
            </Stack>
          ) : (
            <Box>
              {state === 0 && <ApprovalLeave arr={records} />}
              {state === 1 && <ActiveLeaves arr={records} />}
              {state === 2 && <AllLeaves arr={records} />}
              {state === 3 && <CancelLeaves arr={records} />}
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: 0 }}>
        <Pagination
          count={totalPages}
          disabled={totalPages === 1}
          onChange={handleChangePage}
          variant="outlined"
          color="primary"
        />
      </Box>
    </Paper>
  );
}
