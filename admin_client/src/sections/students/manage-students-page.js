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
import { createStudent, deleteMultipleStudents, updateStudent } from "src/services/student";
import { importStudents } from "src/services/import";
import { getAllHostels, getHostel } from "src/services/hostel";
import { getRoomType } from "src/services/roomType";
import ConfirmationModal from "src/components/ConfirmationModal";

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
  const [openEditStudentModal, setOpenEditStudentModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState();
  const [batches, setBatches] = useState([]);
  const [hostels, setHostels] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]);
  const [editHostelId, setEditHostelId] = useState();
  const [editBatchId, setEditBatchId] = useState();
  const [editRoomTypeId, setEditRoomTypeId] = useState();
  const [editCg, setEditCg] = useState();
  const [totalStudents, setTotalStudents] = useState();

  const [deleteConfirmationModalOpen, setDeleteConfirmationModalOpen] = useState();

  const [openExportStudentsModal, setOpenExportStudentModal] = useState(false);
  const [exportBatchId, setExportBatchId] = useState();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    try {
      const fetchStudentsData = async () => {
        const res = await getStudents(searchQuery, 20, page + 1, "all", accessToken);
        if (res.status == 200) {
          setStudents(res.data.data);
          setTotalStudents(res.data.total_entries);
        }
        console.log(res);
      };

      fetchStudentsData();
    } catch (err) {
      console.log(err);
    }
  }, [page, searchQuery]);

  useEffect(() => {
    if (openExportStudentsModal == true || openEditStudentModal == true) {
      try {
        const fetchAllBatches = async () => {
          const res = await getAllBatches(accessToken);
          if (res.status == 200) {
            setBatches([...res.data, { id: "all", name: "All" }]);
          }
          console.log(res);
        };

        fetchAllBatches();
      } catch (err) {
        console.log(err);
      }
    }
  }, [openExportStudentsModal, openEditStudentModal]);

  useEffect(() => {
    if (openEditStudentModal == true) {
      const fetchAllHostels = async () => {
        const res = await getAllHostels(accessToken);
        setHostels(res.data);
      };

      fetchAllHostels();
    }
  }, [openEditStudentModal]);

  useEffect(() => {
    if (editHostelId) {
      const fetchRoomTypes = async () => {
        const res = await getHostel(editHostelId, accessToken);
        setRoomTypes(res.data.room_types);
      };

      fetchRoomTypes();
    }
  }, [editHostelId]);

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
          setStudents(res1.data.data);
          setTotalStudents(res.data.total_entries);
        }
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateStudent = async (id) => {
    console.log(id);
    const data = {
      batch: {
        id: editBatchId,
      },
      alloted_room: editRoomTypeId,
      cg: editCg,
    };

    try {
      const res = await updateStudent(id, data, accessToken);
      if (res.status == 200) {
        const res1 = await getStudents(searchQuery, 20, page + 1, "all", accessToken);
        if (res1.status == 200) {
          setStudents(res1.data.data);
          setTotalStudents(res1.data.total_entries);
        }
      }
      setOpenEditStudentModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStudentSelection = (student) => {
    setSelectedStudent(student);
    setOpenEditStudentModal(true);
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

  const handleDeleteStudents = async () => {
    try {
      const res = await deleteMultipleStudents(studentsSelection.selected, accessToken);
      if (res.status === 200) {
        const res1 = await getStudents(searchQuery, 20, page + 1, "all", accessToken);
        if (res1.status == 200) {
          setStudents(res1.data.data);
          setTotalStudents(res1.data.total_entries);
        }
        setDeleteConfirmationModalOpen(false);
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

              {/* <div>
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
              </div> */}
            </Stack>

            <Card sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <TableSearch
                  setSearchQuery={setSearchQuery}
                  placeholder={"Enter Name, Email or Roll no."}
                />
                <Button
                  sx={{ color: "error.main", height: "fit-content" }}
                  onClick={() => setDeleteConfirmationModalOpen(true)}
                >
                  Delete Selected Items
                </Button>
              </Stack>
            </Card>

            <StudentsTable
              count={totalStudents}
              items={students}
              onDeselectAll={studentsSelection.handleDeselectAll}
              onDeselectOne={studentsSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onSelectAll={studentsSelection.handleSelectAll}
              onSelectOne={studentsSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={studentsSelection.selected}
              handleStudentSelection={handleStudentSelection}
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

        <CustomModal
          open={openEditStudentModal}
          onClose={() => setOpenEditStudentModal(false)}
          maxWidth={400}
        >
          <Typography variant="h5" textAlign="center" mb={2}>
            Edit student
          </Typography>

          <Typography>
            <b>Name:</b> {selectedStudent?.name}
          </Typography>

          <Typography>
            <b>Email:</b> {selectedStudent?.user?.email}
          </Typography>

          <Typography mb={2}>
            <b>Roll No:</b> {selectedStudent?.rollno}
          </Typography>

          <TextField
            value={editBatchId}
            onChange={(e) => {
              setEditBatchId(e.target.value);
            }}
            select
            label="Choose a Batch"
            defaultValue={selectedStudent?.batch?.id}
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

          <TextField
            value={editHostelId}
            onChange={(e) => {
              setEditHostelId(e.target.value);
            }}
            select
            label="Allot hostel"
            fullWidth
            sx={{ mb: 2 }}
          >
            {hostels.map((hostel) => {
              return (
                <MenuItem key={hostel.id} value={hostel.id}>
                  {hostel.name}
                </MenuItem>
              );
            })}
          </TextField>

          <TextField
            value={editRoomTypeId}
            onChange={(e) => {
              setEditRoomTypeId(e.target.value);
            }}
            select
            label="Allot room type"
            defaultValue={selectedStudent?.alloted_hostel?.id}
            fullWidth
            sx={{ mb: 2 }}
          >
            {roomTypes.map((roomType) => {
              return (
                <MenuItem key={roomType.id} value={roomType.id}>
                  {roomType.name}
                </MenuItem>
              );
            })}
          </TextField>

          <TextField
            label="CG"
            fullWidth
            defaultValue={selectedStudent?.cg}
            value={editCg}
            onChange={(e) => setEditCg(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            sx={{ display: "block", margin: "0 auto" }}
            onClick={() => handleUpdateStudent(selectedStudent?.rollno)}
          >
            Submit
          </Button>
        </CustomModal>

        <ConfirmationModal
          open={deleteConfirmationModalOpen}
          onClose={() => {
            setDeleteConfirmationModalOpen(false);
          }}
          message="Are you sure you want to delete the selected students?"
          noMessage="No, leave it"
          yesMessage="Yes, delete it"
          execFunction={handleDeleteStudents}
        />
      </Box>
    </>
  );
};
export default ViewStudentsPage;
