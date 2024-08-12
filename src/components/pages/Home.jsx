import React, {useEffect, useState} from 'react'
import Conteiner from '../conteiner/conteiner';
import PostCard from '../PostCard';
import {data_base} from "../../appwrite/config";
function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
       const read= data_base.readDocuments('users')
        // .then((posts) => {
        //     if (posts) {
        //         setPosts(posts.documents)
        //     }
        // })
        if (read){
            read.then((posts) => setPosts(posts))
        }
    }, [])
   
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-5  h-[180px] mt-[100px] text-center">
                <Conteiner>
                    <div className="flex flex-wrap  items-center">
                        <div className="p-2  w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Conteiner>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Conteiner>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.idx} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Conteiner>
        </div>
    )
}

export default Home