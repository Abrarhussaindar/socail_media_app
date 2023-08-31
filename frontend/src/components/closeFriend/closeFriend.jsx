import { useEffect, useState } from "react"
import "./closefriend.css"
import axios from "axios"
import { Link } from "react-router-dom"

export default function CloseFriend(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const userid = props.user
    
    const [users, setUser] = useState({})
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?id=${userid}`);
            setUser(res.data);
        };
        fetchUser();
    }, [userid]);
    return (
        <li className="leftSideBarFriend">
            <Link to={`profile/${users._id}`} style={{textDecoration: 'none', display: "flex",color: "black", alignItems: "center"}}>
                <img className="leftSideBarFriendImage" src={users.profilePicture ? PF+users.profilePicture : PF+"noAvatar.png"} alt="" />
                <span className="leftSideBarFriendName">{users.username}</span>
            </Link>
        </li>
    )
}
