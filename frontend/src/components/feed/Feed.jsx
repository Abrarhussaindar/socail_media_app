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

            setPost(res.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        };
        fetchPost();
    }, [props.username, user._id]);

    return (
        <div className='feedContainer'>
            <div className="feedWrapper">
                {props.username ? <p className="tt">{props.username}'s Timeline : </p>  : <Share />}
                {posts.map((p) => (
                    <Post key={p._id} post={p} />
                ))}
            </div>
        </div>
    )
}
