import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="navContainer">
            <div className="navLeftSide">
                <Link to="/" className="logoLink">
                    <span className="navLogo">
                        Social Media App
                    </span>
                </Link>
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
                <Link to={`profile/${user._id}`} style={{textDecoration: 'none'}}>
                    <img src={user.profilePicture ? PF + user.profilePicture : PF+"noAvatar.png"} alt="img"/>
                </Link>
                </div>
            </div>
        </div>
    )
}

