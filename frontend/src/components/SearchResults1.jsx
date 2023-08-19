import React from 'react';
import { Text, Flex } from '@chakra-ui/react';

const SearchResults = ({ results }) => {
    return (
        <Flex direction="column" alignItems="flex-start">
            {results.map((result, index) => (
                <Text key={index}>{result}</Text>
            ))}
        </Flex>
    );
};

export default SearchResults;
