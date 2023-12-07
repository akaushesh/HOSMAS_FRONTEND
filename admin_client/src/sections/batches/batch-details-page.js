import React from "react";
import { useCallback, useMemo, useState, useEffect } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { applyPagination } from "src/utils/apply-pagination";
import { StudentsTable } from "./batch-students-table";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";
import { useAuthContext } from "src/contexts/auth-context";
import { getStudents } from "src/services/others";
import { deleteBatch, getBatch } from "src/services/batch";
import { TableSearch } from "src/components/table-search";
import ConfirmationModal from "src/components/ConfirmationModal";
import { useRouter } from "next/router";

const useStudentsIDs = (students) => {
  return useMemo(() => {
    return students.map((student) => student.rollno);
  }, [students]);
};

const ViewBatchDetailsPage = ({ batchId }) => {
  const { accessToken } = useAuthContext();
  const router = useRouter();

  const [batchName, setBatchName] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [students, setStudents] = useState([]);
  const studentsIds = useStudentsIDs(students);
  const studentsSelection = useSelection(studentsIds);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState();

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

  const handleDeleteBatch = async () => {
    try {
      const res = await deleteBatch(batchId, accessToken);
      console.log(res);

      if (res.status == 200) {
        setConfirmationModalOpen(false);
        router.push("/manage-batches");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
          <Stack direction="row" alignItems="center" mb={8} justifyContent="space-between">
            <Stack direction="row" alignItems="center">
              <Link href="/manage-batches" style={{ transform: "translateY(15%)" }}>
                <KeyboardBackspaceIcon fontSize="large" />
              </Link>

              <Typography variant="h3" pl={3}>
                {batchName}
              </Typography>
            </Stack>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "error.main",
                "&:hover": {
                  backgroundColor: "error.dark",
                },
              }}
              onClick={() => {
                setConfirmationModalOpen(true);
              }}
            >
              Delete Batch
            </Button>
          </Stack>

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent="space-evenly">
                    <Typography variant="h5">Total Students: </Typography>
                    <Typography variant="h5">83</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Stack direction="row" justifyContent="space-evenly">
                    <Typography variant="h5">Total Students: </Typography>
                    <Typography variant="h5">83</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <ConfirmationModal
          open={confirmationModalOpen}
          onClose={() => {
            setConfirmationModalOpen(false);
          }}
          message="Are you sure you want to delete this secton?"
          noMessage="No, leave it"
          yesMessage="Yes, delete it"
          execFunction={handleDeleteBatch}
        />
      </Box>
    </>
  );
};
export default ViewBatchDetailsPage;
