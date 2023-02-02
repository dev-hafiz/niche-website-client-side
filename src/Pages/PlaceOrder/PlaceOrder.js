import { CardMedia, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./PlaceOrder.css";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Shared/Navbar/Navbar";

const PlaceOrder = () => {
  const { user } = useAuth();

  const { orderId } = useParams();

  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    const url = `https://niche-website-server.onrender.com/products/${orderId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.email = user?.email;

    fetch("https://niche-website-server.onrender.com/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your Order successfully");
        }
      });
  };

  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: "80px", marginBottom: "60px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Paper
              style={{ display: "flex", alignItems: "center" }}
              elevation={3}
            >
              <CardMedia
                component="img"
                sx={{ width: "50%" }}
                image={singleProduct?.img}
                alt="green iguana"
              />
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    px: 3,
                    mt: 3,
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{ fontWeight: "500", color: "#252525" }}
                    variant="h5"
                    gutterBottom
                    component="div"
                  >
                    {singleProduct?.title}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "600", color: "#D1C9B9" }}
                    variant="h4"
                    gutterBottom
                    component="div"
                  >
                    $ {singleProduct?.price}
                  </Typography>
                </Box>
                <Box sx={{ pb: 3 }}>
                  <Typography sx={{ mx: 2 }} variant="body2" gutterBottom>
                    {singleProduct?.des}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid className="product-form" item xs={12} sm={12} md={6}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                defaultValue={singleProduct?.title}
                {...register("title", { required: true })}
                placeholder="Product title"
              />
              <input
                defaultValue={singleProduct?.price}
                type="number"
                {...register("price", { required: true })}
                placeholder="Price"
              />
              <textarea
                defaultValue={singleProduct?.des}
                {...register("des", { required: true })}
                placeholder="Description"
              />
              <input
                defaultValue={singleProduct?.img}
                {...register("img", { required: true })}
                placeholder="Image url"
              />
              <input className="placebtn" type="submit" value="Place Order" />
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default PlaceOrder;
