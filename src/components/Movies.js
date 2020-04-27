import React from 'react';
import { movies } from '../data';

console.log(movies)

const movContent = () => {
  return movies.map(mov => {
    return (
      <div><h2>Name: {mov.title}</h2>
      Time: {mov.time}
      {mov.genres.map(genre=> <ul>{genre}</ul>)}
      </div>
    )
  })
}

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movContent()}
    </div>
  );
};

export default Movies;

// 7) should render a <div /> for each movie
// 8) should render the right content for each movie