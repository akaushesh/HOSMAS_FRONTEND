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
import { deleteGroups } from "src/services/group";
import GetStudentTextField from "src/components/GetStudentTextField";

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
  const [addGroupLeaderRollNo, setAddGroupLeaderRollNo] = useState();
  const [addGroupMember1RollNo, setAddGroupMember1RollNo] = useState();
  const [addGroupMember2RollNo, setAddGroupMember2RollNo] = useState();
  const [addGroupMember3RollNo, setAddGroupMember3RollNo] = useState();
  const [selectedGroup, setSelectedGroup] = useState({ id: "", leader: "", members: [] });
  const [groupDetailsModalOpen, setGroupDetailsModalOpen] = useState();
  const [anchorEl, setAnchorEl] = useState(null); // popover

  useEffect(() => {
    console.log("Group leader changed", addGroupLeaderRollNo);
  }, [addGroupLeaderRollNo]);

  useEffect(() => {
    try {
      const fetchGroupsData = async () => {
        const res = await getAllGroups(searchQuery, 20, page + 1, accessToken);
        if (res.status == 200) {
          setGroups(res.data.data);
        }
        console.log(res);
      };

      fetchGroupsData();
    } catch (err) {
      console.log(err);
    }
  }, [page, searchQuery]);

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
        setGroups((prev) => prev.filter((group) => !groupsSelection.selected.includes(group.id)));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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

              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={() => {
                    setOpenCreateGroupModal(true);
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
          open={openCreateGroupModal}
          onClose={() => {
            setOpenCreateGroupModal(false);
          }}
          maxWidth={400}
        >
          <Stack alignItems="center">
            <Typography variant="h5" mb={3}>
              Create a Group
            </Typography>
            <GetStudentTextField
              value={addGroupLeaderRollNo}
              onChange={(e, value) => {
                setAddGroupLeaderRollNo(value);
              }}
              label="Leader Roll no."
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <GetStudentTextField
              value={addGroupMember1RollNo}
              onChange={(e, value) => {
                setAddGroupMember1RollNo(value);
              }}
              label="Member 1 Roll no."
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <GetStudentTextField
              value={addGroupMember2RollNo}
              onChange={(e, value) => {
                setAddGroupMember2RollNo(value);
              }}
              label="Member 2 Roll no."
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <GetStudentTextField
              value={addGroupMember3RollNo}
              onChange={(e, value) => {
                setAddGroupMember3RollNo(value);
              }}
              label="Member 3 Roll no."
              fullWidth
              sx={{ marginBottom: "10px" }}
            />
            <Button variant="contained">Submit</Button>
          </Stack>
        </CustomModal>

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
          maxWidth={400}
          styles={{ padding: "10px" }}
        >
          <Typography variant="h5" textAlign="center" mb={2}>
            Group details
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Roll No</TableCell>
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
                    <TableCell sx={{ textAlign: "center" }}>{member?.rollno}</TableCell>
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
                        <Button
                          onClick={() => {
                            console.log("hello world");
                          }}
                        >
                          Make Group Leader
                        </Button>
                        {/* <CustomModal
                          onClose={onCloseOwnerTransferModal}
                          open={openOwnerTransferModal}
                        >
                          <TransferOwnershipConfirmation
                            member={modalMember}
                            onClose={onCloseOwnerTransferModal}
                          />
                        </CustomModal> */}
                      </Popover>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CustomModal>
      </Box>
    </>
  );
};
export default ViewGroupsPage;
