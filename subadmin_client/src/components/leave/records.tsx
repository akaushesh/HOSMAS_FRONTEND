'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { InfoOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useGetRecords, useSearchRecords, useTotalLeaves } from '@/hooks/query/use-leave';
import ActiveLeaves from './active';
import AllLeaves from './all-records';
import ApprovalLeave from './approvals';
import CancelLeaves from './cancel-requests';
import SearchResult from './search-results';
import { type Leave } from '@/services/leave';

export default function Records(): React.JSX.Element {
  const searchParams = useSearchParams();
  const queryState = Number(searchParams.get('state')) || 0;

  const [state, setState] = React.useState(queryState);
  const [showSearch, setShowSearch] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [records, setRecords] = React.useState<Leave[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [searchFilters, setSearchFilters] = React.useState({
    searchText: '',
    departureDate: null,
    arrivalDate: null,
    status: '',
  });

  const {
    data: recordsData,
    refetch
  } = useGetRecords({
    status: state === 0 ? 'c' : state === 1 ? 'active' : state === 2 ? '' : state === 3 ? 'x' : 'a',
    page,
    limit: 5,
  });

  React.useEffect(() => {
    if (recordsData?.data.leaves) {
      setRecords(recordsData.data.leaves);
    }
    setIsLoading(false);
  }, [recordsData]);

  const totalPages = recordsData?.data.total_pages ?? 1;

  React.useEffect(() => {
    setState(queryState);
  }, [queryState]);

  React.useEffect(() => {
    setRecords([]);
    setIsLoading(true);
    void refetch();
  }, [page, state, refetch]);

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value);
  };

  const { data: totalLeaves } = useTotalLeaves();
  const autoApproval = totalLeaves?.data.auto_approve ?? false;

  const {
    data: searchData,
    isLoading: searchLoading,
    refetch: searchRefetch,
  } = useSearchRecords({
    page,
    limit: 5,
    text_query: searchFilters.searchText,
    arrival_date: searchFilters.arrivalDate,
    departure_date: searchFilters.departureDate,
    status: searchFilters.status,
  }, (showSearch && searchFilters.searchText !== ""));

  const searchRecords = searchData?.data.leaves ?? [];

  const handleSearch = (): void => {
    void searchRefetch();
  };

  const handleStateChange = (newState: number) :void => {
    if (state !== newState) {
      setRecords([]);
      setIsLoading(true);
      setState(newState);
      setPage(1);
    }
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
            <Box>
              <Typography variant="h5">
                {state === 0 ? 'Pending Leaves' : state === 1 ? 'Active Leaves' : 'All Records'}
              </Typography>
              {state === 0 && autoApproval ? (
                <Stack mt="2px" direction="row" gap={1} alignItems="center">
                  <InfoOutlined color="primary" sx={{ fontSize: '20px' }} />
                  <Typography variant="body2" sx={{ color: 'var(--mui-palette-primary-main)', fontSize: '14px' }}>
                    Auto Approval is Enabled
                  </Typography>
                </Stack>
              ) : null}
            </Box>
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
                onClick={() => { handleStateChange(0); }}
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
                onClick={() => { handleStateChange(1); }}
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
                onClick={() => { handleStateChange(2); }}
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
                onClick={() => { handleStateChange(3); }}
              >
                Cancelled
              </Button>
            </Stack>
          </Stack>
        ) : (
          <>
            <Typography variant="h5">Search</Typography>
            <Stack direction="row" width="74%" gap={2} justifyContent="space-between" alignItems="stretch">
              <TextField
                variant="standard"
                sx={{ width: '40%' }}
                placeholder="Search Student"
                value={searchFilters.searchText}
                onChange={(e) => {
                  setSearchFilters({ ...searchFilters, searchText: e.target.value });
                }}
              />
              <Stack direction="row" gap={1}>
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
                <FormControl
                  sx={{ minWidth: { xs: 80, lg: 107 }, ml: 1 }}
                  disabled={!searchFilters.searchText}
                  size="small"
                >
                  <InputLabel>Type</InputLabel>
                  <Select
                    defaultValue="all"
                    onChange={(e) => {
                      setSearchFilters({ ...searchFilters, status: e.target.value });
                    }}
                    label="Day"
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="c">Pending</MenuItem>
                    <MenuItem value="d">declined</MenuItem>
                    <MenuItem value="x">Cancelled</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  disabled={!searchFilters.searchText}
                  onClick={handleSearch}
                  sx={{ ml: 1, py: 0.5, borderRadius: 1, px: 3 }}
                >
                  Search
                </Button>
                <IconButton
                  sx={{
                    transition: '0.3s ease-in-out',
                    mr: 1,
                    '&:hover': {
                      color: 'var(--mui-palette-secondary-dark)',
                      backgroundColor: 'var(--mui-palette-grey-200)',
                    },
                  }}
                  onClick={() => {
                    setShowSearch(false);
                    setSearchFilters({
                      searchText: '',
                      departureDate: null,
                      arrivalDate: null,
                      status: '',
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
          {showSearch ? (
            searchLoading ? (
              <Stack alignItems="center" justifyContent="center" height={1}>
                <CircularProgress size={27} />
              </Stack>
            ) : searchRecords.length === 0 ? (
              <Stack alignItems="center" justifyContent="center" height={1}>
                <Typography variant="body1" sx={{ color: 'var(--mui-palette-text-secondary)', textAlign: 'center' }}>
                  No Records Exists
                </Typography>
              </Stack>
            ) : (
              <Box>
                <SearchResult arr={searchRecords} refetch={searchRefetch} />
              </Box>
            )
          ) : (
            <>
              {isLoading ? (
                <Stack alignItems="center" justifyContent="center" height={1}>
                  <CircularProgress size={27} />
                </Stack>
              ) : records.length === 0 ? (
                <Stack alignItems="center" justifyContent="center" height={1}>
                  <Typography variant="body1" sx={{ color: 'var(--mui-palette-text-secondary)', textAlign: 'center' }}>
                    No Records Exists
                  </Typography>
                </Stack>
              ) : (
                <Box>
                  {state === 0 && <ApprovalLeave arr={records} refetch={refetch} />}
                  {state === 1 && <ActiveLeaves arr={records} />}
                  {state === 2 && <AllLeaves arr={records} />}
                  {state === 3 && <CancelLeaves arr={records} refetch={refetch} />}
                </Box>
              )}
            </>
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