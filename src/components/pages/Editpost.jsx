import React, {useEffect, useState} from 'react'
import Conteiner from '../conteiner/conteiner';
import PostForm from '../post-form/PostForm';
import {data_base} from "../../appwrite/config";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        // console.log(slug)
        if (slug) {
            
            const don =  data_base.singleDoc('users',slug )
                if (don){
                    // console.log(don)
                    don.then(res=>setPosts(res))
                }
                else navigate("/");
        } 
        else {
            navigate('/')
        }
    }, [slug, navigate])
    // console.log(post)
  return post ? (
    <div className='py-8'>
        <Conteiner>
            <PostForm post={post} slug={slug} />
        </Conteiner>
    </div>
  ) : null
}

export default EditPost