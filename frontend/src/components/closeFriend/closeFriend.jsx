import React, { Component } from 'react'
import "./closefriend.css"

export default class CloseFriend extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }
    render() {
        return (
            <li className="leftSideBarFriend">
                <img className="leftSideBarFriendImage" src={this.props.user.profileImage} alt="" />
                <span className="leftSideBarFriendName">{this.props.user.username}</span>
            </li>
        )
    }
}
