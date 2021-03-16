import React, { useState } from 'react'
import TableComponent from './movieList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

let movies = [
      {
          id: 1,
          title:'Akira',
          genre:'Action',
          year:'1988',
          details: 'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by two teenagers and a group of psychics.',
          movieImage:'https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbLink:'https://www.imdb.com/title/tt0094625/',
        },
        {
          id: 2,
          title:'Midsommar',
          genre:'Horror',
          year:'2019',
          details: 'A couple travels to Scandinavia to visit a rural hometown`s fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.',
          movieImage:'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbLink:'https://www.imdb.com/title/tt8772262/?ref_=fn_al_tt_1',
        },
        {
          id: 3,
          title:'Gladiator',
          genre:'Action',
          year:'2000',
          details: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
          movieImage:'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbLink:'https://www.imdb.com/title/tt0172495/?ref_=fn_al_tt_1',
        },
        {
          id: 4,
          title:'Zoolander',
          genre:'Comedy',
          year:'2001',
          details: 'At the end of his career, a clueless fashion model is brainwashed to kill the Prime Minister of Malaysia.',
          movieImage:'https://m.media-amazon.com/images/M/MV5BODI4NDY2NDM5M15BMl5BanBnXkFtZTgwNzEwOTMxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbLink:'https://www.imdb.com/title/tt0196229/?ref_=nv_sr_srsg_0',
        },
        {
          id: 5,
          title:'Troy',
          genre:'Drama',
          year:'2004',
          details: 'An adaptation of Homer`s great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.',
          movieImage:'https://m.media-amazon.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbLink:'https://www.imdb.com/title/tt0332452/?ref_=nv_sr_srsg_0',
        },
        {
          id: 6,
          title:'Grave of the Fireflies',
          genre:'Drama',
          year:'1988',
          details: 'A young boy and his little sister struggle to survive in Japan during World War II.',
          movieImage:'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbLink:'https://www.imdb.com/title/tt0095327/?ref_=nv_sr_srsg_0',
        },
        {
          id: 7,
          title:'John Wick',
          genre:'Action',
          year:'2004',
          details: 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.',
          movieImage:'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbLink:'https://www.imdb.com/title/tt2911666/?ref_=nv_sr_srsg_0',
        },
        {
          id: 8,
          title:'Black Dynamite',
          genre:'Comedy',
          year:'2009',
          details: 'Black Dynamite is the greatest African-American action star of the 1970s. When his only brother is killed by The Man, it`s up to him to find justice.',
          movieImage:'https://m.media-amazon.com/images/M/MV5BODMyM2JiYzMtODY3OS00ODExLTg0YzYtYWNlZTczMDUzY2I3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbLink:'https://www.imdb.com/title/tt1190536/?ref_=nv_sr_srsg_0',
        },
        {
          id: 9,
          title:'Constantine',
          genre:'Action',
          year:'2005',
          details: 'Supernatural exorcist and demonologist John Constantine helps a policewoman prove her sister`s death was not a suicide, but something more.',
          movieImage:'https://m.media-amazon.com/images/M/MV5BODRiNmFhY2EtMGY2OC00YjI2LWIyYjQtYzFiM2ZhNjdhYzE4XkEyXkFqcGdeQXVyNDY5MTUyNjU@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbLink:'https://www.imdb.com/title/tt0360486/?ref_=nv_sr_srsg_0',
        },
        {
          id: 10,
          title:'A Night at the Roxbury',
          genre:'Comedy',
          year:'1998',
          details: 'Two dim-witted brothers dream of owning their own dance club or at least getting into the coolest and most exclusive club in town, The Roxbury.',
          movieImage:'https://m.media-amazon.com/images/M/MV5BYTczZmEyYWMtMTE5MC00YzcyLWJhMDAtZDA5Mzg2YmQwNWQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg',
          imdbLink:'https://www.imdb.com/title/tt0120770/?ref_=nv_sr_srsg_0',
        },
    ];

    const App = () => {
      return (
        <div className="container">
        <header className="row">
          <div className="col text-center pt-4">
            <h1>Abe and Britt's Movie List</h1>
          </div>
        </header>
        <TableComponent/>
      </div>
      );
    };


export default App;
