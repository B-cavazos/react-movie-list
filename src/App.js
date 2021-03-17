import { useState } from 'react';
import moviesList from './movieList';
import MovieForm from './FormComponent';
import TableComponent from './movieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(moviesList);
  const addMovie = movie =>{
    // debugger;
    movies.push=(movie)=>{};
    console.log(addMovie);
  };
      
  return (
  <div className="container">
    <header className="row">
      <div className="col text-center pt-4">
        <h1>Abe and Britt's Movie List</h1>
      </div>
      </header>
      <MovieForm addMovie={addMovie}/>
      <TableComponent movies={movies}/>
    </div>
  );
};

export default App;
