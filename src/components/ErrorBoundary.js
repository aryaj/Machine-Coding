import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorBoundary = () => {
    const error = useRouteError();
    console.log("error", error);
    return (
        <div className="container mx-auto px-4 max-w-full py-8 text-gray-700 text-center">
            <h1>Oops! Something went wrong</h1>
            <p>{error.statusText || error.message}</p>
            <Link to={'/'}
                className="py-2 px-5 my-2 rounded-lg border border border-gray-500 sborder-2 text-gray cursor-pointer"
            >
                Home
            </Link>
        </div>
    );
};

export default ErrorBoundary;
