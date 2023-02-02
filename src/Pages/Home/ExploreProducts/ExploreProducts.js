import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import OurProduct from "../../OurProduct/OurProduct";
import Navbar from "../../Shared/Navbar/Navbar";

const ExploreProducts = () => {
  const [page, setPage] = useState(0);
  // Product reander on the ui with limit
  const [displayProducts, setDisplayProducts] = useState([]);
  const size = 100;

  useEffect(() => {
    fetch(
      `https://niche-website-server.onrender.com/products?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDisplayProducts(data.products);
      });
  }, [page]);

  return (
    <>
      <Navbar />

      <Container sx={{ marginTop: "80px", marginBottom: "60px" }}>
        <Typography
          sx={{
            textAlign: "center",
            my: 5,
            color: "#252525",
            fontWeight: "700",
          }}
          variant="h5"
          gutterBottom
          component="div"
        >
          OUR PRODUCTS
        </Typography>

        <Grid
          sx={{ my: 8 }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {displayProducts?.map((products) => (
            <OurProduct products={products} key={products._id} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ExploreProducts;
