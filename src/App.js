import React from "react";
import axios from "axios";

import { Grid, Typography } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async (searchTerm) => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 5,
          key: "AIzaSyDOuA3bLLHufM4_3e6JWzF36hzQrbxhlf8",
          q: searchTerm,
        },
      }
    );
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={2}>
              <Typography
                variant="h4"
                style={{
                  color: "red",
                  padding: "8px",
                  textAlign: "center",
                  borderBottom: "3px solid black",
                  borderLeft: "3px solid black",
                }}
              >
                Mini YouTube
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={this.state.selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
