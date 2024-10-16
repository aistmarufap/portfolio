// LoadingVideo.js
import React from 'react';

const LoadingVideo = ({ onVideoEnd }) => {
  return (
    <div style={styles.container}>
      <video
        autoPlay
        style={styles.video}
        onEnded={onVideoEnd}  // Trigger when the video ends
      >
        <source src="./bankai.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: 'auto',
  },
};

export default LoadingVideo;
