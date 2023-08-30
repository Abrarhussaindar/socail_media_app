
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user/${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        document.querySelector('.postBottomLeftSideThumbIcon').style.color = isLiked ? 'black' : '#0585ca'
        document.querySelector('.postBottomLeftSideHeartIcon').style.color = isLiked ? 'black' : '#d41919'
        setIsLiked(!isLiked)
    }
    return (
        <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeftSide">
                    <Link to={`profile/${user.username}`} style={{textDecoration: 'none'}}>
                    <img className="postProfileImg" src={user.profilePicture} alt="" />
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{post.createdAt}</span>
                </div>
                <div className="postTopRightSide">
                    <MoreVertIcon className='postTopRigtSideIcon' />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.image} alt="post_img" className="postImage" />
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

