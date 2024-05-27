import React, { useEffect, useState } from 'react';
import axiosInstance from '../../helpers/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const index = () => {

    useEffect(()=> {
        document.title = "Add Movie";
    })

    let navigate = useNavigate();
    let [userData, setUserData] = useState({ mname : "", mposter : "", mlanguage : "", mgenre : "", mdesc : "", mrating : "" });

    let data = (e) => {
        setUserData({...userData, [e.target.name] : e.target.value})
    }

    let handleSave = (e) => {
        e.preventDefault();
        let payload = userData;
        console.log(payload, "payload");
        try {
            axiosInstance.post("movies", payload);
            toast.success(`${userData.mname} saved successfully...!`);
            navigate("/view-movies");
        } 
        catch(err) {
            console.log(err);
            toast.error(`${userData.mname} not saved successfully...!`);
        }
    }

    return (
        
        <div className="pro-container">
            <h1 className="pro-head">Add Movie</h1>
            <form action="" onSubmit={handleSave}>
                <label className='pro-label' htmlFor="mname"> Movie Name </label>
                <input type="text" className='pro-input' name="mname" onChange={data} placeholder='Enter Your Movie Name' />

                <label className='pro-label' htmlFor="mposter"> Movie Poster </label>
                <input type="text" className='pro-input' name="mposter" onChange={data} placeholder='Enter Your Movie Poster' />

                <label className='pro-label' htmlFor="mlanguage"> Movie Language </label>
                <input type="text" className='pro-input' name="mlanguage" onChange={data} placeholder='Enter Your Movie Language' />

                <label className='pro-label' htmlFor="mgenre"> Movie Genre </label>
                <input type="text" className='pro-input' name="mgenre" onChange={data} placeholder='Enter Your Movie Genre' />

                <label className='pro-label' htmlFor="mdesc"> Movie Description </label>
                <input type="text" className='pro-input' name="mdesc" onChange={data} placeholder='Enter Your Movie Description' />

                <label className='pro-label' htmlFor="mrating"> Movie Rating </label>
                <select className='pro-select' name="mrating" onChange={data}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <div className="btn-div">
                    <button className='act-btn post-btn'>Submit</button>
                    <button className='act-btn reset-btn'>Clear</button>
                </div>
            </form>
        </div>
    )
}

export default index;