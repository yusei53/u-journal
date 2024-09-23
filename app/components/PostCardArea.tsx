import { Box, Grid } from "@mui/material";
import React from "react";
import PostCard from "./PostCard";
import { PostcardData } from "../const/PostCardData";

const PostCardArea = () => {
  return (
    <Box px={{ xs: 10, md: 35 }}>
      <Grid container>
        {PostcardData.map((data, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <PostCard title={data.title} day={data.day} href={data.href} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PostCardArea;
