import React, { useEffect, useState } from 'react'
import './profile.css'

import Feed from "../../components/feed/Feed"
import LeftSideBar from "../../components/leftSideBar/LeftSideBar"
import Navbar from "../../components/navbar/Navbar"
import RightSideBar from "../../components/rightSideBar/RightSideBar"
import axios from 'axios'
import { useParams } from 'react-router'
    
export default function Profile() {

    const [user, setUser] = useState({})
    const username = useParams().username;
    
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/user?username=${username}`);
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
                            <img className='profileCoverImage' src={user.coverPicture} alt="" />
                            <img className='profileUserImage' src={user.profilePicture} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username}/>
                        <RightSideBar user={user}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


