import React from 'react';
import PropTypes from 'prop-types';
import './video_list_item.css';

const VideoListItem = (props) => {
    const { onVideoSelect, video } = props;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li
            onClick={() => onVideoSelect(video)}
            className="list-group-item"
        >
            <div className="video-list media">
                <div className="media-left">
                    <img
                        src={imageUrl}
                        alt=""
                        className="media-object"
                    />
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

VideoListItem.propTypes = {
    onVideoSelect: PropTypes.func.isRequired,
    video: PropTypes.object.isRequired,
};

export default VideoListItem;
