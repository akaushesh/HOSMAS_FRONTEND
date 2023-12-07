import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useAuthContext } from "src/contexts/auth-context";
import { createBatch, getAllBatches } from "src/services/batch";
import BatchesList from "./batches-list";
import CustomModal from "src/components/CustomModal";
import { useRouter } from "next/router";

function ManageBatchesPage() {
  const router = useRouter();

  const [batches, setBatches] = useState();
  const [createBatchName, setCreateBatchName] = useState();
  const [openCreateBatchModal, setOpenCreateBatchModal] = useState(false);
  const { accessToken } = useAuthContext();

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await getAllBatches(accessToken);
        setBatches(res?.data);
        console.log(res);
      };

      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleCreateBatchSubmit = async () => {
    const batchData = {
      name: createBatchName,
    };

    try {
      const res = await createBatch(batchData, accessToken);
      console.log(res);
      if (res.status === 201) {
        setBatches((prev) => {
          return [...prev, { id: res?.data?.id, name: res?.data?.name }];
        });
        setCreateBatchName("");
        setOpenCreateBatchModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 4,
        px: 10,
      }}
    >
      <BatchesList batches={batches} />

      <Stack direction="row" justifyContent="center" alignItems="center" mt={7} spacing={2}>
        <Button onClick={() => setOpenCreateBatchModal(true)}>+ Add Batch</Button>
      </Stack>

      <CustomModal
        open={openCreateBatchModal}
        onClose={() => setOpenCreateBatchModal(false)}
        maxWidth="300px"
      >
        <Stack alignItems="center">
          <Typography mb={2} variant="h5">
            Create a Batch
          </Typography>

          <TextField
            name="batch"
            label="Batch Name"
            value={createBatchName}
            onChange={(e) => setCreateBatchName(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button variant="contained" onClick={handleCreateBatchSubmit}>
            Submit
          </Button>
        </Stack>
      </CustomModal>
    </Box>
  );
}

export default ManageBatchesPage;
