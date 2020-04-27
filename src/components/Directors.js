import React from 'react';
import { directors } from '../data';

const dirContent = () => {
  return directors.map(dir => {
    return (
      <div>Name: {dir.name}
      Movies:

      <ul>
        {dir.movies.map(movie => <ul>{movie}</ul>)}
      </ul>
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {dirContent()}
    </div>
  );
}

export default Directors
