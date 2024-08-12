import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {setUser as  authlogin12} from '../store/authSlice'
import {Button } from './index'
import {useDispatch} from 'react-redux'
import { account } from '../appwrite/config'
import { useForm } from 'react-hook-form'
import Logo from './Logo'
import Input from './Input'
const Login = () => {
    const dispatch = useDispatch()
    const navidate=useNavigate()
    const {register,handleSubmit,}=useForm()
    const [error, setError]=useState('')

    const login1=async (data)=>{
        
        setError('')
        try{
             const session=await account.login(data)
            
             if (session){
                    const userdata=  account.getcurrentuser()
                    console.log(userdata)
                    if (userdata){
                        dispatch(authlogin12(userdata.uid))
                        navidate('/')
                        
                    }
                    
             }
        }catch(error){
            setError(error.message)
        }
    }
    
  return (
    <div
    className='flex items-center mt-7 justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center ml-9">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login1)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <Button
                type="submit"
                className="w-full bg-blue-400 rounded-lg text-white text-[16px] hover:drop-shadow-lg hover:scale-105 duration-150 "

                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}
  


export default Login