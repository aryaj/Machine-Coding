import React, { useRef, useState } from 'react'
import Toast from './Toast'

const ReactToasts = () => {

    const [toastList, setToastList] = useState([]);
    const timer = useRef({})

    const handleclose = (id) => {
        clearTimeout(timer[id]);
        setToastList(prev => prev.filter(elem => elem.id !== id));
    }

    const handleOnclick = (name) => {
        const id = new Date().getTime();
        setToastList(prev => [...prev, { id: id, type: name }]);
        timer.current[id] = setTimeout(() => handleclose(id), 3000)
    }



    return (
        <div className='container relative'>
            <button className='px-4 py-2 cursor-pointer rounded bg-gray-500 text-white hover:bg-gray-700 focus:bg-gray-700 transition duration-200 mr-2' type='button' onClick={() => handleOnclick('Success')}>Success Toast</button>
            <button className='px-4 py-2 cursor-pointer rounded bg-gray-500 text-white hover:bg-gray-700 focus:bg-gray-700 transition duration-200 mr-2' type='button' onClick={() => handleOnclick('Warning')}>Warning Toast</button>
            <button className='px-4 py-2 cursor-pointer rounded bg-gray-500 text-white hover:bg-gray-700 focus:bg-gray-700 transition duration-200 mr-2' type='button' onClick={() => handleOnclick('Error')}>Error Toast</button>
            <button className='px-4 py-2 cursor-pointer rounded bg-gray-500 text-white hover:bg-gray-700 focus:bg-gray-700 transition duration-200 mr-2' type='button' onClick={() => handleOnclick('Info')}>Info Toast</button>

            <div className='absolute right-0 overflow-hidden'>
                {toastList.map((elem) => {
                    return <Toast key={elem.id} id={elem.id} type={elem.type} handleclose={handleclose} />
                })}
            </div>

        </div>
    )
}

export default ReactToasts