# API Testing with Postman and Thunder Client

This documentation outlines how to test the `Rick and Morty API` and `Unsplash API` endpoints using either Postman or Thunder Client in Visual Studio Code.

## Rick and Morty API

### Fetching All Characters

**Endpoint:** `GET https://rickandmortyapi.com/api/character`

- **Method:** `GET`
- **Headers:** None required
- **Parameters:** None
- **Body:** None

**Steps for Thunder Client:**
1. Open Thunder Client in VS Code.
2. Create a new request.
3. Set the method to `GET`.
4. Enter the URL: `https://rickandmortyapi.com/api/character`.
5. Send the request.

**Steps for Postman:**
1. Open Postman.
2. Create a new request.
3. Set the method to `GET`.
4. Enter the URL: `https://rickandmortyapi.com/api/character`.
5. Send the request.

## Unsplash API

### Searching Photos

**Endpoint:** `GET https://api.unsplash.com/search/photos`

- **Method:** `GET`
- **Headers:** 
  - `Authorization: Client-ID {UNSPLASH_ACCESS_KEY}` (replace `{UNSPLASH_ACCESS_KEY}` with your actual access key)
- **Parameters:** `query={your_search_query}` (replace `{your_search_query}` with the term you want to search for)
- **Body:** None

**Steps for Thunder Client:**
1. Open Thunder Client in VS Code.
2. Create a new request.
3. Set the method to `GET`.
4. Enter the URL: `https://api.unsplash.com/search/photos`.
5. Add the header `Authorization: Client-ID {UNSPLASH_ACCESS_KEY}`, where `{UNSPLASH_ACCESS_KEY}` is your actual key.
6. Add a query parameter `query` with your desired search term, for example `query=nature`.
7. Send the request.

**Steps for Postman:**
1. Open Postman.
2. Create a new request.
3. Set the method to `GET`.
4. Enter the URL: `https://api.unsplash.com/search/photos`.
5. Add the header `Authorization: Client-ID {UNSPLASH_ACCESS_KEY}`, where `{UNSPLASH_ACCESS_KEY}` is your actual key.
6. Add a query parameter `query` with your desired search term, for example `query=nature`.
7. Send the request.

---

Ensure to replace placeholder values like `{UNSPLASH_ACCESS_KEY}` and `{your_search_query}` with actual data when testing the endpoints. Both Postman and Thunder Client will manage sending requests and displaying responses directly.
