import React from "react";
import { useCallback, useMemo, useState, useEffect } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Button, Container, Stack, SvgIcon, Typography, Card } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { applyPagination } from "src/utils/apply-pagination";
import { StudentsTable } from "./batch-students-table";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";
import { useAuthContext } from "src/contexts/auth-context";
import { getStudents } from "src/services/others";
import { getBatch } from "src/services/batch";
import { TableSearch } from "src/components/table-search";

const useStudentsIDs = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const ViewBatchDetailsPage = ({ batchId }) => {
  const { accessToken } = useAuthContext();

  const [batchName, setBatchName] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [students, setStudents] = useState([]);
  const studentsIds = useStudentsIDs(students);
  const studentsSelection = useSelection(studentsIds);

  const [searchQuery, setSearchQuery] = useState("");

  console.log(batchId);

  useEffect(() => {
    try {
      const fetchBatchDetails = async () => {
        const res = await getBatch(batchId, accessToken);
        setBatchName(res?.data?.name);
        console.log(res);
      };

      fetchBatchDetails();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    try {
      const fetchStudentsData = async () => {
        const res = await getStudents(searchQuery, 20, page + 1, batchId, accessToken);
        if (res.status == 200) {
          setStudents(res.data.data);
        }
        console.log(res);
      };

      fetchStudentsData();
    } catch (err) {
      console.log(err);
    }
  }, [page, searchQuery]);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Stack direction="row" alignItems="center" mb={3}>
                  <Link href="/manage-batches" style={{ transform: "translateY(15%)" }}>
                    <KeyboardBackspaceIcon fontSize="large" />
                  </Link>

                  <Typography variant="h4" pl={3}>
                    {batchName}
                  </Typography>
                </Stack>

                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Import
                  </Button>

                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
            </Stack>

            <Card sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <TableSearch
                  setSearchQuery={setSearchQuery}
                  placeholder={"Enter Name, Email or Roll no."}
                />

                <Button sx={{ color: "error.main", height: "fit-content" }}>
                  Delete Selected Items
                </Button>
              </Stack>
            </Card>

            <StudentsTable
              count={students.length}
              items={students}
              onDeselectAll={studentsSelection.handleDeselectAll}
              onDeselectOne={studentsSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onSelectAll={studentsSelection.handleSelectAll}
              onSelectOne={studentsSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={studentsSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};
export default ViewBatchDetailsPage;
