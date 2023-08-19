import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ProductDetails = ({ title, description }) => {
    return (
        <Box flex={1} pr={4}>
            <Text fontSize="xl" fontWeight="bold">
                {title}
            </Text>
            <Text mt={2}>{description}</Text>
        </Box>
    );
};

export default ProductDetails;
