import React from 'react';
import { Button, Input, InputGroup, InputRightElement, Image, Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png'; // Import the logo image

const Header = () => {
    return (
        <header style={{ height: '80px' }}> {/* Adjust header height */}
            <Box p={4}>
                <Flex align="center" justify="space-between">
                    <Link to="/">
                        <Image src={logo} alt="Logo" w="150px" /> {/* Display the logo image */}
                    </Link>
                    <InputGroup maxW="md">
                        <Input placeholder="Search..." />
                        <InputRightElement>
                            <Button colorScheme="brandGreen" size="sm">
                                Search
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <Button as={Link} to="/login" colorScheme="teal" size="sm">
                        Sign In
                    </Button>
                </Flex>
            </Box>
        </header>
    );
};

export default Header;
