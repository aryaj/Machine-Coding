import React, { useEffect, useRef } from "react";
import { STATUS } from "../constants";

const Checkbox = ({ id, label, status, handleChange }) => {
    const checkboxRef = useRef();

    useEffect(() => {
        if (status === STATUS.INDETERMINATE) {
            checkboxRef.current.indeterminate = true;
        } else {
            checkboxRef.current.indeterminate = false;
        }
    }, [status]);

    return (
        <div>
            <input
                ref={checkboxRef}
                type="checkbox"
                id={id}
                checked={status === STATUS.CHECKED}
                onChange={() => handleChange(id)}
            />
            <label className="pl-1 cursor-pointer" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
