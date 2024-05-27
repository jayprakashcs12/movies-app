import React, { useEffect, useState } from 'react';
import axiosInstance from '../../helpers/axiosInstance';

const index = () => {

    let [movies, setMovies] = useState([]);
    let [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        document.title = "Views Movie";
        axiosInstance.get("movies")
        .then(resp => setMovies(resp.data))
        .catch(err => console.error('Error fetching movies:', err));
    }, []);

    return (
        <>
            <h1 className="pro-head">View Movies</h1>
            <div className="movie-container">
                {movies.map(movie => (
                    <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <img src={movie.mposter} alt="Descriptive Text" className="movie-img" />
                        {isHovered && (
                            <div className="content">
                                <h2 className="movie-title">{movie.mname}</h2>
                                <p className="movie-genre">{movie.mgenre}</p>
                                <p className="movie-description">{movie.mdesc}</p>
                                <p className="movie-rating">Rating: {movie.mrating}/5</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default index;