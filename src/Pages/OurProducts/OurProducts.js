import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import OurProduct from "../OurProduct/OurProduct";

const OurProducts = () => {
  const [page, setPage] = useState(0);
  // Product reander on the ui with limit
  const [displayProducts, setDisplayProducts] = useState([]);
  const size = 6;

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
    <Container>
      <Typography
        sx={{ textAlign: "center", my: 5, color: "#252525", fontWeight: "700" }}
        variant="h4"
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
  );
};

export default OurProducts;
