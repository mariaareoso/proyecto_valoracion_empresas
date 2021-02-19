import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../css/Star.css';

const StarRating = (props) => {
    const [rating, setRating] = useState(null);
    return (
        <div className="rating">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return (
                    <label key={i}>
                        <input className="inputStar" type="radio" name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= (props.children || rating) ? '#ffc107' : '#e4e5e9'}
                            size="2rem"
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
