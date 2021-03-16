import RemoveMovie from './RemoveMovie';

const MovieForm = () =>{
    return(
    <div className="row mb-5">   
        <div className="col-12">
         <hr></hr>
            <div className="text-center mt-4">
                <h3 className="text-muted">Movie Form</h3>
            </div>
            <form action='submit' id='movie-form' className="col-8 offset-2" onsubmit=''>
                <div className="form-group">
                        <label htmlFor="movieTitle">Movie Title </label>
                        <input
                                type="text"
                                id="movieTitle"
                                className="form-control"
                                onChange=""
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
                                    onChange=""
                                />
                            </div>
                            <div className='col'>
                                <label htmlFor="year">Year</label>
                                <input
                                    type="number"
                                    id="year"
                                    className="form-control"
                                    onChange=""
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
                                onChange=""
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
                                onChange=""
                        />
                        </div>
                    </div>
                <div className="form-row">
                    <button className="col-4 offset-4 mb-2 btn btn-info">Save Movie</button>                     
                </div>
            </form>
        </div>
    </div>
    );
};

export default MovieForm;
