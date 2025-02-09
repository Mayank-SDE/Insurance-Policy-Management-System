import { useContext, useRef } from "react"
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();
const navigate=useNavigate();
const {addPost}=useContext(PostListContext);
  const handleSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    // const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");
    
    fetch('https://dummyjson.com/posts/add',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
            userId:userId,
            title:postTitle,
            body:postBody,
            reactions:{
              likes:4,
              dislikes:5
            },
            tags:tags
      })
    }).then(response=>response.json()).then((post)=>{
      console.log(post);
     addPost(post);
      navigate("/");
    })

    /*addPost(userId,
        postTitle,
        postBody,
        reactions,
        tags
    );*/

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";
    
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
  <div  className="mb-3">
    <label htmlFor="userId"  className="form-label">User id</label>
    <input ref={userIdElement} type="text"  className="form-control" id="userId" placeholder="Enter your user id here" />
  </div>
  <div  className="mb-3">
    <label htmlFor="title"  className="form-label">Post Title</label>
    <input ref={postTitleElement} type="text"  className="form-control" id="title" placeholder="How are you feeling today ..." />
  </div>
  <div  className="mb-3">
    <label htmlFor="body"  className="form-label">Post Title</label>
    <textarea ref={postBodyElement} rows={4} type="text"  className="form-control" id="body" placeholder="Tell us more about yourself ..." />
  </div>
  <div  className="mb-3">
    <label htmlFor="reactions"  className="form-label">Number of reactions</label>
    <input ref={reactionsElement} type="text"  className="form-control" id="reactions" placeholder="How many people reacted to this post" />
  </div>
  <div  className="mb-3">
    <label htmlFor="tag"  className="form-label">Tags</label>
    <input ref={tagsElement} type="text"  className="form-control" id="tag" placeholder="Enter your tags" />
  </div>
  
  <button type="submit"  className="btn btn-primary">Post</button>
</form>
  )
}

export default CreatePost