import {useState} from 'react';

const MovieForm = ({ addMovie }) =>{
    const[movieTitle,setTitle]=useState();
    const[movieGenre,setGenre]=useState();
    const[movieYear,setYear]=useState();
    const[movieImage,setMovieImage]=useState();
    const[movieImdb,setImdb]=useState();
    const[movieDetails,setDetails]=useState();

    const handleSubmit = event => {
        event.preventDefault();

        let newMovie = {
            title: movieTitle,
            genre: movieGenre,
            year: movieYear,
            movieImage: movieImage,
            imdbLink: movieImdb,
            details: movieDetails,
        };
        console.log(newMovie);
        addMovie(newMovie);

    };

    return(
    <div className="row mb-5">   
        <div className="col-12">
         <hr></hr>
            <div className="text-center mt-4">
                <h3 className="text-muted">Movie Form</h3>
            </div>
            <form action='submit' id='movie-form' className="col-8 offset-2" onSubmit={handleSubmit}>
                <div className="form-group">
                        <label htmlFor="movieTitle">Movie Title </label>
                        <input
                                type="text"
                                id="movieTitle"
                                className="form-control"
                                onChange={setTitle}
                            />
                    </div>
                <div className="form-group">                    
                        <div className="form-row">
                            <div className='col'>
                                <label htmlFor="genre">Genre</label>
                                <input
                                    type="text"
                                    id="Genre"
                                    className="form-control"
                                    onChange={setGenre}
                                />
                            </div>
                            <div className='col'>
                                <label htmlFor="year">Year</label>
                                <input
                                    type="number"
                                    id="year"
                                    className="form-control"
                                    onChange={setYear}
                                />
                            </div>
                        </div>
                    </div>
                <div className="form-group">                    
                            <div className="form-row">
                            <label htmlFor="imageLink">Image Link</label>
                            <input
                                type="text"
                                id="imageLink"
                                className="form-control"
                                onChange={setMovieImage}
                            />
                            </div>
                        </div>
                <div className="form-group">
                        <div className="form-row">
                        <label htmlFor="movieDescription">Movie Description</label>
                        <textarea
                            type="text"
                            id="movieDescription"
                            className="form-control"
                            onChange={setDetails}
                        />
                        </div>
                    </div>
                <div className="form-row">
                    <button className="col-4 offset-4 mb-2 btn btn-info">Save Movie</button>                     
                </div>
                <div className="form-row">
                    <button className="col-4 offset-4 btn btn-outline-danger">Remove Movie</button>                     
                </div>
            </form>
        </div>
    </div>
    );
};

export default MovieForm;
