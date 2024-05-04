'use client';

import * as React from 'react';
import type { FAQResponse } from '@/services/faq';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import type { AxiosResponse } from 'axios';
import Masonry from 'react-masonry-css';

import { useFaq } from '@/hooks/query/use-faq';
import { FAQCard } from '@/components/dashboard/faqs/faq-card';
import styles from '@/styles/masonry.module.css';

const breakpoints = {
  default: 3,
  1200: 2,
  900: 1,
};

export default function FAQGrid(): React.JSX.Element {
  const { data, isLoading } = useFaq();
  const faqs = data as AxiosResponse<FAQResponse>;

  return (
    <Box>
      {isLoading ? (
        <Grid container marginTop="1rem" justifyContent="center">
          <CircularProgress />
        </Grid>
      ) : Array.isArray(faqs.data) && faqs.data.length > 0 ? (
        <Masonry
          breakpointCols={breakpoints}
          className={styles.myMasonryGrid}
          columnClassName={styles.myMasonryGridColumn}
        >
          {faqs.data.map(({ question, answer, id }) => (
            <FAQCard key={id} question={question} answer={answer} sx={{ padding: '2rem' }} />
          ))}
        </Masonry>
      ) : (
        <Box
          sx={{
            position: 'absolute',
            top: '47%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography textAlign="center" variant="body2" color="grey">
            No FAQs yet!
          </Typography>
        </Box>
      )}
    </Box>
  );
}
