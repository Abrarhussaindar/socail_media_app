
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({post}) {
    const [like, setLike] = useState(post.likes)
    const [isLiked, setIsLiked] = useState(false)

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
                    <img className="postProfileImg" src={Users.filter((u) => u.id === post.user_id)[0].profileImage} alt="" />
                    <span className="postUsername">{Users.filter((u) => u.id === post.user_id)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRightSide">
                    <MoreVertIcon className='postTopRigtSideIcon' />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="post_img" className="postImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeftSide">
                    <ThumbUpIcon onClick={likeHandler} className='postBottomLeftSideThumbIcon' />
                    <FavoriteIcon onClick={likeHandler} className='postBottomLeftSideHeartIcon' />
                    <span className="postLikeCounter">{like} People like it...</span>
                </div>
                <div className="postBottomRightSide">
                    <span className="postCommentText">{post.comments} Comments</span>
                </div>
            </div>
        </div>
    </div>
    )
}

