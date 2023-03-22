
import Modal from './Modal';
import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';
function PostsList ({isPosting, onStopPosting}){
const [posts, setPost] = useState([]);
    
    function addPostHandler(postData){
      setPost((existingPost) => [postData, ...existingPost]);
    }


    
    
    return (
      <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost 
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )
      }
        <ul className={classes.posts}>
          {posts.map((post) => <Post key={post.body} author={post.author} body={post.body}/>)}
          
        </ul>
      </>
    );
    
}

export default PostsList;