import React, { useState } from "react";
import "./PopOutPost.css";
import Avatar from "@material-ui/core/Avatar";
import db from "../firebase";

function PopOutPost({ toggleCollapse }) {
  const [facebookPost, setFacebookPost] = useState("");
  const [facebookStatus, setFacebookStatus] = useState("");

  const sendFacebookPost = (e) => {
    db.collection("posts").add({
      name: "LtConquer",
      verified: true,
      audience: facebookStatus,
      text: facebookPost,
      content: "",
      time: "32m",
      avatar:
        "https://www.mohammedqureshi.co.uk/static/media/CircleProfile.168bb9d5.png",
    });
    toggleCollapse();
    setFacebookPost("");
    setFacebookStatus("");
  };

  return (
    <div className="PopOutPost">
      <div className="PopOutPost__Post">
        <div className="PopOutPost__Title">
          <h3> Create post </h3>
          <button onClick={() => toggleCollapse()}> X </button>
        </div>
        <div className="PopOutPost__Header">
          <div className="PopOutPost__Avatar">
            <Avatar src="https://media-exp3.licdn.com/dms/image/C4E03AQF2s8dGWpgC5g/profile-displayphoto-shrink_200_200/0/1592998404125?e=1629331200&v=beta&t=5IRMkWHeb6gNJBhmuZZcLKYNGjyaJ6Pd3F-ER5lVRxY" />
          </div>
          <div className="PopOutPost__Name">
            <h3>LtConquer</h3>
            <select onChange={(e) => setFacebookStatus(e.target.value)}>
              <option value={false}>Friends</option>
              <option value={true}>Public</option>
            </select>
          </div>
        </div>
        <div className="PopOutPost__InputBox">
          <textarea
            onChange={(e) => setFacebookPost(e.target.value)}
            value={facebookPost}
            rows="8"
            cols="50"
            placeholder="What's on your mind, LtConquer?"
          ></textarea>
        </div>
        <div className="PopOutPost__Submit">
          <button onClick={() => sendFacebookPost()}>Post</button>
        </div>
      </div>
    </div>
  );
}

export default PopOutPost;
