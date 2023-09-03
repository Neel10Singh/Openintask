import React from 'react'
import discord from '../assets/discord logo.png'
import discordb from '../assets/discord blue.png'
import google from '../assets/google.png'
import { auth, GoogleProvider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function Login({ setUser }) {
  const navigate = useNavigate()
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, GoogleProvider)
      const user = res.user
      console.log(user)
      setUser(user.photoURL)
      navigate('/dash')
    } catch (err) {
      console.error(err)
      alert(err.message)
    }
  }
  return (
    <div className=' w-[100%] h-[100vh] flex bg-gray-100 '>
      <div className='flex-[0.75] h-full bg-blue-600 relative hidden md:block'>
        <div className=' absolute text-white font-bold top-20 left-20 z-10 text-[2.4rem]'>
          LOGO
        </div>
        <div className=' absolute text-white font-bold top-[50%] lg:left-[50%] md:left-[40%] translate-x-[-20%] z-10 text-[7.2rem] translate-y-[-50%]'>
          BOARD.
        </div>
        <div className=' absolute text-white font-bold flex justify-between w-[30rem] top-[85%] lg:left-[53%] md:left-[40%] z-10 text-[4.8rem] translate-y-[-50%] translate-x-[-30%]'>
          <i className='fa fa-github cursor-pointer'></i>
          <i className='fa fa-twitter cursor-pointer'></i>

          <i className='fa fa-linkedin cursor-pointer'></i>
          <img src={discord} className='h-[4.5rem] w-[5rem] cursor-pointer' />
        </div>
      </div>
      <div className='flex-[0.5] h-full bg-blue-600 skew-x-[-6deg] translate-x-[-40%] hidden md:block'></div>
      <div className='flex-1 h-full flex flex-col justify-center items-center md:items-start '>
        <div className='  text-blue-600 font-bold  text-3xl md:hidden w-[89%]'>
          LOGO
        </div>
        <div className='  text-blue-600 font-bold text-6xl w-[90%] md:hidden mt-5 mb-10'>
          BOARD.
        </div>
        <div className='flex flex-col gap-y-5 items-start justify-center h-fit md:translate-x-0 lg:translate-x-24 w-[90%] lg:w-[60%]'>
          <p className='text-5xl font-bold'>Sign In</p>
          <p className='text-2xl '>Sign in to your account</p>
          <div className='w-full flex justify-between'>
            <button
              className='bg-white border-none w-[48%] p-2 text-gray-500 rounded-xl text-xl'
              onClick={signInWithGoogle}
            >
              <img src={google} className='h-4 w-4 inline mb-1 mr-3' />
              Sign In using Google
            </button>
            <button className='bg-white border-none w-[48%] p-2 text-gray-500 rounded-xl text-xl'>
              <i className='fa fa-apple text-gray-500 mr-3'></i>
              Sign In using Apple
            </button>
          </div>
          <form className='bg-white w-full p-16 flex flex-col rounded-3xl'>
            <span className='text-2xl'>Email address:</span>
            <input
              type='text'
              className='mt-4 bg-gray-200 border-none focus:outline-none focus:bg-gray-300 p-2 text-2xl   rounded-lg'
            ></input>
            <span className='text-2xl mt-7'>Password:</span>
            <input
              type='text'
              className='mt-4 bg-gray-200 border-none focus:outline-none focus:bg-gray-300 p-2 text-2xl   rounded-lg'
            />
            <a href='#' className='mt-7 text-2xl text-blue-600'>
              Forgot your password?
            </a>
            <button className='w-full p-4 bg-blue-600 border-none text-2xl text-white rounded-lg mt-7 font-semibold hover:bg-blue-500 transition-all'>
              Sign In
            </button>
          </form>
          <div className='flex justify-center w-full'>
            <span className='mt-7 text-2xl'>
              Don't have an account?{' '}
              <a href='#' className=' text-blue-600'>
                Register here
              </a>
            </span>
          </div>
        </div>
        <div className=' text-blue-700 font-bold flex justify-between w-[25rem] mt-20 text-5xl md:hidden '>
          <i className='fa fa-github cursor-pointer'></i>
          <i className='fa fa-twitter cursor-pointer'></i>

          <i className='fa fa-linkedin cursor-pointer'></i>
          <img src={discordb} className='h-[34px] w-[34px] cursor-pointer ' />
        </div>
      </div>
    </div>
  )
}

export default Login
