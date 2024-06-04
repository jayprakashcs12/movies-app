import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../helpers/axiosInstance';
import { BsEraser, BsSend } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { toast } from 'react-toastify';

const index = () => {

    let navigate = useNavigate();
    let { id } = useParams();
    let [movieData, setMovieData] = useState({ mname: "", mposter: "", mlanguage: "", mgenre: "", mdesc: "", mrating: "" });

    let { mname, mposter, mlanguage, mgenre, mdesc, mrating } = movieData;

    let [movie, setMovie] = useState({});

    useEffect(() => {
        if (id) {
            axiosInstance.get(`movies/${id}`)
            .then((resp) => {
                setMovieData(resp.data);
            })
            .catch((err) => {
                console.error("Error fetching movie data:", err);
                toast.error("Failed to fetch movie data. Please try again later.");
            });
        }
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
        if (movie && movie.mname) { document.title = `Update ${movie.mname}`;}
    }, [id, movie]);

    let moviesData = (e) => {
        let { name, value } = e.target;
        setMovieData({ ...movieData, [name]: value });
    };

    let handleUpdate = (e) => {
        e.preventDefault();
        if (!mname || !mposter || !mlanguage || !mgenre || !mdesc || !mrating) {
            toast.error('Please fill all mandatory fields...!');
        } else {
            axiosInstance.put(`movies/${id}`, movieData, {
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ mname, mposter, mlanguage, mgenre, mdesc, mrating })
            })
            .then((resp) => {
                toast.info(`${mname} updated successfully...!`);
                navigate("/view-movies");
            })
            .catch((err) => {
                console.error("Error updating movie data:", err);
                toast.error("Failed to update movie data. Please try again later.");
            });
        }
    };

    let handleBack = () => {
        navigate(`/view-movies`);
    };

    let handleClear = (e) => {
        e.preventDefault();
        setMovieData({ mname: "", mposter: "", mlanguage: "", mgenre: "", mdesc: "", mrating: "" });
        toast.info("Input Fields Cleared Successfully...!");
    };

    return (
        <React.Fragment>
            <div className="view-div">
                <BiArrowBack className='act-btn post-btn' onClick={handleBack} />
            </div>
            <div className="pro-container">
                <h1 className="pro-head">{`Edit ${mname}`}</h1>
                <form>
                    <label className='pro-label' htmlFor="mname"> Movie Name </label>
                    <input type="text" className='pro-input' name="mname" value={mname} onChange={moviesData} placeholder='Enter Your Movie Name' />

                    <label className='pro-label' htmlFor="mposter"> Movie Poster </label>
                    <input type="text" className='pro-input' name="mposter" value={mposter} onChange={moviesData} placeholder='Enter Your Movie Poster' />

                    <label className='pro-label' htmlFor="mlanguage"> Movie Language </label>
                    <input type="text" className='pro-input' name="mlanguage" value={mlanguage} onChange={moviesData} placeholder='Enter Your Movie Language' />

                    <label className='pro-label' htmlFor="mgenre"> Movie Genre </label>
                    <input type="text" className='pro-input' name="mgenre" value={mgenre} onChange={moviesData} placeholder='Enter Your Movie Genre' />

                    <label className='pro-label' htmlFor="mdesc"> Movie Description </label>
                    <textarea type="text" className='pro-input pro-textarea' name="mdesc" value={mdesc} onChange={moviesData}
                        placeholder='Enter Your Movie Description'></textarea>

                    <label className='pro-label' htmlFor="mrating"> Movie Rating </label>
                    <select className='pro-select' name="mrating" value={mrating} onChange={moviesData}>
                        <option value=""> Select Movie Rating </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <div className="btn-div">
                        <BsSend className='act-btn post-btn' onClick={handleUpdate} />
                        <BsEraser className='act-btn reset-btn' onClick={handleClear} />
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default index;