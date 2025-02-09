import { useContext } from "react"
import Post from "./Post"
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
    const postListContext=useContext(PostListContext);
    const {postList}=postListContext;
  return (
    <>
    {postList.map((post)=>{
        return <Post key={post.id} post={post}/>
    })}
    </>
  )
}

export default PostList