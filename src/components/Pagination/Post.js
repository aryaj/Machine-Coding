import React, { useEffect, useState } from "react";
import Pages from "./Pages";
import axios from "axios";

const Post = () => {
    const [data, setData] = useState([]);
    const [pageNo, setPageNo] = useState(4);

    useEffect(() => {
        axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`).then(res => setData(res.data))
    }, [pageNo])

    return (
        <div className="container">
            I am a post
            <div className="postContainer w-50 flex justify-between space-x-2">
                {
                    data.map((item, index) => {
                        return <img src={item.download_url} />
                    })
                }

            </div>
            <Pages pageNo={pageNo} setPageNo={setPageNo} />
        </div>
    );
};

export default Post;
