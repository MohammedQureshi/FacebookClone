import React from 'react'
import './PopOutPost.css'
import Avatar from '@material-ui/core/Avatar'

function PopOutPost({toggleCollapse}) {
    return (
        <div className="PopOutPost">
            <div className="PopOutPost__Post">
                <div className="PopOutPost__Title">
                    <h3> Create post </h3> 
                    <button onClick={() => { toggleCollapse()}} > X </button>
                </div>
                <div className="PopOutPost__Header">
                    <div className="PopOutPost__Avatar">
                        <Avatar src="https://media-exp3.licdn.com/dms/image/C4E03AQF2s8dGWpgC5g/profile-displayphoto-shrink_200_200/0/1592998404125?e=1629331200&v=beta&t=5IRMkWHeb6gNJBhmuZZcLKYNGjyaJ6Pd3F-ER5lVRxY" />
                    </div>
                    <div className="PopOutPost__Name">
                        <h3>Mohammed Qureshi</h3>
                        <select>
                            <option>Public</option>
                            <option>Friends</option>
                        </select>
                    </div>
                </div>
                <div className="PopOutPost__InputBox">
                    <textarea rows="8" cols="50" placeholder="What's on your mind, Mohammed?"></textarea>
                </div>
                <div className="PopOutPost__Submit">
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default PopOutPost
