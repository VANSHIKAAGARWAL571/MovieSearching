import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCards from './movieCards';

test('renders movie card with title', () => {
  const movie = {
    title: 'Jurassic Park',
    poster_path: '/poster.jpg',
    release_date: '1993-06-11',
    vote_average: 8.0,
    overview: 'An amazing movie',
  };

  render(<MovieCards movie={movie} />);
  expect(screen.getByText(/Jurassic Park/i)).toBeInTheDocument();
  expect(screen.getByText(/Release Date: 1993-06-11/i)).toBeInTheDocument();
  expect(screen.getByText(/Rating: 8/i)).toBeInTheDocument();
  expect(screen.getByText(/An amazing movie/i)).toBeInTheDocument();
});
