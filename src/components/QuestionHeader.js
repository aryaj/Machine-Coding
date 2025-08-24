import React from 'react'

const QuestionHeader = ({ questionTitle }) => {
    return (
        <div className='container mx-auto px-4 max-w-full text-center py-8 shadow-lg'>
            <h1 className='font-weight: 900 text-lg text-gray-900'>{questionTitle}</h1>
        </div>
    )
}

export default QuestionHeader