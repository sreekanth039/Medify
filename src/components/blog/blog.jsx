import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import blog from "../../assets/blog.png";

const Blog = () => {
  return (
    <Box paddingBlock={3}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          fontSize={"16px"}
          color="#2AA7FF"
          textAlign="center"
        >
          Blog & News
        </Typography>
        <Typography
          variant="h1"
          color="#1B3C74"
          textAlign="center"
          fontWeight={600}
          fontSize={"48px"}
          mb={5}
        >
          Read Our Latest News
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box src={blog} component="img" width={1} height="auto" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box src={blog} component="img" width={1} height="auto" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Box src={blog} component="img" width={1} height="auto" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
