/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {AiFillDelete} from 'react-icons/ai';
import { PostListContext } from '../store/post-list-store';
import { useContext } from 'react';
const Post = ({post}) => {
  const {deletePost}=useContext(PostListContext);
  return (
        <div  className="card post-card" style={{width: "30rem"}}>
  <div  className="card-body">
    <h5  className="card-title">{post.title}
    <span onClick={()=>{
      deletePost(post.id);
    }} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    <AiFillDelete />
  </span>
    </h5>
    <p  className="card-text">{post.body}</p>
    {post.tags.map((tag)=>{
    return (<span key={tag} className="badge text-bg-primary hashtag">{tag}</span>
)})}
    <div className="alert alert-success reactions" role="alert">
    This post has been reacted by {post.reactions.likes+post.reactions.dislikes} people.
    </div>
  </div>
</div>
  )
}

export default Post