import React, { useState } from 'react'
import MovieForm from './FormComponent'
import TableComponent from './movieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

    const App = () => {
      return (
        <div className="container">
        <header className="row">
          <div className="col text-center pt-4">
            <h1>Abe and Britt's Movie List</h1>
          </div>
        </header>
        <MovieForm/>
        <TableComponent/>
      </div>
      );
    };


export default App;
