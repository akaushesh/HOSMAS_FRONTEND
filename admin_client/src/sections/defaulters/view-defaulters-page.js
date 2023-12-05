import React, { useEffect } from "react";
import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Button, Container, Stack, SvgIcon, Card, Typography, TextField } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { applyPagination } from "src/utils/apply-pagination";
import { DefaultersTable } from "src/sections/defaulters/defaulters-table";
import { DefaultersSearch } from "src/sections/defaulters/defaulters-search";
import { useAuthContext } from "src/contexts/auth-context";
import { createDefaulter, deleteDefaulters, getAllDefaulters } from "src/services/defaulter";
import CustomModal from "src/components/CustomModal";
import { importDefaulters } from "src/services/import";
import { exportDefaulters } from "src/services/export";

const useDefaultersIDs = (defaulters) => {
  return useMemo(() => {
    return defaulters.map((defaulter) => defaulter.id);
  }, [defaulters]);
};

const ViewDefaultersPage = () => {
  const { accessToken } = useAuthContext();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [defaulters, setDefaulters] = useState([]);
  const defaultersIds = useDefaultersIDs(defaulters);
  const defaultersSelection = useSelection(defaultersIds);
  const [openAddDefaulterModal, setOpenAddDefaulterModal] = useState(false);
  const [addDefaulterRollNo, setAddDefaulterRollNo] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchDefaultersData = async () => {
      const res = await getAllDefaulters(searchQuery, 20, page + 1, accessToken);
      if (res.status == 200) {
        setDefaulters(res.data.data);
      }
      console.log(res);
    };

    fetchDefaultersData();
  }, [page, searchQuery]);

  const handleFileSelect = async (e) => {
    // Assuming you have only one file to upload
    const selectedFile = e.target.files[0];

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const res = await importDefaulters(formData, accessToken);
      if (res.status == 202) {
        const res1 = await getAllDefaulters(searchQuery, 20, page + 1, accessToken);
        if (res1.status == 200) {
          setDefaulters(res1.data.data);
        }
      }
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
    },
    [page]
  );

  const handleAddDefaulter = async () => {
    try {
      const res = await createDefaulter(addDefaulterRollNo, accessToken);
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

  const handleExportDefaulters = async () => {
    try {
      const res = await exportDefaulters(accessToken);
      if (res.status == 200) {
        window.open(res?.data?.link, "_blank");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteDefaulters = async () => {
    try {
      const res = await deleteDefaulters(defaultersSelection.selected, accessToken);
      if (res.status === 200) {
        setDefaulters((prev) =>
          prev.filter((defaulter) => !defaultersSelection.selected.includes(defaulter.id))
        );
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
                <Typography variant="h4">Defaulters</Typography>

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
                    onClick={handleExportDefaulters}
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
                    setOpenAddDefaulterModal(true);
                  }}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <Card sx={{ p: 2 }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <DefaultersSearch setSearchQuery={setSearchQuery} />
                <Button
                  sx={{ color: "error.main", height: "fit-content" }}
                  onClick={handleDeleteDefaulters}
                >
                  Delete Selected Items
                </Button>
              </Stack>
            </Card>

            <DefaultersTable
              count={defaulters.length}
              items={defaulters}
              onDeselectAll={defaultersSelection.handleDeselectAll}
              onDeselectOne={defaultersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onSelectAll={defaultersSelection.handleSelectAll}
              onSelectOne={defaultersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={defaultersSelection.selected}
            />
          </Stack>
        </Container>

        <CustomModal
          open={openAddDefaulterModal}
          onClose={() => {
            setOpenAddDefaulterModal(false);
          }}
          maxWidth={400}
        >
          <Stack spacing={2}>
            <Typography variant="h6" textAlign="center">
              Add a defaulter
            </Typography>

            <TextField
              value={addDefaulterRollNo}
              onChange={(e) => {
                setAddDefaulterRollNo(e.target.value);
              }}
              label="Enter Roll no."
            />

            <Button variant="contained" onClick={handleAddDefaulter}>
              Submit
            </Button>
          </Stack>
        </CustomModal>
      </Box>
    </>
  );
};
export default ViewDefaultersPage;
