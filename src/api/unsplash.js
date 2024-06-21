import axios from 'axios';

const UNSPLASH_ACCESS_KEY = '1gZl2S1RWlavaGCrJWRHWskkYHJZGZjbthU3Sc01j7M';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
  }
});

export const fetchPhotos = (query) => {
  return unsplashApi.get(`/search/photos`, {
    params: { query }
  });
};

export const fetchPhotoById = (id) => {
  return unsplashApi.get(`/photos/${id}`);
};
