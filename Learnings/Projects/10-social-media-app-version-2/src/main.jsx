import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,  createBrowserRouter } from 'react-router-dom';
import App from './routes/App.jsx'
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/create-post",
      element:<CreatePost/>
    },{
      path:"/",
      element:<PostList/>,
      loader:()=>{

      },
      action:()=>{
        
      }
    }
  ]
}]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
