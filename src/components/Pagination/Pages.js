import React from "react";

const Pages = ({ pageNo, setPageNo }) => {
    const handleNext = () => {
        setPageNo((prev) => prev + 1);
    };
    const handlePrev = () => {
        setPageNo((prev) => prev - 1);
    };

    const previousThreePages = Array.from({ length: 3 }, (_, index) => {
        return pageNo - 1 - index;
    })
        .filter((val) => val > 0)
        .reverse();

    const NextFourPages = Array.from({ length: 4 }, (_, index) => {
        return pageNo + index;
    });

    const setCurrent = (pageNo) => {
        setPageNo(pageNo);
    };

    console.log("previousThreePages", previousThreePages, NextFourPages);

    const pagesArr = [...previousThreePages, ...NextFourPages];

    return (
        <div className="paginationContainer flex justify-around mt-2">
            {pageNo > 1 && (
                <div
                    onClick={handlePrev}
                    className="pageBtn w-10 text-center bg-gray-600 text-white cursor-pointer"
                >
                    {"<"}
                </div>
            )}
            {pagesArr.map((page) => {
                return (
                    <div
                        onClick={() => setCurrent(page)}
                        className={`pageBtn w-10 text-center bg-gray-600  cursor-pointer ${page === pageNo ? 'bg-white text-gray border border-black' : 'text-white'}`}
                    >
                        {page}
                    </div>
                );
            })}

            <div
                onClick={handleNext}
                className="pageBtn w-10 text-center bg-gray-600 text-white cursor-pointer"
            >
                {">"}
            </div>
        </div>
    );
};

export default Pages;
