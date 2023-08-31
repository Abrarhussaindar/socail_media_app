import React, { useContext, useRef, useState } from 'react'
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
    
export default function Share() {
    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef();
    const [file, setFile] = useState(null);

    const handleSharePostSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            // data.append("file", file);
            // data.append("name", fileName);
            data.append("file", file, fileName);
            newPost.image = fileName;
            try{
                
                await axios.post("/upload", data);
            }catch(err){
                console.log(err);
            }
        }
        try{
            await axios.post("/posts/create", newPost);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src= {user.profilePicture ? PF+user.profilePicture : PF+"noAvatar.png"} alt="img" />
                    <input placeholder={"what's in your mind "+user.username +"?"} ref={desc} className='shareInput' />
                </div>
                <hr className='shareHr' />
                <form className="shareBottom" enctype="multipart/form-data" onSubmit={handleSharePostSubmit}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                            <span className='shareOptionText'>Photo's or Video's</span>
                            <input type="file" style={{display: 'none'}} id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])} />
                        </label>
                        <div className="shareOption">
                            <LabelIcon htmlColor='blue' className='shareIcon'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon htmlColor='green' className='shareIcon'/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}

