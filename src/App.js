import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import globalStyles from './styles/globalStyles';
import theme from './styles/theme';
import AppBar from './components/AppBar';
import UnsplashPage from './pages/UnsplashPage';
import RickAndMortyPage from './pages/RickAndMortyPage';
import Loader from './components/Loader'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <Router>
        <AppBar />
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/unsplash" element={<UnsplashPage />} />
            <Route path="/rick-and-morty" element={<RickAndMortyPage />} />
            <Route path="/" element={<Navigate to="/unsplash" />} />
          </Routes>
        )}
      </Router>
    </ThemeProvider>
  );
};

export default App;
