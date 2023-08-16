# Tokopedia Clone API documentation

This documentation provides information about the API endpoints for a video sharing platform.

## Base URL

All API endpoints are relative to the base URL of the server.

Example: `http://localhost:3000/api`

## Endpoints

### 1. Video Thumbnail List

**Endpoint:** `/video_thumbnails`

**Method:** GET

**Description:** Retrieve a list of video thumbnail objects.

**Response:**
- Status: 200 OK
- Content: Array of video thumbnail objects
    - `videoId` (string): Video's unique identifier
    - `imageUrl` (string): URL of the thumbnail image
    - `thumbnailName` (string): Name or identifier for the thumbnail

---

### 2. Product List

**Endpoint:** `/products`

**Method:** GET

**Description:** Retrieve a list of product objects.

**Response:**
- Status: 200 OK
- Content: Array of product objects
    - `productId` (string): Product's unique identifier
    - `productLink` (string): Link to the product
    - `title` (string): Title of the product
    - `price` (number): Price of the product

---

### 3. Comment List

**Endpoint:** `/comments`

**Method:** GET

**Description:** Retrieve a list of comments for a specific video.

**Payload/Argument:**
- `videoId` (string, query parameter): Unique identifier of the video

**Response:**
- Status: 200 OK
- Content: Array of comment objects
    - `username` (string): Username of the commenter
    - `comment` (string): Comment text
    - `timestamp` (string): Timestamp of when the comment was made

---

### 4. Submit Comment

**Endpoint:** `/submit_comment`

**Method:** POST

**Description:** Submit a new comment for a video.

**Payload/Argument:**
- `videoId` (string): Unique identifier of the video
- `username` (string): Username of the commenter
- `comment` (string): Comment text

**Response:**
- Status: 200 OK
- Content: Object
    - `message` (string): "Comment submitted successfully" or "Failed to submit comment"

---

## Error Responses

In case of errors, the API may respond with appropriate error messages.

- Status: 500 Internal Server Error
- Content: Object
    - `error` (string): Descriptive error message

---

## Notes

- Video IDs, product IDs, and other identifiers are unique strings.
- Timestamps are provided in ISO 8601 format.

---

## Usage

To use the API, make requests to the respective endpoints using the appropriate HTTP methods.

Example:

- Retrieve video thumbnails: `GET /video_thumbnails`
- Retrieve product list: `GET /products`
- Retrieve comments for a video: `GET /comments?videoId=<videoId>`
- Submit a comment: `POST /submit_comment`
  - Body: `{ "videoId": "<videoId>", "username": "<username>", "comment": "<comment>" }`

---

Feel free to adapt this documentation template to your needs and make it more comprehensive as required.
