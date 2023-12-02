import React from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";

function FaqList({ faqs, setFaqs, handleFaqClicked }) {
  return faqs.map((faq) => (
    <Card sx={{ mb: 2, cursor: "pointer" }} onClick={() => handleFaqClicked(faq)}>
      <CardContent>
        <Stack spacing={3}>
          <Typography variant="body1">{faq.question}</Typography>
          <Typography variant="body2" color="grey">
            {faq.answer}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  ));
}

export default FaqList;
