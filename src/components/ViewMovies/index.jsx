import React, { useEffect, useState } from 'react';
import axiosInstance from '../../helpers/axiosInstance';
import StarRating from '../StarRating';

const index = () => {

    let [movies, setMovies] = useState([]);

    useEffect(() => {
        document.title = "Views Movie";
        axiosInstance.get("movies.json")
            .then(resp => {
                console.log(resp.data, "movies data");
                setMovies(resp.data);
            })
            .catch(err => console.error('Error fetching movies:', err));
    }, []);

    return (
        <React.Fragment>
            <h1 className="pro-head">View Movies</h1>
            <div className="page-content">
                {Object.keys(movies).map(movieId => (
                    <div className="flip" key={movieId}>
                        <div className="front" style={{ backgroundImage: `url(${movies[movieId].mposter})` }}>
                            <h1 className="text-shadow">{movies[movieId].mname}</h1>
                        </div>
                        <div className="back">
                            <h2 className="movie-title">{movies[movieId].mname}</h2>
                            <p className="movie-genre">{movies[movieId].mlanguage}</p>
                            <p className="movie-genre">{movies[movieId].mgenre}</p>
                            <p className="movie-description">{movies[movieId].mdesc}</p>
                            <StarRating mrating={movies[movieId].mrating} />
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default index;