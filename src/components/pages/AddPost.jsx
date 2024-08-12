import React from 'react'
import Conteiner from '../conteiner/conteiner'
import PostForm from '../post-form/PostForm'

function AddPost() {
  return (
    <div className='py-8'>
        <Conteiner>
            <PostForm />
        </Conteiner>
    </div>
  )
}

export default AddPost