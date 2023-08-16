import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../src/assets/logo.png';
import { FaSearch } from "react-icons/fa";
import "./SearchBar";
import "./SearchResultList";
import "./SearchResults";

const Header = () => {
    return (
        <header>
            <Flex align="center" justify="space-between" p={4}>
                <RouterLink to="/">
                    <img src={logo} alt="Logo" style={{ width: '150px', cursor: 'pointer' }} />
                </RouterLink>
                <div className="input-wrapper">
                    <FaSearch id="search-icon" />
                    <input
                        placeholder="Type to search..."
                    // Handle the input here if needed
                    />
                </div>
                <Button as={RouterLink} to="/login" colorScheme="teal" size="sm">
                    Sign In
                </Button>
            </Flex>
            <div className="results-list">
                {/* Render your search results here */}
                {/* Example: */}
                {/* <div className="search-result">Search Result 1</div> */}
                {/* <div className="search-result">Search Result 2</div> */}
            </div>
        </header>
    );
};

export default Header;
