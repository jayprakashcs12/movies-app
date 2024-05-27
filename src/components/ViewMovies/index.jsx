import React, { useEffect, useState } from 'react';
import axiosInstance from '../../helpers/axiosInstance';

const index = () => {

    let [movies, setMovies] = useState([]);

    useEffect(() => {
        document.title = "Views Movie";
        axiosInstance.get("movies")
        .then(resp => setMovies(resp.data))
        .catch(err => console.error('Error fetching movies:', err));
    }, []);

    return (
        <React.Fragment>
            <h1 className="pro-head">View Movies</h1>
            <div className="page-content">
                {movies.map((movie, i) => (
                    <div className="flip" key={i}>
                        <div className="front" style={{ backgroundImage: `url(${movie.mposter})` }}>
                            <h1 className="text-shadow">{movie.mname}</h1>
                        </div>
                        <div className="back">
                            <h2 className="movie-title">{movie.mname}</h2>
                            <p className="movie-genre">{movie.mlanguage}</p>
                            <p className="movie-genre">{movie.mgenre}</p>
                            <p className="movie-description">{movie.mdesc}</p>
                            <p className="movie-rating"> {movie.mrating}/5</p>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default index;