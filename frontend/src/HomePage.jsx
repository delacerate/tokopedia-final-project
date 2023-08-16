import React, { useState, useEffect } from 'react';
import { SimpleGrid, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';

const HomePage = () => {
    const [productThumbnails, setProductThumbnails] = useState([]);

    useEffect(() => {
        // Fetch product thumbnail URLs from the backend API using Axios
        axios.get('YOUR_BACKEND_URL_HERE')
            .then(response => {
                const data = response.data; // Assuming the response contains an array of product objects with thumbnail URLs
                setProductThumbnails(data);
            })
            .catch(error => console.error('Error fetching product thumbnails:', error));
    }, []);

    return (
        <SimpleGrid columns={7} spacing={4} p={8}>
            {productThumbnails.map((product, index) => (
                <Link
                    key={index}
                    to={`/detail/${product.id}`} // Assuming product has an 'id' property
                >
                    -      <Image
                        src={product.thumbnailUrl} // Assuming your product object has a 'thumbnailUrl' property
                        alt={`Product Thumbnail ${index + 1}`}
                        borderRadius="md"
                        width="360px"
                        height="640px"
                    />
                </Link>
            ))}
        </SimpleGrid>
    );
};

export default HomePage;
