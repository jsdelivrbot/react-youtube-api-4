import React from 'react';

const VideoDetails = ({ video }) => {
    if (!video) return <div>loading...</div>;

    const { videoId } = video.id;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-datail col-md-8">
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

export default VideoDetails;