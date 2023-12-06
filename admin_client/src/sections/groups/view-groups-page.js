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
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { applyPagination } from "src/utils/apply-pagination";
import { GroupsTable } from "src/sections/groups/groups-table";
import { getAllGroups } from "src/services/others";
import { useAuthContext } from "src/contexts/auth-context";
import CustomModal from "src/components/CustomModal";
import { exportGroups } from "src/services/export";
import { getAllSections } from "src/services/section";
import { TableSearch } from "src/components/table-search";

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
  // const groupsSelection = useMemo(() => {
  //   return useSelection(groupsIds);
  // }, [groupsIds]);
  const [openCreateGroupModal, setOpenCreateGroupModal] = useState(false);

  const [openExportGroupsModal, setOpenExportsGroupsModal] = useState(false);
  const [sections, setSections] = useState([]);
  const [exportSectionId, setExportSectionId] = useState();

  const [searchQuery, setSearchQuery] = useState("");

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
            setSections(res.data);
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
                <Button sx={{ color: "error.main", height: "fit-content" }}>
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
          <Typography>Create a Group</Typography>
          <TextField label="Leader Roll no." />

          {}
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
      </Box>
    </>
  );
};
export default ViewGroupsPage;
