import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={10}>
      <Paper style={{ cursor: "pointer" }} onClick={() => onVideoSelect(video)}>
        <img
          style={{ marginRight: "10px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;
