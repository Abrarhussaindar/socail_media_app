import React, { Component } from 'react'
import "./rightsidebar.css"
import CakeIcon from '@mui/icons-material/Cake';
import OnlineFriends from '../onlineFriends/OnlineFriends';
import { Users } from '../../dummyData';

export default class RightSideBar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }

    HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <CakeIcon className="birthdayIcon" />
                    <span className="birthdayText">
                        <b>Abrar Hussain</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="assets/me.jpg" alt="" className="rightSideBarAd" />
                <div className="onlineContainer">
                    <h4 className="onlineContainerTitleText">Online Friends</h4>
                    {Users.map((u) => (<OnlineFriends key={u.id} user={u} />))}
                </div>
            </>
        )
    }
    ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightBarTitle">User Information :</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">City: </span>
                        <span className="rightBarInfoValue">Srinagar</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From: </span>
                        <span className="rightBarInfoValue">Hawal</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Relationship: </span>
                        <span className="rightBarInfoValue">Single</span>
                    </div>
                </div>

                <h4 className="rightBarTitle">User Friends</h4>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img src="/assets/me.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Abrar Hussain</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/assets/me.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Abrar Hussain</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/assets/me.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Abrar Hussain</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/assets/me.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Abrar Hussain</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/assets/me.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Abrar Hussain</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src="/assets/me.jpg" alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Abrar Hussain</span>
                    </div>
                </div>
            </>
        )
    }

    render() {
        return (
            <div className='rightSideBarContainer'>
                <div className="rightSideBarWrapper">
                    <this.ProfileRightBar />
                </div>
            </div>
        )
    }
}
