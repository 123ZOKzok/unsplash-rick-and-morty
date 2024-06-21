import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../api/rickAndMorty';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Box, TextField } from '@mui/material';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const allCharacters = await fetchCharacters();
        setCharacters(allCharacters);
        setFilteredCharacters(allCharacters); 
      } catch (error) {
        console.error('Error fetching characters:', error);
        setError('Error fetching characters. Please try again later.');
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCharacters(filtered);
  };

  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h4" component="h2" gutterBottom>
          Rick and Morty Characters
        </Typography>
        <TextField
          label="Search characters"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          size="medium"
          InputProps={{
            style: { borderRadius: 50 }, 
          }}
          sx={{
            maxWidth: '30%', 
            mx: 'auto',     
            mb: 2,          
          }}
        />
        {error && <Typography color="error">{error}</Typography>}
        {!error && filteredCharacters.length === 0 && (
          <Typography variant="body1">No characters found.</Typography>
        )}
        <Grid container spacing={3}>
          {filteredCharacters.slice(0, 20).map(character => (
            <Grid item key={character.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardMedia
                  component="img"
                  image={character.image}
                  alt={character.name}
                  style={{ height: 300, width: '100%', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6">
                    {character.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CharacterList;
