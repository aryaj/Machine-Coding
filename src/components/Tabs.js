import React from 'react'
import QuestionHeader from './QuestionHeader'
import { useLocation } from 'react-router';

const Tabs = () => {
    const location = useLocation();
    const { questionTitle } = location.state || {}
    return (
        <div>
            <QuestionHeader questionTitle={questionTitle} />
        </div>
    )
}

export default Tabs