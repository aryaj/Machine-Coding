import React, { useState } from "react";

const StarRating = () => {
    const startCount = 10;
    const [selectedRating, setSelectedRating] = useState(null);
    const [hoverValue, setHoverValue] = useState(0);
    console.log(("selectedRating", selectedRating));
    return (
        <div className="flex justify-center items-center min-h-full">
            {new Array(startCount).fill(0).map((elem, index) => {
                return (
                    <span
                        key={index}
                        className={`text-5xl cursor-pointer ${(hoverValue === 0 && index < selectedRating) || index < hoverValue ? 'text-yellow-500' : ''}`}
                        onClick={() => setSelectedRating(index + 1)}
                        onMouseEnter={() => setHoverValue(index + 1)}
                        onMouseLeave={() => setHoverValue(0)}
                    >
                        &#9733;
                    </span>
                );
            })}
        </div>
    );
};

export default StarRating;
