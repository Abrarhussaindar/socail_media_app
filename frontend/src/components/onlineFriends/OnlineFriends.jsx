import { useEffect, useState } from "react"
import "./onlinefriends.css"
import axios from "axios"



export default function OnlineFriends(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const user_id = props.user
    
    const [users, setUser] = useState({})
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?id=${user_id}`);
            setUser(res.data);
        };
        fetchUser();
    }, [user_id]);
    
    const activeHandler = () => {
        if(users.isOnline){
            document.querySelector('.activeIndicator').classList.add("online")
        }else{
            document.querySelector('.activeIndicator').classList.add("offline")
        }
    }
    return (
        <div className='onlineFriendListContainer'>
            <ul className="onlineFriendList">
                <li className='onlineFriend'>
                    <div className="onlineFriendProfileImageContainer">
                        <img className='onlineFriendProfileImage' width="32px" src={users.profilePicture ? PF+users.profilePicture : PF+"noAvatar.png"} alt="" />
                        <span className="activeIndicator" onLoad={activeHandler}></span>
                    </div>
                    <span className="onlineUserName">{users.username}</span>
                </li>
            </ul>
        </div>
    )
    

}
