import './movieList'

// const RemoveMovie = movieId => {
//     movies = movies.filter(movie => {
//         return movie.id !== movieId;
//     });

// };


// const RemoveMovie = this.state.movies.map((movie) =>
//   <RemoveMovie name={movie.title} key={movie.id} onClick={(e) => this.deleteButtonClick(movie.id)} />
// );



const listReducer = (state, action) => {
    switch (action.type) {
      case 'REMOVE_ITEM':
        return state.filter((movie) => movie.id !== action.id);
      default:
        throw new Error();
    }
  };




export default listReducer;