import React, { Component } from 'react'
import './profile.css'

import Feed from "../../components/feed/Feed"
import LeftSideBar from "../../components/leftSideBar/LeftSideBar"
import Navbar from "../../components/navbar/Navbar"
import RightSideBar from "../../components/rightSideBar/RightSideBar"

export default class Profile extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="profile">
                    <LeftSideBar />
                    <div className="profileRightSide">
                        <div className="profileRightTop">
                            <div className="profileCoverContainer">
                                <img className='profileCoverImage' src="/assets/me.jpg" width="50px" alt="" />
                                <img className='profileUserImage' src="/assets/me.jpg" width="50px" alt="" />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">Abrar Hussain</h4>
                                <span className="profileInfoDesc">Abrar Hussain description</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feed />
                            <RightSideBar profile/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
