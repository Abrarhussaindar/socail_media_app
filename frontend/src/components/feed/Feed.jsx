import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from "react";
import axios from "axios";


export default function Feed({username}) {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = username 
            ? await axios.get("/posts/profile/"+ username)
            : await axios.get("/posts/timeline/64ee1e6a3c4b0c61e684ea7e");

            setPost(res.data);
        };
        fetchPost();
    }, [username]);
    return (
        <div className='feedContainer'>
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}
