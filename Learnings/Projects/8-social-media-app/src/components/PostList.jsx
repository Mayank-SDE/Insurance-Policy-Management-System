import { useContext } from "react"
import Post from "./Post"
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
    const postListContext=useContext(PostListContext);
    const {postList,addInitialPost}=postListContext;

    const handleGetPostClick=()=>{
      fetch("https://dummyjson.com/posts").then(response=>response.json()).then(data=>{
        addInitialPost(data.posts);
      })
    } 

  return (
    <>
    {postList && postList.length===0 && <WelcomeMessage onGetPostClick={handleGetPostClick}/>}
    {postList && postList.map((post)=>{
        return <Post key={post.id} post={post}/>
    })}
    </>
  )
}

export default PostList