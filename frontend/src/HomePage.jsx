import React from 'react';
import {
    Box,
    Button,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    SimpleGrid,
    Image,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Box textAlign="center" p={8}>
            <Text fontSize="xl" mb={4}>
                Welcome to our website!
            </Text>
            <InputGroup maxW="md" mx="auto" mb={4}>
                <Input placeholder="Search..." />
                <InputRightElement>
                    <Button colorScheme="brandGreen" size="sm">
                        Search
                    </Button>
                </InputRightElement>
            </InputGroup>
            <SimpleGrid columns={3} spacing={4}>
                <Image
                    src="https://via.placeholder.com/150"
                    alt="Thumbnail 1"
                    borderRadius="md"
                />
                <Image
                    src="https://via.placeholder.com/150"
                    alt="Thumbnail 2"
                    borderRadius="md"
                />
                <Image
                    src="https://via.placeholder.com/150"
                    alt="Thumbnail 3"
                    borderRadius="md"
                />
            </SimpleGrid>
            <Button
                as={Link}
                to="/login"
                colorScheme="brandGreen"
                mt={4}
                size="lg"
                alignSelf="center"
            >
                Login
            </Button>
        </Box>
    );
};

export default HomePage;
