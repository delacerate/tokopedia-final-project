import React, { useState, useEffect } from 'react';
import { SimpleGrid, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
    const [productThumbnails, setProductThumbnails] = useState([]);

    useEffect(() => {
        // Fetch product thumbnail URLs from the backend API using Axios
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/product/`) // Assuming you have an API route for fetching products
            .then(response => {
                const data = response.data; // Assuming the response contains an array of product objects with thumbnail URLs
                setProductThumbnails(data);
            })
            .catch(error => console.error('Error fetching product thumbnails:', error));
    }, []);

    return (
        <SimpleGrid columns={5} spacing={8} p={10}>
            {productThumbnails.map((product, index) => (
                <Link
                    key={product.productID}
                    to={`/product/${product.productID}`} // Assuming product has an '_id' property
                >
                    <Image
                        src={product.ProductLink} // Assuming your product object has a 'Thumbnail' property
                        alt={`Product Thumbnail ${index + 1}`}
                        borderRadius="md"
                        width="300px" // Set the width to 300px
                        height="auto" // Let the height adjust based on the aspect ratio
                        maxH="480px" // Limit the maximum height to 480px
                    />
                </Link>
            ))}
        </SimpleGrid>
    );
};

export default HomePage;
