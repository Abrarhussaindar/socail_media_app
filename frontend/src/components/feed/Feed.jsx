import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from "react";
import axios from "axios";



export default function Feed(props) {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        const fetchPost = async () => {
            const res = props.username
            ? await axios.get("/posts/profile/"+ props.username)
            : await axios.get("/posts/timeline/64ee1e6a3c4b0c61e684ea7e");

            setPost(res.data);
        };
        fetchPost();
    }, [props.username]);

    const TimelineTitle = () => {
        return (
            <div className="timelineHeadtitle">
                <h3 className="tt">{props.username}'s Timeline : </h3>
            </div>
        )
    }
    return (
        <div className='feedContainer'>
            <div className="feedWrapper">
                {props.username ? <TimelineTitle /> : <Share />}
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}
