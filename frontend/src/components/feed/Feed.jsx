import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";



export default function Feed(props) {
    const [posts, setPost] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
        const fetchPost = async () => {
            const res = props.username
            ? await axios.get("/posts/profile/"+ props.username)
            : await axios.get("/posts/timeline/"+user._id);

            setPost(res.data);
        };
        fetchPost();
    }, [props.username, user._id]);

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
