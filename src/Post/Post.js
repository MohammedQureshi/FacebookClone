import React, { forwardRef } from "react";
import "./Post.css";
import Header from "./Header";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";

const Post = forwardRef(
  ({ avatar, name, verified, time, audience, text, content }, ref) => {
    return (
      <div className="Post" ref={ref}>
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
          <button>
            <AiOutlineLike className="Post__Button" />
            <h3> Like</h3>
          </button>
          <button>
            <FaRegCommentAlt className="Post__Button" />
            <h3> Comment</h3>
          </button>
          <button>
            <RiShareForwardLine className="Post__Button" />
            <h3> Share</h3>
          </button>
        </div>
      </div>
    );
  }
);

export default Post;
