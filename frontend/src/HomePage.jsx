import React from 'react';
import { SimpleGrid, Image } from '@chakra-ui/react';

const HomePage = () => {
    return (
        <SimpleGrid columns={7} spacing={4} p={8}>
            <Image src="https://via.placeholder.com/360x640" alt="Thumbnail 1" borderRadius="md" />
            <Image src="https://via.placeholder.com/360x640" alt="Thumbnail 2" borderRadius="md" />
            <Image src="https://via.placeholder.com/360x640" alt="Thumbnail 3" borderRadius="md" />
            <Image src="https://via.placeholder.com/360x640" alt="Thumbnail 3" borderRadius="md" />
            <Image src="https://via.placeholder.com/360x640" alt="Thumbnail 3" borderRadius="md" />
            <Image src="https://via.placeholder.com/360x640" alt="Thumbnail 3" borderRadius="md" />
            <Image src="https://via.placeholder.com/360x640" alt="Thumbnail 3" borderRadius="md" />

        </SimpleGrid>
    );
};

export default HomePage;
