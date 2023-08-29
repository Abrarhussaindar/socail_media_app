import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';

import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
        }
    }

    render() {
        return (
            <div className="navContainer">
                <div className="navLeftSide">
                    <div className="navLogo">
                        Social Media App
                    </div>
                </div>
                <div className="navCenter">
                    <div className="navSearchBar">
                        <span className="searchbarIcon">
                            <SearchIcon className="searchIcon" />
                        </span>
                        <input type="text" className="navSearchInput" placeholder="Search for People, Post or Video" />
                        
                    </div>
                </div>
                <div className="navRightSide">
                    <div className="navLinks">
                        <span className="navLink">Home</span>
                        <span className="navLink">Timeline</span>
                    </div>
                    <div className="navIcons">
                        <div className="navIconItem">
                            <PersonIcon />
                            <span className="navIconBadge">1</span>
                        </div>
                        <div className="navIconItem">
                            <ChatBubbleIcon />
                            <span className="navIconBadge">2</span>
                        </div>
                        <div className="navIconItem">
                            <NotificationsIcon />
                            <span className="navIconBadge">1</span>
                        </div>
                        
                    </div>
                    <div className="navUserImg">
                        <img src="/assets/me.jpg" alt="userimg" />
                    </div>
                </div>
            </div>
        )
    }
}


