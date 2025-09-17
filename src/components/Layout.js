import React from 'react'
import QuestionHeader from './QuestionHeader'
import { Outlet, useMatches } from 'react-router';

const Layout = () => {
    const matches = useMatches();
    // Find the last matched route with a title
    const currentRoute = matches.find(elem => elem.handle && elem.handle.title);
    console.log("currentRoute", currentRoute)
    console.log("matches", matches)
    return (
        <div>
            {
                currentRoute?.handle?.title && <QuestionHeader questionTitle={currentRoute?.handle?.title} />
            }
            <div className='p-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout