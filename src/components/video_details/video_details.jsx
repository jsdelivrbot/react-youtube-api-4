import React from 'react';
import PropTypes from 'prop-types';
import './video_details.css';

const VideoDetails = ({ video }) => {
    if (!video) return <div>loading...</div>;

    const { videoId } = video.id;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    title="videoPreview"
                    src={url}
                    className="embed-responsive-item"
                />
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

VideoDetails.propTypes = {
    video: PropTypes.object.isRequired,
};

export default VideoDetails;
