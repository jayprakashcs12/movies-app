import React, { useEffect } from 'react'

const index = () => {

    useEffect(()=> {
        document.title = "View Movies";
    })

    return (
        
        <div>
            <h1 className="pro-head">View Movies</h1>
        </div>
    )
}

export default index;