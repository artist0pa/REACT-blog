import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/authSlice.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import { Auth_Layout, Login } from './components/index.js'


import AddPost from "./components/pages/AddPost.jsx";
import Signup from "./components/pages/Signup.jsx"
import EditPost from "./components/pages/Editpost.jsx";
import Post from "./components/pages/Post.jsx";

import AllPosts from "./components/pages/AllPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        // {
        //     path: "/login",
        //     element: (
        //         <Auth_Layout authentication>
        //             <Login />
        //         </Auth_Layout>
        //     ),
        // },
        // {
        //     path: "/signup",
        //     element: (
        //         // <Auth_Layout authentication >
        //             <Signup />
        //         // </Auth_Layout>
        //     ),
        // },
        {
            path: "/all-posts",
            element: (
                <Auth_Layout authentication>
                    {" "}
                    <AllPosts />
                </Auth_Layout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Auth_Layout authentication>
                    {" "}
                    <AddPost />
                </Auth_Layout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Auth_Layout authentication>
                    {" "}
                    <EditPost />
                </Auth_Layout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
{
    path: "/login",
    element: (
        <Auth_Layout authentication>
            <Login />
        </Auth_Layout>
    ),
},
{
    path: "/signup",
    element: (
        // <Auth_Layout authentication >
            <Signup />
        // </Auth_Layout>
    ),
},

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)