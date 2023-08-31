import React, { useEffect, useState } from 'react'
import './profile.css'

import Feed from "../../components/feed/Feed"
import LeftSideBar from "../../components/leftSideBar/LeftSideBar"
import Navbar from "../../components/navbar/Navbar"
import RightSideBar from "../../components/rightSideBar/RightSideBar"
import axios from 'axios'
import { useParams } from 'react-router'
    
export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({})

    const username = useParams().username;

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?id=${username}`);

            setUser(res.data);
        };
        fetchUser();
    }, [username]);
    return (
        <div>
            <Navbar />
            <div className="profile">
                <LeftSideBar />
                <div className="profileRightSide">
                    <div className="profileRightTop">
                        <div className="profileCoverContainer">
                            <img className='profileCoverImage' src={user.coverPicture ? PF+user.coverPicture : PF+"cover.jpg"} alt="" />
                            <img className='profileUserImage' src={user.profilePicture ? PF+user.profilePicture : PF+"noAvatar.png"} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={user.username}/>
                        <RightSideBar user={user}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


