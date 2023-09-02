import Feed from "../../components/feed/Feed"
import LeftSideBar from "../../components/leftSideBar/LeftSideBar"
import Navbar from "../../components/navbar/Navbar"
import RightSideBar from "../../components/rightSideBar/RightSideBar"
import "./home.css"


export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="homeContainer">
                <LeftSideBar />
                <Feed />
                <RightSideBar />
            </div>
        </div>
    )
}
