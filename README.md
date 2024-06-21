# Getting Started with Unsplash and Rick & Morty API App

## Overview

This project is a client application that documents the Unsplash Photos API and the Rick & Morty API. It showcases examples of how to use these APIs and is built using React with Material-UI for styling.

## Features

- Search and display photos from Unsplash.
- Display a list of characters from the Rick & Morty series.
- Detailed documentation for both APIs.
- Responsive and intuitive UI using Material-UI.

## Dependencies

The project uses the following dependencies:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Material-UI (MUI)](https://mui.com/) - A popular React UI framework.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for making API requests.
- [Emotion](https://emotion.sh/docs/introduction) - A library for writing CSS styles with JavaScript.

To install these dependencies, run:

```bash
npm install axios @mui/material @emotion/react @emotion/styled
# or
yarn add axios @mui/material @emotion/react @emotion/styled
```

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone 'https://github.com/123ZOKzok/unsplash-rick-and-morty.git'
    cd unsplash-rick-and-morty
    ```

2. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm start
    # or
    yarn start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Searching for Photos

1. Enter a search query in the provided text field on the home page.
2. Press Enter or click the Search button to fetch photos from Unsplash.
3. Scroll through the grid of photo cards to view the results.

### Viewing Characters

1. Navigate to the Characters page using the navbar.
2. Enter a search query in the provided text field.
3. Press Enter or click the Search button to fetch characters from Rick & Morty API.
4. View the list of Rick & Morty characters displayed in card format.

## Presentation Slides

Check out our presentation slides that introduce the Unsplash and Rick & Morty APIs, along with their use cases for businesses and developers:

- [View Presentation Slides](https://www.canva.com/design/DAGIv52d0Y0/yzqerz-S5L8h8HPvr-W7tA)

## Demo

Explore a live demo of our project to see it in action:
- [View Demo](https://unsplash-rick-and-morty.vercel.app/unsplash)

## Deployment

The project is deployed using [Vercel](https://vercel.com/), a platform for frontend frameworks and static sites.

### Steps to Deploy

1. Push the code to a GitHub repository.
2. Sign in to Vercel and connect the GitHub repository.
3. Configure the build settings if necessary (Vercel will detect the framework and set defaults).
4. Deploy the project and obtain the deployment URL.

