import React, { useState } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink from react-router-dom
import logo from '../src/assets/logo.png'; // Make sure logo.png is located in the src directory
import SearchBar from '../src/SearchBar';
import SearchResults from '../src/SearchResults';

const Header = () => {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchTerm) => {
        // Simulate fetching search results from an API
        // Replace this with your actual search logic
        const dummySearchResults = [
            'Search Result 1',
            'Search Result 2',
            'Search Result 3',
        ];

        // Update search results based on the searchTerm
        const filteredResults = dummySearchResults.filter(result =>
            result.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredResults);
    };

    return (
        <header>
            <Flex align="center" justify="space-between" p={4}>
                {/* Make the logo a clickable link */}
                <RouterLink to="/">
                    <img src={logo} alt="Logo" style={{ width: '150px', cursor: 'pointer' }} />
                </RouterLink>
                <SearchBar onSearch={handleSearch} />
                {/* Use RouterLink to navigate to the login page */}
                <Button as={RouterLink} to="/login" colorScheme="teal" size="sm">
                    Sign In
                </Button>
            </Flex>
            <SearchResults results={searchResults} />
        </header>
    );
};

export default Header;
