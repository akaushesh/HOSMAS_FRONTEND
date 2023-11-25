import { Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const FAQCard = (props) => {
  const { sx, question, answer } = props;

  return (
    <Card sx={sx}>
      <Stack spacing={3}>
        <Typography variant="body1">{question}</Typography>
        <Typography variant="body2" color="grey">
          {answer}
        </Typography>
      </Stack>
    </Card>
  );
};
