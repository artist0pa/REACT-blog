// import React from 'react'
// import { account } from '../appwrite/config'
// import {Link} from 'react-router-dom'

// function PostCard({$id, title, featuredImage}) {
    
//   return (
//     <Link to={`/post/${$id}`}>
//         <div className='w-full bg-gray-100 rounded-xl p-4'>
//             <div className='w-full justify-center mb-4'>
//                 <img src={account.getstatus(featuredImage)} alt={title}
//                 className='rounded-xl' />

//             </div>
//             <h2
//             className='text-xl font-bold'
//             >{title}</h2>
//         </div>
//     </Link>
//   )
// }


// export default PostCard


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDownloadURL, ref } from 'firebase/storage';
import { strg } from '../appwrite/config'; // Adjust the import path based on your project structure

function PostCard({ id, title, featuredImage }) {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchImageUrl = async () => {
            try {
                // Create a reference to the image file in Firebase Storage
                // const imageRef = ref(strg, `images/${featuredImage}`);
                // const url = await getDownloadURL(imageRef);
                setImageUrl(featuredImage);
            } catch (error) {
                console.error("Error fetching image URL: ", error);
            }
        };

        fetchImageUrl();
    }, [featuredImage]);

    return (
        <Link to={`/post/${id}`}>
            <div className='w-full backdrop-blur-lg bg-gradient-to-r drop-shadow-lg    hover:bg-blue-100 rounded-lg p-2'>
                <div className='w-full h-[250px] justify-center mb-4'>
                    {imageUrl ? (
                        <img src={imageUrl} alt={title} className='rounded-lg h-[260px] w-full object-cover' />
                    ) : (
                        <div className="rounded-xl bg-gray-300 h-40"></div>
                    )}
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    );
}

export default PostCard;
