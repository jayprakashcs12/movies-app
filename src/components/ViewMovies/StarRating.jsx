import React from 'react';

const StarRating = ({ mrating }) => {

    let stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= mrating) {
            stars.push(<span key={i} className="star filled">★</span>);
        } else {
            stars.push(<span key={i} className="star">☆</span>);
        }
    }

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;