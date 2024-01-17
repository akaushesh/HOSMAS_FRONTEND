import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Masonry from "react-masonry-css";
import { FAQCard } from "src/components/FAQ-card";
import styles from "../../styles/masonry.module.css";
import { useFAQs } from "src/hooks/use-FAQs";

const breakpoints = {
  default: 3,
  1200: 2,
  900: 1,
};

export const AllFAQs = () => {
  const { isLoading, FAQs } = useFAQs();

  return (
    <Box>
      {isLoading ? (
        <Grid container marginTop="1rem" justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : FAQs.length > 0 ? (
        <Masonry
          breakpointCols={breakpoints}
          className={styles.myMasonryGrid}
          columnClassName={styles.myMasonryGridColumn}
        >
          {FAQs.map(({ question, answer, id }) => (
            <FAQCard key={id} question={question} answer={answer} sx={{ padding: "2rem" }} />
          ))}
        </Masonry>
      ) : (
        <Box
          sx={{
            position: "absolute",
            top: "47%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography textAlign="center" vatiant="body2" color="grey">
            No FAQs yet!
          </Typography>
        </Box>
      )}
    </Box>
  );
};
