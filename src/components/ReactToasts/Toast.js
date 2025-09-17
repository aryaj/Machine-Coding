import React, { useEffect, useState } from "react";

const Toast = ({ id, type, handleclose }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, [id, handleclose]);

    const backgroundColor = type === "Success"
        ? "bg-green-500"
        : type === 'Error'
            ? "bg-red-500"
            : type === 'Info'
                ? "bg-blue-500"
                : "bg-yellow-500"
    return (
        <div
            className={`${backgroundColor} mb-2 px-20 py-2 rounded-sm relative text-white transform ${visible ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-500 ease-in-out`}
        >
            {type}
            <span className="absolute right-2 top-1 text-sm cursor-pointer" onClick={handleclose}>X</span>
        </div>
    );
};

export default Toast;
