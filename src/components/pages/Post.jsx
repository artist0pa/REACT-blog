import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {data_base,strg} from "../../appwrite/config";
import { Button, Container } from "../../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null); 
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.user);

    
  
    useEffect(() => {
        if (slug) {
          
           const don= data_base.singleDoc('users',slug)
            //     //  .then((post) => {
            //     // if (post) setPost(post);
            //     else navigate("/");
            // });
                if (don){
                    don.then(res=>setPost(res))
                }
                else navigate("/");

        } else navigate("/");
    }, [slug, navigate]);
    const isAuthor = post && userData ? post.idx === userData : false;
    const deletePost = () => {
      
      const status=  data_base.deleteDocument('users',slug)
            if (status){
             const path=extractStoragePath(post.featuredImage)
              
                const pt= strg.deleteFile(path)
                if(pt){
                    setTimeout(()=>navigate("/"),3000)
                    
                }
             
            }
    };
    function extractStoragePath(url) {
        const storagePath = url.split('/o/')[1].split('?')[0];
        return decodeURIComponent(storagePath);
      }

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${slug}`}>
                                <Button bgColor="bg-red-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}