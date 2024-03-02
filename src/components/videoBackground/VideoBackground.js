import React from "react";

const VideoBackground = ({ src, type }) => {
  return (
    <div className=" top-0 left-0 w-full min-h-screen overflow-hidden z-0">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
