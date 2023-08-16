import React, { useState } from 'react';
import { InputGroup, Input, InputRightElement, Button, Box } from '@chakra-ui/react';

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(searchTerm);
        }
    };

    return (
        <Box display="flex" alignItems="center">
            <InputGroup maxW="md">
                <Input
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleSearchClick}>
                        Search
                    </Button>
                </InputRightElement>
            </InputGroup>
            <div>{searchTerm}</div>
        </Box>
    );
};

export default SearchBar;
