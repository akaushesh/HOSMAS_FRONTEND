import React, { useEffect } from "react";
import { useCallback, useMemo, useState } from "react";
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
  Card,
  Typography,
  TextField,
  MenuItem,
} from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { applyPagination } from "src/utils/apply-pagination";
import { getStudents } from "src/services/others";
import { useAuthContext } from "src/contexts/auth-context";
import CustomModal from "src/components/CustomModal";
import { exportStudents } from "src/services/export";
import { getAllBatches } from "src/services/batch";
import { TableSearch } from "src/components/table-search";
import { StudentsTable } from "./students-table";
import { createStudent } from "src/services/student";
import { importStudents } from "src/services/import";

const useStudentsIDs = (students) => {
  return useMemo(() => {
    return students.map((student) => student.rollno);
  }, [students]);
};

const ViewStudentsPage = () => {
  const { accessToken } = useAuthContext();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [students, setStudents] = useState([]);
  const studentsIds = useStudentsIDs(students);
  const studentsSelection = useSelection(studentsIds);
  const [openCreateStudentModal, setOpenCreateStudentModal] = useState(false);

  const [openExportStudentsModal, setOpenExportStudentModal] = useState(false);
  const [batches, setBatches] = useState([]);
  const [exportBatchId, setExportBatchId] = useState();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    try {
      const fetchStudentsData = async () => {
        const res = await getStudents(searchQuery, 20, page + 1, "all", accessToken);
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

  useEffect(() => {
    if (openExportStudentsModal == true) {
      try {
        const fetchAllBatches = async () => {
          const res = await getAllBatches(accessToken);
          if (res.status == 200) {
            setBatches(res.data);
            setBatches((prev) => [...prev, { id: "all", name: "All" }]);
          }
          console.log(res);
        };

        fetchAllBatches();
      } catch (err) {
        console.log(err);
      }
    }
  }, [openExportStudentsModal]);

  const handleFileSelect = async (e) => {
    // Assuming you have only one file to upload
    const selectedFile = e.target.files[0];

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await importStudents(formData, accessToken);
      if (res.status == 202) {
        const res1 = await getStudents(searchQuery, 20, page + 1, "all", accessToken);
        if (res1.status == 200) {
          setDefaulters(res1.data.data);
        }
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleAddStudent = async () => {
    try {
      const res = await createStudent(addDefaulterRollNo, accessToken);
      if (res.status == 201) {
        setDefaulters((prev) => [...prev, res?.data]);
        setAddDefaulterRollNo("");
        setOpenAddDefaulterModal(false);
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleExportGroupData = () => {
    try {
      const fetchExportStudentsLink = async () => {
        const res = await exportStudents(exportBatchId, accessToken);
        if (res.status == 200) {
          window.open(res?.data?.link, "_blank");
        }
        setOpenExportStudentModal(false);
      };

      fetchExportStudentsLink();
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
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Students</Typography>

                <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    }
                    component="label"
                    htmlFor="fileInput"
                    sx={{
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      "& input": {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        cursor: "pointer",
                      },
                    }}
                  >
                    <input type="file" id="fileInput" onChange={handleFileSelect} accept=".xlsx" />
                    Import
                  </Button>

                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                    onClick={() => {
                      setOpenExportStudentModal(true);
                    }}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>

              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={() => {
                    setOpenCreateStudentModal(true);
                  }}
                >
                  Add
                </Button>
              </div>
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

        <CustomModal
          open={openCreateStudentModal}
          onClose={() => {
            setOpenCreateStudentModal(false);
          }}
          maxWidth={400}
        >
          <Typography variant="h5">Add a Student</Typography>
          <TextField label="Leader Roll no." />
        </CustomModal>

        <CustomModal
          open={openExportStudentsModal}
          onClose={() => {
            setOpenExportStudentModal(false);
          }}
          maxWidth={400}
        >
          <Typography variant="h5" textAlign="center" mb={2}>
            Export Data
          </Typography>

          <TextField
            value={exportBatchId}
            onChange={(e) => {
              setExportBatchId(e.target.value);
            }}
            select
            label="Choose a Batch"
            fullWidth
            sx={{ mb: 2 }}
          >
            {batches.map((batch) => {
              return (
                <MenuItem key={batch.id} value={batch.id}>
                  {batch.name}
                </MenuItem>
              );
            })}
          </TextField>

          <Button
            sx={{ display: "block", margin: "0 auto" }}
            variant="contained"
            onClick={handleExportGroupData}
          >
            Submit
          </Button>
        </CustomModal>
      </Box>
    </>
  );
};
export default ViewStudentsPage;
