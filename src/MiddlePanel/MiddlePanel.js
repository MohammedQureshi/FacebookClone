import React , {useState, useEffect} from 'react'
import Post from '../Post/Post';
import './MiddlePanel.css'
import db from '../firebase'

function MiddlePanel() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
    return (
      <div className="MiddlePanel">
          {posts.map(post => (
              <Post 
              name={post.name}
              avatar={post.avatar}
              time={post.time}
              audience={post.audience}
              text={post.text}
              content={post.content}
              verified={post.verified}
              />
          ))}
      </div>
    );
}

export default MiddlePanel
