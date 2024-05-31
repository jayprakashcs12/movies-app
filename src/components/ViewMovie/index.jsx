import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../helpers/axiosInstance';
import { BiArrowBack } from "react-icons/bi";
import { BsPencil } from 'react-icons/bs';
import StarRating from '../StarRating';

const index = () => {

    let { id } = useParams();
    let navigate = useNavigate();
    let [movie, setMovie] = useState({});

    useEffect(() => {
        let fetchData = async () => {
            try {
                let { data } = await axiosInstance.get(`/movies/${id}`);
                console.log(data);
                setMovie(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
        if (movie && movie.mname) { document.title = movie.mname; }
    }, [id, movie]);

    let handleBack = () => {
        navigate(`/view-movies`);
    };

    let handleUpdate = (id) => {
        navigate(`/update-movie/${id}`);
    };

    return (

        <React.Fragment>
            <div className="view-div gap-div">
                <BiArrowBack className='act-btn post-btn' onClick={handleBack} />
            </div>
            <div className="movie-content">
                <div className="main-div">
                    <div className="child-div">
                        <img src={movie.mposter} alt={movie.mname} className='movie-img' />
                        <h1 className="text-shadow">{movie.mname}</h1>
                        <p className="movie-desc">{movie.mlanguage}</p>
                        <p className="movie-desc">{movie.mgenre}</p>
                        <p className="movie-desc">{movie.mdesc}</p>
                        <StarRating mrating={movie.mrating} />
                        <div className="btn-div">
                            <BsPencil className='act-btn post-btn' onClick={() => handleUpdate(movie.id)} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default index;