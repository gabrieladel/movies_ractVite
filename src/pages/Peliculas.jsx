import React, { useState, useEffect } from 'react';

const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?language=es-ES&page=1&sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const generos = [
  {
    "id": 28,
    "name": "Accion"
  },
  {
    "id": 12,
    "name": "Aventura"
  },
  {
    "id": 16,
    "name": "Animación"
  },
  {
    "id": 35,
    "name": "Comedia"
  },
  {
    "id": 80,
    "name": "Crimen"
  },
  {
    "id": 99,
    "name": "Documental"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Familiar"
  },
  {
    "id": 14,
    "name": "Fantacia"
  },
  {
    "id": 36,
    "name": "Historia"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Musicales"
  },
  {
    "id": 9648,
    "name": "Misterio"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Ciencia ficción"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Suspenso"
  },
  {
    "id": 10752,
    "name": "Guerra"
  },
];

function App() {
  const [selectedGenero, setSelectedGenero] = useState([]);
  const [movies, setMovies] = useState([]);
  const [lastUrl, setLastUrl] = useState(API_URL);

  useEffect(() => {
    getMovies(lastUrl);
  }, [lastUrl]);

  function getMovies(url) {
    setLastUrl(url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        if (data.results.length !== 0) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  }

  function handleGeneroClick(genero) {
    const updatedGeneros = [...selectedGenero];
    if (updatedGeneros.includes(genero.id)) {
      updatedGeneros.splice(updatedGeneros.indexOf(genero.id), 1);
    } else {
      updatedGeneros.push(genero.id);
    }
    setSelectedGenero(updatedGeneros);
    getMovies(`${API_URL}&with_genres=${updatedGeneros.join(',')}`);
  }

  function clearGeneros() {
    setSelectedGenero([]);
    getMovies(API_URL);
  }

  return (
    
    <div className="App">
      <h1>Mira las mejores Peliculas</h1>
      <div id="tags">
        {generos.map(genero => (
          <div
            key={genero.id}
            className={`tag ${selectedGenero.includes(genero.id) ? 'destacar' : ''}`}
            onClick={() => handleGeneroClick(genero)}
          >
            {genero.name}
          </div>
        ))}
        {selectedGenero.length > 0 && (
          <div className="tag destacar" id="clear" onClick={clearGeneros}>
            Borrar x
          </div>
        )}
      </div>
      <div id="main">
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id} className="movie">
              <img
                src={movie.poster_path ? `${IMG_URL}${movie.poster_path}` : 'http://via.placeholder.com/1080x1580'}
                alt={movie.title}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className="voto">{movie.vote_average}</span>
              </div>
              <div className="descripción">
                <h3>Descripción</h3>
                {movie.overview}
                <br />
                <button className="ver" id={movie.id}>
                  Mirala aqui
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>No se encontraron resultados</h1>
        )}
      </div>
    </div>
  );
}

export default App;
