import React from 'react';
import { styled } from '@mui/material/styles';

// Styled component for the video container
const VideoContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center', // Center the video horizontally
    alignItems: 'center',     // Center the video vertically
    width: '100%',            // Take up full width of parent
    maxWidth: '800px',        // Optional: Max width for larger screens
    margin: '0 auto',         // Center the container itself
    padding: '16px',          // Add some padding around the video
});

// Styled component for the video element
const EmbeddedVideo = styled('video')({
    width: '100%',           // Make video responsive within container
    height: 'auto',          // Maintain aspect ratio
    borderRadius: '8px',     // Optional: Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: Subtle shadow
    outline: 'none',       // Remove default outline
    // Additional styling for more modern look
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: '#000',
});


const MovVideo = ({ src, title = "Embedded Video", ...props }) => {
    // Use the 'src' prop directly.  Gatsby handles the path.

    return (
        <VideoContainer>
            <EmbeddedVideo
                controls // Show browser controls (play, pause, etc.)
                src={src}  // Use the src prop
                title={title} // Use the title prop
                {...props} // Pass through any additional props
                preload="metadata" // Load metadata (duration, dimensions)
            >
                Your browser does not support the video tag.
                <a href={src} download={title}>
                  Download the video
                </a>
            </EmbeddedVideo>
        </VideoContainer>
    );
};

export {MovVideo};
