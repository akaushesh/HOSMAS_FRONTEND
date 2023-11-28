import { CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Masonry from "react-masonry-css";
import { FAQCard } from "src/components/FAQ-card";
import styles from "../../styles/masonry.module.css";
import { useQuery } from "@tanstack/react-query";
import { URL } from "config";
import axios from "axios";
import { useState } from "react";

const breakpoints = {
  default: 3,
  1200: 2,
  900: 1,
};

export const AllFAQs = () => {
  const [loading, setLoading] = useState(false);
  const { data: FAQs = [] } = useQuery({
    queryFn: async () => {
      setLoading(true);
      try {
        const jwt = sessionStorage.getItem("jwt");
        const url = URL + "dashboard/getFAQ/";

        const getFAQsConfig = {
          maxBodyLength: Infinity,
          url: url,
          headers: {
            Authorization: "Bearer " + jwt,
          },
        };

        const getFAQsResponse = await axios.get(url, getFAQsConfig);
        setLoading(false);
        return getFAQsResponse?.data;
      } catch (err) {
        setLoading(false);
        return [];
      }
    },
    queryKey: ["getFAQs"],
  });

  return (
    <Box>
      {loading ? (
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
