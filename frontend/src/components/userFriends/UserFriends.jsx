import { Link } from "react-router-dom";
import "./userfriends.css"

export default function UserFriends(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="rightBarFollowing">
            <Link to={"/profile/"+props.user._id} style={{textDecoration: 'none', color: 'black'}}>
                <img src={props.user.profilePicture ? PF+props.user.profilePicture : PF+"noAvatar.png"} alt="" className="rightBarFollowingImg" />
                <span className="rightBarFollowingName">{props.user.username}</span>
            </Link>
        </div>
    )
}
