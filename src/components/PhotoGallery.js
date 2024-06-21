import React, { useState, useEffect } from 'react';
import { fetchPhotos } from '../api/unsplash';
import { Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CardList = styled('div')(({ theme }) => ({
  columnCount: 1,
  columnGap: '1rem',
  [theme.breakpoints.up('sm')]: {
    columnCount: 2,
  },
  [theme.breakpoints.up('md')]: {
    columnCount: 3,
  },
}));

const Card = styled('div')({
  marginBottom: '1rem',
  display: 'flex',
});

const CardImage = styled('img')({
  flex: '100%',
  marginTop: '1rem',
  borderRadius: '10px',
  width: '100%',
  height: 'auto',
});

const SearchField = styled(TextField)(({ theme }) => ({
  width: '300px', 
  borderRadius: '50px', 
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
  },
}));

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPhotos('nature')
      .then(response => {
        setPhotos(response.data.results);
        setError(null);
      })
      .catch(error => {
        setError('Failed to fetch photos. Please try again.');
        setPhotos([]);
      });
  }, []);

  useEffect(() => {
    if (query.trim() === '') return;

    fetchPhotos(query)
      .then(response => {
        setPhotos(response.data.results);
        setError(null);
      })
      .catch(error => {
        setError('Failed to fetch photos. Please try again.');
        setPhotos([]);
      });
  }, [query]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setQuery(searchInput);
    }
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <Container>
      <Box my={4} display="flex" justifyContent="center">
        <SearchField
          label="Search for photos"
          variant="outlined"
          margin="normal"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </Box>
      {error && <Typography color="error" align="center">{error}</Typography>}
      {!error && photos.length === 0 && (
        <Typography align="center">No photos found. Please try a different search.</Typography>
      )}
      <CardList>
        {photos.map(photo => (
          <Card key={photo.id}>
            <CardImage
              alt={photo.alt_description}
              src={photo.urls.full}
            />
          </Card>
        ))}
      </CardList>
    </Container>
  );
};

export default PhotoGallery;
