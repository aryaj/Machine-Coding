import React from 'react'
import { useLocation } from 'react-router'
import QuestionHeader from './QuestionHeader';

const ProgressBar = () => {
    const location = useLocation();
    const { questionTitle } = location.state || {}
    return (
        <div>
            <QuestionHeader questionTitle={questionTitle} />
        </div>
    )
}

export default ProgressBar