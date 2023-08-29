import React, { Component } from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'

import { Posts } from "../../dummyData"

export default class Feed extends Component {


    render() {
        return (
            <div className='feedContainer'>
                <div className="feedWrapper">
                    <Share />
                    {Posts.map((p) => (
                        <Post key={p.id} post={p} />
                    ))}
                </div>
            </div>
        )
    }
}
