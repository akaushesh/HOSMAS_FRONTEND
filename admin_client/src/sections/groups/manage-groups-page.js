import React, { useEffect } from "react";
import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Grid,
  IconButton,
  Popover,
} from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { applyPagination } from "src/utils/apply-pagination";
import { GroupsTable } from "src/sections/groups/groups-table";
import { getAllGroups } from "src/services/others";
import { useAuthContext } from "src/contexts/auth-context";
import CustomModal from "src/components/CustomModal";
import { exportGroups } from "src/services/export";
import { getAllSections } from "src/services/section";
import { TableSearch } from "src/components/table-search";
import {
  addStudentToGroup,
  changeGroupLeader,
  deleteGroups,
  removeMemberFromGroup,
} from "src/services/group";
import GetStudentTextField from "src/components/GetStudentTextField";
import ConfirmationModal from "src/components/ConfirmationModal";

const useGroupsIDs = (customers) => {
  return useMemo(() => {
    return customers.map((customer) => customer.id);
  }, [customers]);
};

const ViewGroupsPage = () => {
  const { accessToken } = useAuthContext();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [groups, setGroups] = useState([]);
  const groupsIds = useGroupsIDs(groups);
  const groupsSelection = useSelection(groupsIds);
  const [openCreateGroupModal, setOpenCreateGroupModal] = useState(false);
  const [openExportGroupsModal, setOpenExportsGroupsModal] = useState(false);
  const [sections, setSections] = useState([]);
  const [exportSectionId, setExportSectionId] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [addGroupMemberDetails, setAddGroupMemberDetails] = useState();
  const [selectedGroup, setSelectedGroup] = useState({ id: "", leader: "", members: [] });
  const [groupDetailsModalOpen, setGroupDetailsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null); // popover
  const [removeMemberConfirmationBoxOpen, setRemoveMemberConfirmationBoxOpen] = useState(false);
  const [memberToBeRemoved, setMemberToBeRemoved] = useState();

  useEffect(() => {
    console.log("Group leader changed", addGroupMemberDetails);
  }, [addGroupMemberDetails]);

  const fetchGroupsData = async () => {
    try {
      const res = await getAllGroups(searchQuery, 20, page + 1, accessToken);
      if (res.status == 200) {
        setGroups(res.data.data);
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (groupDetailsModalOpen == false) {
      try {
        fetchGroupsData();
      } catch (err) {
        console.log(err);
      }
    }
  }, [page, searchQuery, groupDetailsModalOpen]);

  useEffect(() => {
    if (openExportGroupsModal == true) {
      try {
        const fetchAllSections = async () => {
          const res = await getAllSections(accessToken);
          if (res.status == 200) {
            setSections([...res.data, { id: "all", batch_name: "All", gender: "" }]);
          }
          console.log(res);
        };

        fetchAllSections();
      } catch (err) {
        console.log(err);
      }
    }
  }, [openExportGroupsModal]);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleExportGroupData = () => {
    try {
      const fetchExportGroupsLink = async () => {
        const res = await exportGroups(exportSectionId, accessToken);
        if (res.status == 200) {
          window.open(res?.data?.link, "_blank");
        }
        setOpenExportsGroupsModal(false);
      };

      fetchExportGroupsLink();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteGroups = async () => {
    try {
      const res = await deleteGroups(groupsSelection.selected, accessToken);
      if (res.status === 200) {
        fetchGroupsData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddStudentToGroup = async () => {
    try {
      const res = await addStudentToGroup(
        addGroupMemberDetails?.rollno,
        selectedGroup?.id,
        accessToken
      );
      console.log(res);

      if (res.status == 200) {
        setSelectedGroup((prev) => ({
          ...prev,
          members: [
            ...prev.members,
            { name: addGroupMemberDetails?.name, rollno: addGroupMemberDetails?.rollno },
          ],
        }));
      }
    } catch (err) {
      console.log(err);
    }
    console.log("Adding");
  };

  const handleRemoveMemberFromGroup = async (rollno) => {
    try {
      const res = await removeMemberFromGroup(rollno, accessToken);
      console.log(res);

      if (res.status == 200) {
        setSelectedGroup((prev) => ({
          ...prev,
          members: prev.members.filter((member) => member?.rollno != rollno),
        }));
        setAnchorEl(null);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeGroupLeader = async (member) => {
    try {
      const res = await changeGroupLeader(member?.rollno, selectedGroup?.id, accessToken);
      console.log(res);

      if (res.status == 200) {
        const leader = selectedGroup?.leader;

        setSelectedGroup((prev) => ({
          ...prev,
          leader: { name: member?.name, rollno: member?.rollno },
          members: [
            prev.members.filter((member) => member?.rollno != rollno),
            { name: leader?.name, rollno: leader?.rollno },
          ],
        }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
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
              <Typography variant="h4">Groups</Typography>

              <Stack alignItems="center" direction="row" spacing={1}>
                <Button
                  color="inherit"
                  startIcon={
                    <SvgIcon fontSize="small">
                      <ArrowDownOnSquareIcon />
                    </SvgIcon>
                  }
                  onClick={() => {
                    setOpenExportsGroupsModal(true);
                  }}
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
              <Button
                sx={{ color: "error.main", height: "fit-content" }}
                onClick={handleDeleteGroups}
              >
                Delete Selected Items
              </Button>
            </Stack>
          </Card>

          <GroupsTable
            count={groups.length}
            items={groups}
            onDeselectAll={groupsSelection.handleDeselectAll}
            onDeselectOne={groupsSelection.handleDeselectOne}
            onPageChange={handlePageChange}
            onSelectAll={groupsSelection.handleSelectAll}
            onSelectOne={groupsSelection.handleSelectOne}
            page={page}
            rowsPerPage={rowsPerPage}
            selected={groupsSelection.selected}
            setGroupDetailsModalOpen={setGroupDetailsModalOpen}
            setSelectedGroup={setSelectedGroup}
          />
        </Stack>
      </Container>

      <CustomModal
        open={openExportGroupsModal}
        onClose={() => {
          setOpenExportsGroupsModal(false);
        }}
        maxWidth={400}
      >
        <Typography variant="h5" textAlign="center" mb={2}>
          Export Data
        </Typography>

        <TextField
          value={exportSectionId}
          onChange={(e) => {
            setExportSectionId(e.target.value);
          }}
          select
          label="Choose a Section"
          fullWidth
          sx={{ mb: 2 }}
        >
          {sections.map((section) => {
            return (
              <MenuItem key={section.id} value={section.id}>
                {section.batch_name} {section.gender}
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
        open={groupDetailsModalOpen}
        onClose={() => {
          setGroupDetailsModalOpen(false);
        }}
        maxWidth={500}
        styles={{ padding: "10px" }}
      >
        <Typography variant="h5" textAlign="center" mb={2}>
          Group details
        </Typography>
        <Table sx={{ mb: 3 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Roll No</TableCell>
              <TableCell>&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{selectedGroup?.leader?.name}</TableCell>
              <TableCell>{selectedGroup?.leader?.rollno}</TableCell>
              <TableCell sx={{ textAlign: "right" }}>
                <Grid container justifyContent="flex-end">
                  <Button sx={{ padding: "0.1rem", borderRadius: "4rem" }} variant="outlined">
                    Leader
                  </Button>
                </Grid>
              </TableCell>
            </TableRow>

            {selectedGroup.members.map((member, index) => {
              return (
                <TableRow hover key={member?.rollno}>
                  <TableCell>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      <Typography variant="subtitle2">{member?.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{member?.rollno}</TableCell>
                  {/* {!isLeader && index !== 0 && (
                      <TableCell sx={{ textAlign: "right" }}>&nbsp;</TableCell>
                    )} */}
                  <TableCell sx={{ textAlign: "right" }}>
                    <IconButton
                      sx={{ padding: "0" }}
                      aria-describedby={id}
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                    >
                      <SvgIcon>
                        <MoreVertIcon />
                      </SvgIcon>
                    </IconButton>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={() => setAnchorEl(null)}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <Stack>
                        <Button
                          onClick={() => {
                            handleChangeGroupLeader(member);
                          }}
                        >
                          Make Group Leader
                        </Button>
                        <Button
                          onClick={() => {
                            handleRemoveMemberFromGroup(member?.rollno);
                          }}
                          sx={{ color: "red" }}
                        >
                          Remove
                        </Button>
                      </Stack>
                    </Popover>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <GetStudentTextField
          value={addGroupMemberDetails}
          onChange={(e, value) => {
            setAddGroupMemberDetails(value);
          }}
          label="Enter Roll No."
          fullWidth
          sx={{ mb: 3 }}
        />

        <Button
          sx={{ display: "block", margin: "0 auto" }}
          variant="contained"
          onClick={handleAddStudentToGroup}
        >
          Add Student
        </Button>
      </CustomModal>
    </Box>
  );
};
export default ViewGroupsPage;
