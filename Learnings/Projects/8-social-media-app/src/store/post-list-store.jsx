/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT={
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}
};
const DEFAULT_POST_LIST=[{
    id:1,
    title:'Going to Mumbai',
    body:'Hi Friends, I am going to Mumbai for my vacations. Hope to enjoy alot.',
    reactions:5,
    userId:'user-9',
    tags:['vacation','mumbai','enjoy']
},{
    id:2,
    title:'B-Tech Pass',
    body:'Passed in B-Tech',
    reactions:15,
    userId:'user-12',
    tags:['pass','b-tech','graduating']
}];
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
    }
    return newPostListState;
}
const PostListContextProvider=({children})=>{

    const [postList,dispatchPostlist]=useReducer(postListReducer,DEFAULT_POST_LIST);
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
        console.log(id);
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
        deletePost
    }}>
        {children}
    </PostListContext.Provider>
}
export default PostListContextProvider;