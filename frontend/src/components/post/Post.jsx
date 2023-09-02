
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import { AuthContext } from '../../context/AuthContext';

export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const {user: currentUser} = useContext(AuthContext);
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?id=${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const likeHandler = () => {
        try{
            axios.put('/posts/'+post._id+'/like', {userId: currentUser._id})
        }catch(err){
            console.log(err) 
        }
        setLike(isLiked ? like-1 : like+1)
        document.querySelector('.postBottomLeftSideThumbIcon').style.color = isLiked ? 'black' : "#0585ca"
        document.querySelector('.postBottomLeftSideHeartIcon').style.color = isLiked ? 'black' : "#d41919"
        setIsLiked(!isLiked)
    }
    const handleDeletePost = async () => {
        try{
            await axios.delete('/posts/'+post._id, {data: {userId: currentUser._id}})
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeftSide">
                    <Link to={`profile/${user._id}`} style={{textDecoration: 'none'}}>
                        <img className="postProfileImg" src={user.profilePicture 
                        ? PF+user.profilePicture
                        : PF+'noAvatar.png' 
                        } alt="" />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRightSide">
                    <MoreVertIcon className='postTopRigtSideIcon' onClick={handleDeletePost}/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.image ? PF+post.image : "."} alt="post_img" className="postImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeftSide">
                    <ThumbUpIcon onClick={likeHandler} className='postBottomLeftSideThumbIcon' />
                    <FavoriteIcon onClick={likeHandler} className='postBottomLeftSideHeartIcon' />
                    <span className="postLikeCounter">{like} People like it...</span>
                </div>
                <div className="postBottomRightSide">
                    <span className="postCommentText">{post.comments.length} Comments</span>
                </div>
            </div>
        </div>
    </div>
    )
}

