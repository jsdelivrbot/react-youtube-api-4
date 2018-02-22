import React from 'react';
import VideoListItem from './video_list_item';

// created functional based component to create a life of video
// videoItems is maping through props.videos which is a search result of a YTsearch function in main app component and its creating new instance od the VideoListItem component with key and a video element
// this component is returning a unordered list with videoItems array 
const VideoList = (props) => {  
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        key={video.etag} 
        video={video} 
        onVideoSelect={props.onVideoSelect} />
    ); 
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;