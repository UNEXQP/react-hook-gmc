import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'data:image/jpeg;base64,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',
      rating: 8.8,
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker emerges from his mysterious past.',
      posterURL: 'data:image/jpeg;base64,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',
      rating: 9,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: '',
  });

  const addMovie = () => {
    if (newMovie.title.trim() && newMovie.description.trim() && newMovie.rating) {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: '', description: '', posterURL: '', rating: '' });
    }
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= (ratingFilter || 0)
  );

  return (
    <div>
      <h1>Movie App</h1>
      
      <Filter 
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      
      <div className="new-movie-form">
        <input 
          type="text" 
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input 
          type="number" 
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
      
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;

