import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Grid, Card, CardContent, Typography } from "@mui/material";
import SectionsList from "./sections-list";
import { createSection, getAllSections } from "src/services/section";
import { useAuthContext } from "src/contexts/auth-context";
import CustomModal from "src/components/CustomModal";
import { getAllUnitializedBatches } from "src/services/batch";

const BatchesCardList = ({ batches, setSelectedBatch, setCreateSectionStep }) => {
  return (
    <>
      {/* {items.length === 0 && <Typography variant="h6">No batches left to add!</Typography>} */}
      {batches.map((batch) => {
        return (
          <Grid item xs={6} md={4}>
            <Card
              onClick={() => {
                setSelectedBatch(batch);
                setCreateSectionStep((prev) => prev + 1);
              }}
            >
              <CardContent>
                <Stack alignItems="center">
                  <Typography variant="h3">{batch.name}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

const GenderCardList = ({ genders, setSelectedGender, setCreateSectionStep }) => {
  return (
    <>
      {genders.map((gender) => {
        return (
          <Grid item xs={6} md={4}>
            <Card
              onClick={() => {
                setSelectedGender(gender);
                setCreateSectionStep((prev) => prev + 1);
              }}
            >
              <CardContent>
                <Stack alignItems="center">
                  <Typography variant="h3">{gender === "M" ? "BOYS" : "GIRLS"}</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};

function ManageSectionsPage() {
  const [sections, setSections] = useState([]);
  const [availableBatches, setAvailableBatches] = useState([]);
  const [createSectionModalOpen, setCreateSectionModalOpen] = useState(false);
  const [createSectionStep, setCreateSectionStep] = useState(1);
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const { accessToken } = useAuthContext();

  useEffect(() => {
    try {
      const getData = async () => {
        const res = await getAllSections(accessToken);
        setSections(res?.data);
        console.log(res);
      };

      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    if (createSectionStep == 3 && selectedBatch && selectedGender) {
      setCreateSectionModalOpen(false);

      const handleCreateSection = async () => {
        const sectionData = {
          batch: selectedBatch?.id,
          gender: selectedGender,
        };

        try {
          const res = await createSection(sectionData, accessToken);
          if (res.status === 201) {
            setSections((prev) => {
              return [
                ...prev,
                { id: res?.data?.id, batch_name: res?.data?.batch_name, gender: res?.data?.gender },
              ];
            });
          }
        } catch (err) {
          console.log(err);
        }

        setCreateSectionStep(1);
        setSelectedGender("");
        setSelectedBatch("");
      };

      handleCreateSection();
    }
  }, [createSectionStep]);

  const handleAddSectionClicked = () => {
    try {
      setCreateSectionModalOpen(true);

      const getData = async () => {
        const res = await getAllUnitializedBatches(accessToken);
        setAvailableBatches(res?.data);
        console.log(res);
      };

      getData();
    } catch (err) {
      setCreateSectionModalOpen(false);
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
      <SectionsList sections={sections} />

      <Stack alignItems="center" mt={7}>
        <Button onClick={handleAddSectionClicked}>+ Add Section</Button>
      </Stack>

      <CustomModal
        open={createSectionModalOpen}
        onClose={() => setCreateSectionModalOpen(false)}
        maxWidth={700}
      >
        <Grid container spacing={4} justifyContent="center">
          {createSectionStep == 1 && (
            <BatchesCardList
              batches={availableBatches}
              setSelectedBatch={setSelectedBatch}
              setCreateSectionStep={setCreateSectionStep}
            />
          )}

          {createSectionStep == 2 && (
            <GenderCardList
              genders={availableBatches.find((batch) => batch.id === selectedBatch.id).gender}
              setSelectedGender={setSelectedGender}
              setCreateSectionStep={setCreateSectionStep}
            />
          )}
        </Grid>

        <Button
          disabled={createSectionStep == 1}
          onClick={() => {
            setCreateSectionStep((prev) => prev - 1);
          }}
        >
          Back
        </Button>
      </CustomModal>
    </Box>
  );
}

export default ManageSectionsPage;
