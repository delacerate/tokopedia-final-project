import React from 'react';
import { Box } from '@chakra-ui/react';

const EmbeddedVideo = ({ youtubeVideoID }) => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeVideoID}`}
                title="YouTube Video"
                allowFullScreen
            />
        </Box>
    );
};

export default EmbeddedVideo;
