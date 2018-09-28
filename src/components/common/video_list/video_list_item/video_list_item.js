import React from 'react';

// ({video}) works like this: the argument is props, then it destructure this props object and takes out a video property and saves it as a variable, making destructure on the props to take out function and single video,  setting onClick event listener on Li tag, that will run passed down with props function that is defined in the main app with argument of a single video object
const VideoListItem = (props) => {
  const {onVideoSelect, video} = props;
  const imageUrl = video.snippet.thumbnails.default.url;
  
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
