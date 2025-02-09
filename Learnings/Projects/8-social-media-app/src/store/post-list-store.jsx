/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT={
    postList:[],
    addPost:()=>{},
    deletePost:()=>{},
    addInitialPost:()=>{}
};
const DEFAULT_POST_LIST=[];
export const PostListContext=createContext(DEFAULT_CONTEXT);
const postListReducer=(state,action)=>{
    let newPostListState=[...state];
    if(action.type==="ADD_POST")
    {
        newPostListState=[...newPostListState,{
            id:newPostListState[newPostListState.length-1].id+1,
            userId:action.payload.userId,
            title:action.payload.title,
            body:action.payload.body,
            reactions:action.payload.reactions,
            tags:action.payload.tags
         }];
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
    const addInitialPost=(posts)=>{
        dispatchPostlist({
            type:"ADD_INITIAL_POST",
            payload:{
                posts
            }
          });
         
    }
    const addPost=(
        userId,
        postTitle,
        postBody,
        reactions,
        tags)=>{
        dispatchPostlist({
            type:"ADD_POST",
            payload:{
              userId,
              title:postTitle,
              body:postBody,
              reactions,
              tags
            }
          });
         
    }
    const deletePost=(id)=>{
        dispatchPostlist({
            type:"DELETE_POST",
            payload:{
                postId:id
            }
        });
    }
    return <PostListContext.Provider value={{
        postList,
        addPost,
        deletePost,
        addInitialPost
    }}>
        {children}
    </PostListContext.Provider>
}
export default PostListContextProvider;