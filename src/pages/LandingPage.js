import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import PhotoGallery from '../components/PhotoGallery';
import CharacterList from '../components/CharacterList';

const LandingPage = () => {
  return (
    <Container>
      <Box my={4}>
        <section>
          <Typography variant="h4" component="h2" gutterBottom>
            Unsplash Photos API
          </Typography>
          <PhotoGallery />
        </section>
        <section>
          <Typography variant="h4" component="h2" gutterBottom>
            Rick and Morty API
          </Typography>
          <CharacterList />
        </section>
      </Box>
    </Container>
  );
};

export default LandingPage;
