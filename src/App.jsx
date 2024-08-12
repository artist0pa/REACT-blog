import react, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {account} from './appwrite/config'
import {setUser, clearUser} from './store/authSlice'
import { Head } from './components'
import Footer from './components/foter/Footer'

import {Outlet} from 'react-router-dom'
function App() {
 
  const [loading,setloading]=useState(true)
  const dispatch=useDispatch()
    useEffect(()=>{
       const as=  account.getcurrentuser()
          try{
         if (as){
              dispatch(setUser(as.email))
            }
            else{
              dispatch(clearUser())
            }}
            
            finally{setloading(false)}
    })

  return !loading?(<>
    <div className='min-h-screen flex flex-wrap content-between bg-gradient-to-bl from-blue-200 to-pink-600'>
      <div className='w-full block'>
        <Head />
        <main>
       <Outlet />
        </main>
        <Footer/>
      </div>
    </div>
  </>):(<div>loading...</div>)
}

export default App
