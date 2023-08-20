import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, VStack, Divider, Flex, Input, Textarea, Button } from '@chakra-ui/react';
import axios from 'axios';


const ProductDetailsPage = () => {
    const { productID } = useParams(); // Retrieve the product ID from the URL

    const [productDetails, setProductDetails] = useState({});
    const [comments, setComments] = useState([]);
    const [username, setUsername] = useState('');
    const [commentText, setCommentText] = useState('');

    useEffect(() => {
        // Fetch product details from backend based on productID
        axios.get(`/api/products/${productID}`)
            .then(response => {
                setProductDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });

        // Fetch comments from backend based on videoID
        if (productDetails.videoID) {
            axios.get(`/api/comments?videoID=${productDetails.videoID}`)
                .then(response => {
                    setComments(response.data);
                })
                .catch(error => {
                    console.error('Error fetching comments:', error);
                });
        }
    }, [productID, productDetails.videoID]);

    const handleCommentSubmit = () => {
        if (username && commentText) {
            // Send comment to backend
            axios.post('/api/comments', {
                username,
                comment: commentText,
                videoID: productDetails.videoID,
            })
                .then(response => {
                    // Refresh comments after successful submission
                    setComments([...comments, response.data.comment]);
                    setUsername('');
                    setCommentText('');
                })
                .catch(error => {
                    console.error('Error submitting comment:', error);
                });
        }
    };

    return (
        <Flex p={8}>
            {/* Product Details */}
            <Box flex={1} pr={4}>
                <Text fontSize="xl" fontWeight="bold">{productDetails.productTitle}</Text>
                <Text mt={2}>{productDetails.productPrice}</Text>
            </Box>

            {/* Embedded YouTube Video */}
            <Box flex={1} px={4}>
                <iframe
                    width="100%"
                    height="300"
                    src={`https://www.youtube.com/embed/${productDetails.youtubeVideoID}`}
                    title="YouTube Video"
                    allowFullScreen
                />
            </Box>

            {/* User Comments */}
            <Box flex={1} pl={4}>
                <VStack spacing={4} align="stretch">
                    <Text fontSize="lg" fontWeight="bold">Comments</Text>
                    {comments.map((comment, index) => (
                        <Box key={index} p={2} borderRadius="md" borderWidth={1}>
                            <Text fontWeight="bold">{comment.username}</Text>
                            <Text>{comment.comment}</Text>
                        </Box>
                    ))}

                    {/* Comment Form */}
                    {/* Comment Form */}
                    <Box borderWidth={1} p={4} borderRadius="md">
                        <Text fontWeight="bold">Leave a Comment</Text>
                        <Divider my={2} />
                        <Input
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            mb={2}
                            _focus={{ borderColor: 'brandGreen.500' }} // Apply green border on focus
                        />
                        <Textarea
                            placeholder="Comment"
                            rows="4"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            mb={2}
                            _focus={{ borderColor: 'brandGreen.500' }} // Apply green border on focus
                        />
                        <Button colorScheme="brandGreen" onClick={handleCommentSubmit}>Submit Comment</Button>
                    </Box>
                </VStack>
            </Box>
        </Flex>
    );
};

export default ProductDetailsPage;
