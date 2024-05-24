import React, { useEffect } from 'react'

const index = () => {

    useEffect(()=> {
        document.title = "Home";
    })

    return (

        <div>
            <h1 className="pro-head">Home</h1>
        </div>
    )
}

export default index;