import "./rightsidebar.css"
import CakeIcon from '@mui/icons-material/Cake';
import OnlineFriends from '../onlineFriends/OnlineFriends';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import UserFriends from "../userFriends/UserFriends";
// import { Users } from '../../dummyData';

// abcdefgh@gmail.com
//  AbrarNissa@123

export default function RightSideBar(props) {
    const {user} = useContext(AuthContext);

    const HomeRightBar = () => {
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
                    {user.followings.map((u) => (<OnlineFriends key={u} user={u} />))}
                </div>
            </>
        )
    }

    const ProfileRightBar = () => {

        return (
            <>
                <h4 className="rightBarTitle">User Information :</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">City: </span>
                        <span className="rightBarInfoValue">{props.user.city}</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From: </span>
                        <span className="rightBarInfoValue">{props.user.from}</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Relationship: </span>
                        <span className="rightBarInfoValue">{props.user.relationship === 1 ? "Single" : props.user.relationship === 2 ? "Married" : "-" }</span>
                    </div>
                </div>

                <h4 className="rightBarTitle">User Friends</h4>
                <div className="rightBarFollowings">
                    {user.followings.map((u) => (<UserFriends key={u} user={u} />))}
                </div>
            </>
        )
    }
    return (
        <div className='rightSideBarContainer'>
            <div className="rightSideBarWrapper">
                {props.user ? <ProfileRightBar /> : <HomeRightBar /> }
            </div>
        </div>
    )
}
