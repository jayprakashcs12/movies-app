import React, { useEffect, useState } from 'react';
import axiosInstance from '../../helpers/axiosInstance';
import { IoEyeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { BsPencil } from "react-icons/bs";
import { GoTrash } from "react-icons/go";
import StarRating from '../StarRating';
import { toast } from 'react-toastify';

const index = () => {
    let [movies, setMovies] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        document.title = "Views Movie";
        let fetchData = async () => {
            try {
                let { data } = await axiosInstance.get("movies");
                setMovies(data);
            } catch (error) {
                console.error("Error fetching the movies:", error);
            }
        };
        fetchData();
    }, []);

    let handleUpdate = (id) => {
        navigate(`/update-movie/${id}`);
    };

    let handleView = (id) => {
        navigate(`/view-movie/${id}`);
    };

    let handleDelete = async (id, mname) => {
        try {
            await axiosInstance.delete(`/movies/${id}`);
            toast.error(`${mname} Deleted Successfully...!`);
            setMovies(movies.filter(x => x.id !== id));
        } catch (error) {
            toast.error("Failed to remove item");
            console.error("Error deleting the movie:", error);
        }
    }

    return (
        <React.Fragment>
            <h1 className="pro-head">View Movies</h1>
            <div className="page-content">
                {movies.map((x) => (
                    <div className="main-div" key={x.id}>
                        <div className="child-div">
                            <img src={x.mposter} alt={x.mname} className='movie-img' />
                            <h1 className="text-shadow">{x.mname}</h1>
                            <p className="movie-language">{x.mlanguage}</p>
                            <p className="movie-genre">{x.mgenre}</p>
                            <StarRating mrating={x.mrating} />
                            <div className="btn-div">
                                <button className='act-btn post-btn' onClick={() => handleView(x.id)}> <IoEyeOutline className='act-btn' /> </button>
                                <button className='act-btn post-btn' onClick={() => handleUpdate(x.id)}> <BsPencil className='act-btn' /> </button>
                                <button className='act-btn reset-btn' onClick={() => handleDelete(x.id, x.mname)}> <GoTrash className='act-btn' /> </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default index;