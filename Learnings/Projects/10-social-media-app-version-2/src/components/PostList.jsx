import { useContext} from "react"
import Post from "./Post"
import { PostListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSPinner";

const PostList = () => {
    const postListContext=useContext(PostListContext);
    const {postList,fetching}=postListContext;

    

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