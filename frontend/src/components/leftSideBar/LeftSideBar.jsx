import "./leftsidebar.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

import CloseFriend from "../closeFriend/closeFriend";
import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
// import { Users } from '../../dummyData';



export default function LeftSideBar() {
    const {user} = useContext(AuthContext);


    return (
        <div className="leftSideBarContainer">
            <div className="leftSideBarContent">
                <ul className="leftSideBarList">
                    <li className="leftSideBarListItems">
                        <RssFeedIcon className="leftSideListItemIcon" />
                        <span className="leftSideListItemText">Feed</span>
                    </li>
                    <li className="leftSideBarListItems">
                        <ChatBubbleIcon className="leftSideListItemIcon" />
                        <span className="leftSideListItemText">Chats</span>
                    </li>
                    <li className="leftSideBarListItems">
                        <PlayCircleIcon className="leftSideListItemIcon" />
                        <span className="leftSideListItemText">Videos</span>
                    </li>
                    <li className="leftSideBarListItems">
                        <GroupIcon className="leftSideListItemIcon" />
                        <span className="leftSideListItemText">Groups</span>
                    </li>
                    <li className="leftSideBarListItems">
                        <BookmarkIcon className="leftSideListItemIcon" />
                        <span className="leftSideListItemText">Bookmarks</span>
                    </li>
                    <li className="leftSideBarListItems">
                        <HelpIcon className="leftSideListItemIcon" />
                        <span className="leftSideListItemText">Questions</span>
                    </li>
                    <li className="leftSideBarListItems">
                        <WorkIcon className="leftSideListItemIcon" />
                        <span className="leftSideListItemText">Jobs</span>
                    </li>
                    <li className="leftSideBarListItems">
                        <EventIcon className="leftSideListItemIcon" />
                        <span className="leftSideListItemText">Events</span>
                    </li>
                    <li className="leftSideBarListItems">
                        <SchoolIcon className="leftSideListItemIcon" />
                        <span className="leftSideListItemText">Courses</span>
                    </li>
                    
                    <div className="see_more_list">
                    <hr className="leftSideHr"/>
                    </div>
                    
                    <button value={"Show More"}  className="leftSideBarListBtn" >Show More<span className="downArrow"><KeyboardArrowDownIcon /></span><span className="upArrow"><KeyboardArrowUpIcon /></span></button>
                    <hr className="leftSideHr"/>

                    <h4 className="leftSideBarTitle">Close Friends: </h4>
                    <ul className="leftSideBarFriendList">
                        {user.followings.map((u) => (<CloseFriend key={u} user={u} />))}
                    </ul>
                </ul>
            </div>
        </div>
    )
}

