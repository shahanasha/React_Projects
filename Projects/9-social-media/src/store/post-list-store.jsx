import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { }
});

const postListReducer = (currPostList , action) =>{
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList= currPostList.filter((post)=> post.id !== action.payload.postId)
  }
  else if(action.type === 'ADD_POST'){
    newPostList= [action.payload , ...currPostList];
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {

  const [postList, dispatchPostList] = useReducer(
    postListReducer, 
    DEFAULT_POST_LIST
  );

  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload : {
        id : Date.now(),
        title : postTitle,
        body : postBody, 
        reactions : reactions,
        userId:userId,
        tags : tags
      }
    })
  }

  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_POST',
      payload : {
        postId
      },
    })
  }

  return <PostList.Provider value={
    {
      postList,
      addPost,
      deletePost
    }
  }>
    {children}
  </PostList.Provider>
}

const DEFAULT_POST_LIST =[
  {
  id : '1',
  title : 'Going to Kerala',
  body : 'Hi friends I am going back to my hometown for vacation,Peace out',
  reactions : 0,
  userID : 'user-1',
  tags : ['vacation','kerala','enjoying']
},

{
  id : '2',
  title : 'Pass ho gyi',
  body : 'After 4 years btech engineer',
  reactions : 15,
  userID : 'user-2',
  tags : ['Graduation','Unbelievable']
},
]

export default PostListProvider;