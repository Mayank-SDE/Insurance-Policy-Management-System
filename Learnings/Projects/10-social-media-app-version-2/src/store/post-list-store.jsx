/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useCallback, useEffect, useReducer, useState } from "react";

const DEFAULT_CONTEXT={
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
    addInitialPost:()=>{},
    fetching:false
};
const DEFAULT_POST_LIST=[];
export const PostListContext=createContext(DEFAULT_CONTEXT);
const postListReducer=(state,action)=>{
    let newPostListState=[...state];
    if(action.type==="ADD_POST")
    {
        console.log(action.payload.post);
        newPostListState=[...newPostListState,action.payload.post];
    }else if(action.type==="DELETE_POST")
    {
        newPostListState=newPostListState.filter(post=>post.id!==action.payload.postId);
    }else if(action.type==='ADD_INITIAL_POST'){
        const posts=[...action.payload.posts];
        newPostListState=posts;
    }
    return newPostListState;
}
const PostListContextProvider=({children})=>{

    const [postList,dispatchPostlist]=useReducer(postListReducer,DEFAULT_POST_LIST);


    const [fetching,setFetching]=useState(false);

  useEffect(()=>{
    //const controller=new AbortController();
    //const signal=controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts",
    // {signal}
    ).then(response=>{
     return response.json();
  }).then(data=>{
      addInitialPost(data.posts);
      setFetching(false);
    })
    return ()=>{
     // controller.abort();
    }
  },[]);

    const addInitialPost=(posts)=>{
        dispatchPostlist({
            type:"ADD_INITIAL_POST",
            payload:{
                posts
            }
          });
         
    }
    const addPost=(post)=>{
        dispatchPostlist({
            type:"ADD_POST",
            payload:post
          });
         
    }
    const deletePost=useCallback((id)=>{
        dispatchPostlist({
            type:"DELETE_POST",
            payload:{
                postId:id
            }
        });
    },[dispatchPostlist]);
    return <PostListContext.Provider value={{
        postList,
        addPost,
        deletePost,
        addInitialPost,
        fetching
    }}>
        {children}
    </PostListContext.Provider>
}
export default PostListContextProvider;