import React from 'react';


const TableBody = () => {
  return <tbody />
}

const TableComponent = () => {
  render() {
    const {movieData} = this.props

    return (
      <table>

        <TableBody movieData={movieData} />

      </table>
    )
  }
};




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


// const MovieListComponent = movies => {
//   return (
//       <ul>
//         {movies.map((movie, index) => (
//           <li key={movie.id}>
//             <p>{movie.title}</p>
//             <p>{movie.genre}</p>
//             <p>{movie.year}</p>
//           </li>
//         ))}
//       </ul>;
//     );
//   }

export default TableComponent;