import React, { Component } from 'react'
import "./onlinefriends.css"
export default class OnlineFriends extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='onlineFriendListContainer'>
                <ul className="onlineFriendList">
                    <li className='onlineFriend'>
                        <div className="onlineFriendProfileImageContainer">
                            <img className='onlineFriendProfileImage' width="32px" src={this.props.user.profileImage} alt="" />
                            <span className="online"></span>
                        </div>
                        <span className="onlineUserName">{this.props.user.username}</span>
                    </li>
                </ul>
            </div>
        )
    }
}
