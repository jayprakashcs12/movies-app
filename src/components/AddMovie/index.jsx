import React, { useEffect } from 'react';
import axiosInstance from '../../helpers/axiosInstance';

const index = () => {

    useEffect(()=> {
        document.title = "Add Movie";
    })

    return (
        
        <div className="pro-container">
            <h1 className="pro-head">Add Movie</h1>
            <form action="" method='post'>
                <label className='pro-label' htmlFor="mname"> Movie Name </label>
                <input type="text" className='pro-input' placeholder='Enter Your Movie Name' />

                <label className='pro-label' htmlFor="mposter"> Movie Poster </label>
                <input type="text" className='pro-input' placeholder='Enter Your Movie Poster' />

                <label className='pro-label' htmlFor="mlanguage"> Movie Language </label>
                <input type="text" className='pro-input' placeholder='Enter Your Movie Language' />

                <label className='pro-label' htmlFor="menre"> Movie Genre </label>
                <input type="text" className='pro-input' placeholder='Enter Your Movie Genre' />

                <label className='pro-label' htmlFor="mdesc"> Movie Description </label>
                <input type="text" className='pro-input' placeholder='Enter Your Movie Description' />

                <label className='pro-label' htmlFor="mrating"> Movie Rating </label>
                <select className='pro-select' name="mrating" id="">
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