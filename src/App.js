import React, { useState } from 'react'
import TableComponent from './movieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const movies = [
    {
        id: 1,
        title:'Akira',
        genre:'Action',
        year:'1988',
        movieImage:'https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbLink:'https://www.imdb.com/title/tt0094625/',
      },
      {
        id: 2,
        title:'Midsommar',
        genre:'Horror',
        year:'2910',
        movieImage:'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbLink:'https://www.imdb.com/title/tt8772262/?ref_=fn_al_tt_1',
      },
      {
        id: 3,
        title:'Gladiator',
        genre:'Action',
        year:'2000',
        movieImage:'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbLink:'https://www.imdb.com/title/tt0172495/?ref_=fn_al_tt_1',
      },
      {
        id: 4,
        title:'Zoolander',
        genre:'Comedy',
        year:'2001',
        movieImage:'https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbLink:'https://www.imdb.com/title/tt0196229/?ref_=nv_sr_srsg_0',
      },
      {
        id: 5,
        title:'Troy',
        genre:'Drama',
        year:'2004',
        movieImage:'https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbLink:'https://www.imdb.com/title/tt0332452/?ref_=nv_sr_srsg_0',
      },
      {
        id: 6,
        title:'Grave of the Fireflies',
        genre:'Drama',
        year:'1988',
        movieImage:'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbLink:'https://www.imdb.com/title/tt0095327/?ref_=nv_sr_srsg_0',
      },
      {
        id: 7,
        title:'John Wick',
        genre:'Action', 
        year:'2004',
        movieImage:'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbLink:'https://www.imdb.com/title/tt2911666/?ref_=nv_sr_srsg_0',
      },
      {
        id: 8,
        title:'Black Dynamite',
        genre:'Comedy',
        year:'2009',
        movieImage:'https://m.media-amazon.com/images/M/MV5BODMyM2JiYzMtODY3OS00ODExLTg0YzYtYWNlZTczMDUzY2I3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbLink:'https://www.imdb.com/title/tt1190536/?ref_=nv_sr_srsg_0',
      },
      {
        id: 9,
        title:'Constantine',
        genre:'Action',
        year:'2005',
        movieImage:'https://m.media-amazon.com/images/M/MV5BODRiNmFhY2EtMGY2OC00YjI2LWIyYjQtYzFiM2ZhNjdhYzE4XkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbLink:'https://www.imdb.com/title/tt0360486/?ref_=nv_sr_srsg_0',
      },
      {
        id: 10,
        title:'Night at the Roxbury',
        genre:'Comedy',
        year:'1998',
        movieImage:'https://m.media-amazon.com/images/M/MV5BYTczZmEyYWMtMTE5MC00YzcyLWJhMDAtZDA5Mzg2YmQwNWQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
        imdbLink:'https://www.imdb.com/title/tt0120770/?ref_=nv_sr_srsg_0',
      },
  ];
//  debugger;
    return (
      <div className='container'>
        <TableComponent movieData={movies} />
      </div>
    )
  };

export default App;
