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
                {Object.keys(movies).map(i => (
                    <div className="flip" key={i}>
                        <div className="front">
                            <img src={movies[i].mposter} alt={movies[i].mposter} className='movie-img' />
                            <h1 className="text-shadow">{movies[i].mname}</h1>
                            <p className="movie-genre">{movies[i].mlanguage}</p>
                            <p className="movie-genre">{movies[i].mgenre}</p>
                            <p className="movie-description">{movies[i].mdesc}</p>
                            <StarRating mrating={movies[i].mrating} />
                            <div className="btn-div">
                                <button className='act-btn post-btn'>UPDATE</button>
                                <button className='act-btn reset-btn'>DELETE</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default index;