import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import './PostTextBox.css'
import { BsCameraVideoFill } from 'react-icons/bs'
import { MdPhotoLibrary }from 'react-icons/md'
import { AiOutlineSmile } from 'react-icons/ai'
import PopOutPost from './PopOutPost'

function PostTextBox() {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(s => !s)
    }

    return (
        <div className="PostTextBox">
            <div className="PostTextBox__Head">
                <Avatar src="https://media-exp3.licdn.com/dms/image/C4E03AQF2s8dGWpgC5g/profile-displayphoto-shrink_200_200/0/1592998404125?e=1629331200&v=beta&t=5IRMkWHeb6gNJBhmuZZcLKYNGjyaJ6Pd3F-ER5lVRxY" />
                <button onClick={() => setIsCollapsed(true)}>What's on your mind, Mohammed?</button>
            </div>
            <div className="PostTextBox__Buttons">
                <button><BsCameraVideoFill className="ButtonIcons__Live" /><h3>Live video</h3></button>
                <button><MdPhotoLibrary className="ButtonIcons__Photo" /><h3>Photo/Video</h3></button>
                <button><AiOutlineSmile className="ButtonIcons__Feeling" /><h3>Feeling/Activity</h3></button>
            </div>
            {isCollapsed && <PopOutPost toggleCollapse={toggleCollapse} />}
        </div>
    )
}

export default PostTextBox
