import React from 'react';



const TableComponent = ({ movies }) => {
  const showDetails = movieId => {
    // debugger;

    let foundMovie = movies.find(movie => movie.id === movieId);

    if (!foundMovie) {
      alert(`Sorry! Could not find the movie you where looking for!`);
    } else {
      alert(`${foundMovie.title} is a ${foundMovie.genre} flick that came out in ${foundMovie.year}!!`);
    }
  };

  return (
    <div className='row'>
      <div className='col-6 offset-3'>
        <ul className='list-group'>
          {movies.map((movie, index) => {
            return (
              <li className='list-group-item' key={index}>

                <a> <img src={movie.movieImage} ></img>
                <br></br>
                <big src={movie.imbdLink} onClick={(e) => {
      e.preventDefault();
      window.location.href='http://google.com';
      }} > {movie.title} </big></a>
                <br></br>

                 {movie.genre} | {movie.year}
                <br></br>

                <a
                  href='javascript:void(0)'
                  onClick={() => showDetails(movie.id)}>
                    <button className='btn-primary'>Click for details</button>
                </a>

                <br></br>

              </li>


            );
          })}
        </ul>
      </div>
    </div>
  );


};



// const images = [
//   { id: 1, src: './assets/image01.jpg', title: 'foo', description: 'bar' },
//   { id: 2, src: './assets/image02.jpg', title: 'foo', description: 'bar' },
//   { id: 3, src: './assets/image03.jpg', title: 'foo', description: 'bar' },
//   { id: 4, src: './assets/image04.jpg', title: 'foo', description: 'bar' },
//   { id: 5, src: './assets/image05.jpg', title: 'foo', description: 'bar' },
//   ...etc
// ];

// function imageLoader() {
//   return images;
// }


// const TableBody = () => {
//   return <tbody />
// }

// const TableComponent = () => {
//   render() {
//     const {movieData} = this.props

//     return (
//       <table>

//         <TableBody movieData={movieData} />

//       </table>
//     )
//   }
// };




// const MovieListComponent = movies => {

// return (
//   <table>

//     <thead>
//       <tr>

//         <td onClick={() => movies(movies.id)}>
//                   one</td>

//       </tr>
//     </thead>

//   </table>
// );
// };


// const TableComponent = ({movies}) => {
//   return (
//       <ul>
//         {movies.map((movie, index) => (
//           <li key={movie.id}>
//             <p>{movie.title}</p>
//             <p>{movie.genre}</p>
//             <p>{movie.year}</p>
//           </li>
//         ))}
//       </ul>
//     );
//   }

export default TableComponent;
