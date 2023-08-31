import React, { useEffect, useState } from 'react'
import "./userfriends.css"
import axios from 'axios';

export default function UserFriends(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [users, setUser] = useState({})

    const id = props.user;
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?id=${id}`);
            setUser(res.data);
        };
        fetchUser();
    }, [id]);
    return (
        <div className="rightBarFollowing">
            <img src={users.profilePicture ? PF+users.profilePicture : PF+"noAvatar.png"} alt="" className="rightBarFollowingImg" />
            <span className="rightBarFollowingName">{users.username}</span>
        </div>
    )
}
