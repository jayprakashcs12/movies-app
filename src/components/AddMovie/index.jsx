import React, { useEffect } from 'react'

const index = () => {

    useEffect(()=> {
        document.title = "Add Movie";
    })

    return (
        
        <div>
            <h1 className="pro-head">Add Movie</h1>
        </div>
    )
}

export default index;