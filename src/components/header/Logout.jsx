import React from 'react'
import {useDispatch} from 'react-redux'
import {account} from '../../appwrite/config'
import {clearUser} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        
        account.logout().then(() => {
            dispatch(clearUser())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 drop-shadow-md bg-gradient-to-br   from-blue-200 to-pink-400 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn