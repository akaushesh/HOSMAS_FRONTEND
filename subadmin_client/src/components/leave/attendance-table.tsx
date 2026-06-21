'use client';

import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Chip,
  IconButton,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Stack,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Skeleton,
} from '@mui/material';
import { Check, X, PencilSimple, EnvelopeSimple, MagnifyingGlass } from '@phosphor-icons/react';
import { type AttendanceResult } from '@/types/attendance';

interface AttendanceTableProps {
  results: AttendanceResult[];
  updatingIds?: number[];
  isLoading?: boolean;
  onUpdateStatus: (resultId: number, status: string) => Promise<void>;
  onBulkUpdateStatus: (resultIds: number[], status: string) => Promise<void>;
  onSendMail: (resultIds?: number[]) => Promise<void>;
  isReadOnly?: boolean;
}

export default function AttendanceTable({
  results,
  updatingIds = [],
  isLoading = false,
  onUpdateStatus,
  onBulkUpdateStatus,
  onSendMail,
  isReadOnly = false,
}: AttendanceTableProps): React.JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedIds, setSelectedIds] = React.useState<number[]>([]);
  const [editingId, setEditingId] = React.useState<number | null>(null);
  const [editingStatus, setEditingStatus] = React.useState<string>('');
  const [isBulkModalOpen, setIsBulkModalOpen] = React.useState(false);
  const [bulkStatus, setBulkStatus] = React.useState<string>('outside_college');
  const [selectedStatusFilter, setSelectedStatusFilter] = React.useState<string | null>(null);

  const getStatusPriority = (status: string): number => {
    switch (status) {
      case 'outside_college':
        return 1;
      case 'out_of_hostel':
        return 2;
      case 'on_leave':
        return 3;
      case 'present':
        return 4;
      default:
        return 5;
    }
  };

  // Client-side filtering and sorting (Outside > Out of Hostel > On Leave > Present, then sorted by roll number)
  const filteredResults = React.useMemo(() => {
    let queryFiltered = results.filter(
      (r) =>
        r.rollNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.studentName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (selectedStatusFilter) {
      queryFiltered = queryFiltered.filter((r) => r.status === selectedStatusFilter);
    }

    return [...queryFiltered].sort((a, b) => {
      const pA = getStatusPriority(a.status);
      const pB = getStatusPriority(b.status);
      if (pA !== pB) {
        return pA - pB;
      }
      return a.rollNumber.localeCompare(b.rollNumber, undefined, { numeric: true });
    });
  }, [results, searchQuery, selectedStatusFilter]);

  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      setSelectedIds(filteredResults.map((r) => r.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id: number): void => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleStartEdit = (row: AttendanceResult): void => {
    setEditingId(row.id);
    setEditingStatus(row.status);
  };

  const handleCancelEdit = (): void => {
    setEditingId(null);
    setEditingStatus('');
  };

  const handleSaveEdit = async (id: number): Promise<void> => {
    const targetStatus = editingStatus;
    setEditingId(null);
    setEditingStatus('');
    await onUpdateStatus(id, targetStatus);
  };

  const handleBulkEditSave = async (): Promise<void> => {
    await onBulkUpdateStatus(selectedIds, bulkStatus);
    setIsBulkModalOpen(false);
    setSelectedIds([]);
  };

  const handleBulkSendMail = async (): Promise<void> => {
    await onSendMail(selectedIds);
    setSelectedIds([]);
  };

  const getStatusChip = (status: string): React.JSX.Element => {
    const chipStyle = { fontSize: '0.72rem', height: '20px', fontWeight: 600 };
    switch (status) {
      case 'outside_college':
        return <Chip label="Outside College" color="error" size="small" sx={chipStyle} />;
      case 'out_of_hostel':
        return <Chip label="Out of Hostel" color="warning" size="small" sx={chipStyle} />;
      case 'on_leave':
        return <Chip label="On Leave" color="default" size="small" sx={chipStyle} />;
      case 'present':
        return <Chip label="Present" color="success" size="small" sx={chipStyle} />;
      default:
        const capitalized = status.charAt(0).toUpperCase() + status.slice(1);
        return <Chip label={capitalized} size="small" sx={chipStyle} />;
    }
  };

  const isAllSelected =
    filteredResults.length > 0 && selectedIds.length === filteredResults.length;

  return (
    <Stack spacing={2} width={1} position="relative" sx={{ minHeight: '400px' }}>
      {/* Search and Summary Chips */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'stretch', sm: 'center' }}
        spacing={2}
      >
        <SearchInput onSearchChange={setSearchQuery} />

        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip
            label={`Present: ${results.filter((r) => r.status === 'present').length}`}
            color="success"
            variant={selectedStatusFilter === 'present' ? 'filled' : 'outlined'}
            onClick={() => {
              setSelectedStatusFilter((prev) => (prev === 'present' ? null : 'present'));
            }}
            size="small"
            sx={{ fontWeight: 600, cursor: 'pointer' }}
          />
          <Chip
            label={`Outside: ${results.filter((r) => r.status === 'outside_college').length}`}
            color="error"
            variant={selectedStatusFilter === 'outside_college' ? 'filled' : 'outlined'}
            onClick={() => {
              setSelectedStatusFilter((prev) => (prev === 'outside_college' ? null : 'outside_college'));
            }}
            size="small"
            sx={{ fontWeight: 600, cursor: 'pointer' }}
          />
          <Chip
            label={`Out of Hostel: ${results.filter((r) => r.status === 'out_of_hostel').length}`}
            color="warning"
            variant={selectedStatusFilter === 'out_of_hostel' ? 'filled' : 'outlined'}
            onClick={() => {
              setSelectedStatusFilter((prev) => (prev === 'out_of_hostel' ? null : 'out_of_hostel'));
            }}
            size="small"
            sx={{ fontWeight: 600, cursor: 'pointer' }}
          />
          <Chip
            label={`On Leave: ${results.filter((r) => r.status === 'on_leave').length}`}
            color="default"
            variant={selectedStatusFilter === 'on_leave' ? 'filled' : 'outlined'}
            onClick={() => {
              setSelectedStatusFilter((prev) => (prev === 'on_leave' ? null : 'on_leave'));
            }}
            size="small"
            sx={{ fontWeight: 600, cursor: 'pointer' }}
          />
        </Stack>
      </Stack>

      {/* Results Table */}
      <TableContainer component={Paper} variant="outlined" sx={{ maxHeight: 680 }}>
        <Table
          stickyHeader
          size="small"
          sx={{
            '& .MuiTableCell-root': {
              py: 0.25,
              px: 1,
              fontSize: '0.75rem',
            },
          }}
        >
          <TableHead>
            <TableRow>
              {!isReadOnly && (
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={isAllSelected}
                    indeterminate={selectedIds.length > 0 && !isAllSelected}
                    onChange={handleSelectAll}
                  />
                </TableCell>
              )}
              <TableCell sx={{ fontWeight: 600, width: '90px', fontSize: '0.775rem' }}>Roll No</TableCell>
              <TableCell sx={{ fontWeight: 600, width: '110px', fontSize: '0.775rem' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600, width: '105px', fontSize: '0.775rem' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 600, fontSize: '0.775rem' }}>Last Whereabout</TableCell>
              <TableCell sx={{ fontWeight: 600, width: '90px', fontSize: '0.775rem' }}>Mail Sent</TableCell>
              {!isReadOnly && <TableCell sx={{ fontWeight: 600, width: '50px', fontSize: '0.775rem' }} align="right">Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 8 }).map((_, idx) => (
                <TableRow key={idx}>
                  {!isReadOnly && (
                    <TableCell padding="checkbox">
                      <Checkbox disabled checked={false} />
                    </TableCell>
                  )}
                  <TableCell><Skeleton variant="text" width="60%" /></TableCell>
                  <TableCell><Skeleton variant="text" width="80%" /></TableCell>
                  <TableCell><Skeleton variant="rounded" width={90} height={20} /></TableCell>
                  <TableCell><Skeleton variant="text" width="90%" /></TableCell>
                  <TableCell><Skeleton variant="rounded" width={80} height={18} /></TableCell>
                  {!isReadOnly && (
                    <TableCell align="right">
                      <Skeleton variant="circular" width={24} height={24} />
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : filteredResults.length === 0 ? (
              <TableRow>
                <TableCell colSpan={isReadOnly ? 5 : 7} align="center" sx={{ py: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                    No student results match the search query.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredResults.map((row) => {
                const isSelected = selectedIds.includes(row.id);
                const isEditing = editingId === row.id;

                return (
                  <TableRow key={row.id} hover selected={isSelected}>
                    {!isReadOnly && (
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isSelected}
                          onChange={() => {
                            handleSelectRow(row.id);
                          }}
                        />
                      </TableCell>
                    )}
                    <TableCell sx={{ fontWeight: 500, fontSize: '0.75rem' }}>{row.rollNumber}</TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '110px',
                        fontSize: '0.75rem',
                      }}
                      title={row.studentName}
                    >
                      {row.studentName}
                    </TableCell>
                    <TableCell>
                      {updatingIds.includes(row.id) ? (
                        <Skeleton variant="rounded" width={90} height={20} sx={{ borderRadius: 1 }} />
                      ) : isEditing ? (
                        <Select
                          value={editingStatus}
                          size="small"
                          onChange={(e) => {
                            setEditingStatus(e.target.value);
                          }}
                          sx={{ minWidth: 120, fontSize: '0.75rem' }}
                        >
                          <MenuItem value="present">Present</MenuItem>
                          <MenuItem value="outside_college">Outside College</MenuItem>
                          <MenuItem value="out_of_hostel">Out of Hostel</MenuItem>
                          <MenuItem value="on_leave">On Leave</MenuItem>
                        </Select>
                      ) : (
                        getStatusChip(row.status)
                      )}
                    </TableCell>
                    <TableCell
                      sx={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '170px',
                        fontSize: '0.75rem',
                      }}
                      title={row.lastWhereabout}
                    >
                      {row.lastWhereabout}
                    </TableCell>
                    <TableCell>
                      {row.mailSent ? (
                        <Chip label="Sent" size="small" color="success" variant="outlined" sx={{ fontSize: '0.7rem', height: '18px' }} />
                      ) : (
                        <Chip label="Pending" size="small" color="default" variant="outlined" sx={{ fontSize: '0.7rem', height: '18px' }} />
                      )}
                    </TableCell>
                    {!isReadOnly && (
                      <TableCell align="right">
                        {isEditing ? (
                          <Stack direction="row" spacing={0.5} justifyContent="flex-end">
                            <IconButton
                              size="small"
                              color="success"
                              onClick={() => {
                                void handleSaveEdit(row.id);
                              }}
                            >
                              <Check size={16} />
                            </IconButton>
                            <IconButton size="small" color="error" onClick={handleCancelEdit}>
                              <X size={16} />
                            </IconButton>
                          </Stack>
                        ) : (
                          <IconButton
                            size="small"
                            onClick={() => {
                              handleStartEdit(row);
                            }}
                          >
                            <PencilSimple size={16} />
                          </IconButton>
                        )}
                      </TableCell>
                    )}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Floating Action Bar */}
      {selectedIds.length > 0 && !isReadOnly && (
        <Paper
          elevation={6}
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            p: 1.5,
            borderRadius: 2,
            backgroundColor: 'var(--mui-palette-background-paper)',
            border: '1px solid var(--mui-palette-divider)',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Typography variant="body2" sx={{ fontWeight: 600, pl: 1 }}>
              {selectedIds.length} selected
            </Typography>
            <Button
              size="small"
              variant="contained"
              color="primary"
              startIcon={<PencilSimple size={16} />}
              onClick={() => {
                setIsBulkModalOpen(true);
              }}
            >
              Edit Status
            </Button>
            <Button
              size="small"
              variant="contained"
              color="success"
              startIcon={<EnvelopeSimple size={16} />}
              onClick={() => {
                void handleBulkSendMail();
              }}
            >
              Send Mail
            </Button>
            <IconButton
              size="small"
              onClick={() => {
                setSelectedIds([]);
              }}
            >
              <X size={16} />
            </IconButton>
          </Stack>
        </Paper>
      )}

      {/* Bulk Edit Modal */}
      <Dialog
        open={isBulkModalOpen}
        onClose={() => {
          setIsBulkModalOpen(false);
        }}
      >
        <DialogTitle>Bulk Edit Status</DialogTitle>
        <DialogContent sx={{ minWidth: 280, pt: 1 }}>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Typography variant="body2">
              Update the attendance status of the {selectedIds.length} selected students.
            </Typography>
            <FormControl fullWidth size="small">
              <InputLabel>Status</InputLabel>
              <Select
                value={bulkStatus}
                label="Status"
                onChange={(e) => {
                  setBulkStatus(e.target.value);
                }}
              >
                <MenuItem value="present">Present</MenuItem>
                <MenuItem value="outside_college">Outside College</MenuItem>
                <MenuItem value="out_of_hostel">Out of Hostel</MenuItem>
                <MenuItem value="on_leave">On Leave</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setIsBulkModalOpen(false);
            }}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={() => void handleBulkEditSave()}>
            Apply Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}

interface SearchInputProps {
  onSearchChange: (val: string) => void;
}

const SearchInput = React.memo(({ onSearchChange }: SearchInputProps): React.JSX.Element => {
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    const handler = setTimeout(() => {
      onSearchChange(value);
    }, 250);
    return () => {
      clearTimeout(handler);
    };
  }, [value, onSearchChange]);

  return (
    <TextField
      size="small"
      placeholder="Search by Roll No or Name..."
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
      sx={{ width: { xs: '100%', sm: '300px' } }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <MagnifyingGlass size={18} />
          </InputAdornment>
        ),
      }}
    />
  );
});

SearchInput.displayName = 'SearchInput';
