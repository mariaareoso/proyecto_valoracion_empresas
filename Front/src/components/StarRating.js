import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../css/Star.css';

const StarRating = ({ update }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const updateRating = (value) => {
        setRating(value);
        update(value);
    }
    return (
        <div className="rating">
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1
                return (
                    <label key={i}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => updateRating(ratingValue)}
                        />
                        <FaStar
                            className="star"
                            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            size="2rem"
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default StarRating;
