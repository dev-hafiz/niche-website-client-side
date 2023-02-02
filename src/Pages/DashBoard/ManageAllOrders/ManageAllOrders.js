import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://niche-website-server.onrender.com/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <Container sx={{ marginTop: "80px", marginBottom: "60px" }}>
      <Typography sx={{ fontWeight: "medium", mt: 3 }} variant="h4">
        TOTAL ORDERS {allOrders.length}
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allOrders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.des}</TableCell>
                <TableCell align="right"> $ {row.price}</TableCell>
                <TableCell align="center">
                  <Button sx={{ color: "#252525" }} variant="text">
                    <i className="fas fa-plus-square"></i>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageAllOrders;
