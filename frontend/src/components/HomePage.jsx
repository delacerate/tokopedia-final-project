import React from 'react';
import { SimpleGrid, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./HomePage.css"

const hardcodedData = [
    {
        thumbnail: "https://i.ytimg.com/vi/NwkQblH61FA/maxresdefault.jpg",
        title: "wardah beauty"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/jIy5QuwJs04/maxresdefault.jpg",
        title: "jaket Bomber"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/elgr5QxFHMw/maxresdefault.jpg",
        title: "Kebaya Megamendung"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/N2KdVI0RssU/maxresdefault.jpg",
        title: "Sarung Trendy"
    },
    {
        thumbnail: "https://i.ytimg.com/vi/1UMw5mu6Mgk/maxresdefault.jpg",
        title: "Corkcicle"
    }
];

const HomePage = () => {
    return (
        <SimpleGrid columns={5} spacing={8} p={10}>
            {hardcodedData.map((product, index) => (
                <Link
                    key={`thumbnail-${index}`}
                    to={`/details/product/${product.videoID}`} // Use the videoID as the URL parameter
                >
                    <Button
                        borderRadius="md"
                        overflow="hidden"
                        width="300px"
                        height="190px"
                        padding="0" // Remove default padding
                        position="relative"
                        display="flex"
                        flexDirection="column"
                        justifyContent="center" // Center vertically
                        alignItems="center" // Center horizontally
                        border="4px solid transparent"
                        _hover={{ borderColor: '#4DB953' }}
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                            }}
                        />
                        <span
                            className="product-title"
                        >
                            {product.title}
                        </span>
                    </Button>
                </Link>
            ))}
        </SimpleGrid>
    );
};

export default HomePage;