import { useContext, useEffect, useState } from "react"
import Post from "./Post"
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSPinner";

const PostList = () => {
    const postListContext=useContext(PostListContext);
    const {postList,addInitialPost}=postListContext;

    const [fetching,setFetching]=useState(false);

  useEffect(()=>{
    const controller=new AbortController();
    const signal=controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts",{signal}).then(response=>{
     return response.json();
  }).then(data=>{
      addInitialPost(data.posts);
      setFetching(false);
    })
    return ()=>{
      controller.abort();
    }
  },[]);

  return (
    <>
    {fetching && <LoadingSpinner/>}
    {!fetching && postList && postList.length===0 && <WelcomeMessage/>}
    {!fetching && postList && postList.map((post)=>{
        return <Post key={post.id} post={post}/>
    })}
    </>
  )
}

export default PostList