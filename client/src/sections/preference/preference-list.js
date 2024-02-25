import { Grid, Typography } from "@mui/material";
import { HostelCard } from "./hostel-card";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

export const PreferenceList = (props) => {
  const { availableChoices } = props;

  return (
    <Grid padding="2rem" item xs={6}>
      <Typography variant="h5" mb={2}>
        Your Preference
      </Typography>
      <SortableContext items={availableChoices} strategy={verticalListSortingStrategy}>
        {availableChoices?.map((choice, index) => (
          <HostelCard key={choice.choice_id} hostel={choice} />
        ))}
      </SortableContext>
    </Grid>
  );
};
