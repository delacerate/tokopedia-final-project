import React from 'react';
import { Box, Text, VStack, Divider } from '@chakra-ui/react';

const CommentBox = ({ username, comment }) => (
    <Box className="comment-box" p={3} borderRadius="md">
        <VStack spacing={2} align="stretch">
            <Text fontWeight="bold">{username}</Text>
            <Text>{comment}</Text>
        </VStack>
    </Box>
);

export default CommentBox;
