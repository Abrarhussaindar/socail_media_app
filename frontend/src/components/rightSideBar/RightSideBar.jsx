import "./rightsidebar.css"
import CakeIcon from '@mui/icons-material/Cake';
import OnlineFriends from '../onlineFriends/OnlineFriends';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import UserFriends from "../userFriends/UserFriends";
import axios from "axios";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function RightSideBar(props) {
    const {user, dispatch} = useContext(AuthContext);
    const [friends, setFriends] = useState([]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    useEffect(() => {
        const getFriends = async () => {
            if(props === null){
                try{
                    const friendList = await axios.get("/user/friends/"+user._id);
                    setFriends(friendList.data);
                }catch(err){
                    console.log(err);
                }
            }else{
                try{
                    const friendList = await axios.get("/user/friends/"+props.user._id);
                    setFriends(friendList.data);
                }catch(err){
                    console.log(err);
                }
            }
        };
        getFriends();
    }, [user._id, props]);
    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <CakeIcon className="birthdayIcon" />
                    <span className="birthdayText">
                        <b>Abrar Hussain</b> and <b>3 other friends</b> have a birthday today.
                    </span> 
                </div>
                <img src={PF+"me.jpg"} alt="" className="rightSideBarAd" />
                <div className="onlineContainer">
                    <h4 className="onlineContainerTitleText">Online Friends</h4>
                    {user.followings.map((u) => (<OnlineFriends key={u} user={u} />))}
                </div>
            </>
        )
    }
    // const [followed, setFollowed] = useState(user.followings.includes(props.user._id));
    
    // useEffect(() => {
    //     setFollowed(user.followings.includes(props.user._id));
    // }, []);
    // console.log("props.user_id", props.user._id);
    // const handleFollowFrnd = async () => {
    //     try{
    //         if(followed){
    //             await axios.put("/user/"+props.user._id+"/unfollow", {userId: user._id});
    //             // window.location.reload();
    //             dispatch({type: "UNFOLLOW", payload: props.user._id});
    //         }else{
    //             await axios.put("/user/"+props.user._id+"/follow", {userId: user._id});
    //             dispatch({type: "FOLLOW", payload: props.user._id});
    //         }
    //     }catch(err){
    //         console.log(err);
    //     }
    //     setFollowed(!followed);
    // }
    const ProfileRightBar = () => {
        

        return (
            <>
            {user.username !== props.user.username && (
                <button className="rightBarFollowBtn" >

                    {/* {followed ? "Unfollow" : "Follow"} */}
                    Follow <AddIcon className="addIcon"/>
                    {/* {followed ? <RemoveIcon className="addIcon"/> : <AddIcon className="addIcon"/>} */}
                </button>
            )}
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
                    {friends.map((u) => (<UserFriends key={u} user={u} />))}
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
