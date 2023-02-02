import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://niche-website-server.onrender.com/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container sx={{ marginTop: "140px" }}>
      <Typography
        sx={{
          textAlign: "center",
          color: "#252525",
          fontWeight: "bold",
          marginTop: "100px",
          marginBottom: "60",
        }}
        variant="h4"
      >
        User Review
      </Typography>
      <Grid
        sx={{ pt: 5 }}
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12, sm: 12, md: 12 }}
      >
        {reviews?.map((userReview) => (
          <Review key={userReview._id} userReview={userReview} />
        ))}
      </Grid>
    </Container>
  );
};

export default Reviews;
