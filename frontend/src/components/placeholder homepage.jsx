import React from 'react';
import { SimpleGrid, Image } from '@chakra-ui/react';

const HomePage = () => {
    return (
        <SimpleGrid columns={5} spacing={8} p={10}>
            <Image src="https://via.placeholder.com/300x480" alt="Thumbnail 1" borderRadius="md" />
            <Image src="https://via.placeholder.com/300x480" alt="Thumbnail 2" borderRadius="md" />
            <Image src="https://via.placeholder.com/300x480" alt="Thumbnail 3" borderRadius="md" />
            <Image src="https://via.placeholder.com/300x480" alt="Thumbnail 3" borderRadius="md" />
            <Image src="https://via.placeholder.com/300x480" alt="Thumbnail 3" borderRadius="md" />

        </SimpleGrid>
    );
};

export default HomePage;