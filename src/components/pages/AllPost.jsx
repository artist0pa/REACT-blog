import React, {useState, useEffect} from 'react'
import Conteiner from '../conteiner/conteiner';
import PostCard from '../PostCard';

import {data_base} from "../../appwrite/config";


function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
    const document=data_base.readDocuments('users')
    if (document) {  
            document.then(res=>setPosts(res))
    }
}, [])
  

  return (
    <div className='w-full py-8'>
        <Conteiner>
          {
            
          posts.length!==0? (<div className='flex flex-wrap'>
              {
                posts.map((post) => (
                    <div key={post.id} className='p-2 w-1/4'>
                      <PostCard {...post} />
                  </div>
              ))}
          </div>):(
              <div className='text-center  text-red-900 text-2xl py-11'>
                <p>No  posts</p>
              </div>
          )
          }
            
            </Conteiner>
    </div>
  )
}

export default AllPosts