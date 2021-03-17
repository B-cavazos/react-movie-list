import moviesList from './movieList'

const TableComponent = () =>{

    const showDetails = (movieId) =>{
        let foundMovie = moviesList.find(movies => movies.id === movieId);
        alert(`${foundMovie.title}: ${foundMovie.details}`);
    };
  
    return(
        <div className='row'>
            <div className='col'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Year</th>
                            <th>Image</th>
                            <th>Movie Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {moviesList.map(movieData=>{
                            return(
                                <tr key={movieData.id}>
                                    <td>{movieData.id}</td>
                                    <td>{movieData.title}</td>
                                    <td>{movieData.genre}</td>
                                    <td>{movieData.year}</td>
                                    <td>
                                        <a href={movieData.imdbLink} target="blank">
                                            <img src={movieData.movieImage} alt={movieData.name}/>
                                        </a>
                                    </td>
                                    <td>
                                        <button className='btn btn-success' onClick={()=>showDetails(movieData.id)}>Description</button>
                                    </td>
                                </tr> 
                            );
                        }    
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
  
  };

  export default TableComponent;