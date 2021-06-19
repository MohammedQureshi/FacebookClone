import React from 'react'
import './Post.css'
import Header from './Header';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentAlt } from 'react-icons/fa';
import {RiShareForwardLine} from 'react-icons/ri';

function Post({avatar, name, verified, time, audience, text, content}) {
    return (
        <div className="Post">
            <div className="Post__Header">
                <Header 
                    name={name} 
                    verified={verified} 
                    avatar={avatar} 
                    time={time}
                    audience={audience}
                />
            </div>
            <div className="Post__Text">
                <p> {text} </p>
            </div>
            <div className="Post__Content">
                {content && <img src={content} alt={content} />}
            </div>
            <div className="Post__Buttons">
                <button><AiOutlineLike /><h3> Like</h3></button>
                <button><FaRegCommentAlt /><h3> Comment</h3></button>
                <button><RiShareForwardLine /><h3> Share</h3></button>
            </div>
        </div>
    )
    
}

export default Post
