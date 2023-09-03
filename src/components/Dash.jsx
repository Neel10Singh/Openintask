import React, { useState, useEffect } from 'react'
import '../assets/dash.css'
import Card from './Card'
import axios from 'axios'
import Graph from './Graph'
import Profile from './Profile'
import Datacard from './Datacard'

const options = {
  method: 'GET',
  url: 'https://dummyjson.com/products',
}

function Dash({ user }) {
  const [active, setActive] = useState('1')
  const tabs = ['Dashboard', 'Transactions', 'Schedules', 'Users', 'Settings']
  const [profileActive, setProfileActive] = useState(false)
  const [modalopen, setModalOpen] = useState(false)
  const [data, setData] = useState([])

  const toggleside = () => {
    const mobileside = document.getElementById('mobilesidebar')
    mobileside.classList.toggle('sidehidden')
  }
  const getdata = async () => {
    try {
      const response = await axios.get(
        'https://dummyjson.com/products/categories'
      )
      console.log(response.data)
      // setData(response.data)
      let newlist = [{}]
      response.data.forEach((entry) => {
        let value = Math.floor(Math.random() * 100 + 1)
        newlist = [...newlist, { entry, value }]
      })
      // console.log(newlist)
      setData(newlist)
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getdata()
  }, [])
  return (
    <div className='p-5 md:p-16 h-[100%] bg-gray-100 relative'>
      {modalopen && (
        <div className=' absolute top-0 left-0 h-full w-full bg-black opacity-50 z-10'></div>
      )}
      <div className='hidden md:flex flex-col bg-blue-600 p-20 w-[28rem] z-[5] rounded-3xl h-[95%] gap-8 fixed top-6'>
        <div className='  text-white font-bold  text-[3rem] mb-2 '>BOARD.</div>
        <button
          className={
            active === '1'
              ? ' border-none bg-transparent font-bold text-white w-fit text-[1.5rem]'
              : ' border-none bg-transparent text-white w-fit text-[1.5rem]'
          }
          onClick={() => setActive('1')}
          id='1'
        >
          <i className='fa fa-pie-chart !text-[1.3rem] mr-2'></i> Dashboard
        </button>
        <button
          className={
            active === '2'
              ? ' border-none bg-transparent font-bold text-white w-fit text-[1.5rem]'
              : ' border-none bg-transparent text-white w-fit text-[1.5rem]'
          }
          onClick={() => setActive('2')}
          id='2'
        >
          <i className='fa fa-tags !text-[1.3rem] mr-2'></i>transactions
        </button>
        <button
          className={
            active === '3'
              ? ' border-none bg-transparent font-bold text-white w-fit text-[1.5rem]'
              : ' border-none bg-transparent text-white w-fit text-[1.5rem]'
          }
          onClick={() => setActive('3')}
          id='3'
        >
          <i className='fa fa-calendar-check-o !text-[1.3rem] mr-2'></i>{' '}
          Schedules
        </button>
        <button
          className={
            active === '4'
              ? ' border-none bg-transparent font-bold text-white w-fit text-[1.5rem]'
              : ' border-none bg-transparent text-white w-fit text-[1.5rem]'
          }
          onClick={() => setActive('4')}
          id='4'
        >
          <i className='fa fa-user-circle-o !text-[1.3rem] mr-2'></i> Users
        </button>
        <button
          className={
            active === '5'
              ? ' border-none bg-transparent font-bold text-white w-fit text-[1.5rem]'
              : ' border-none bg-transparent text-white w-fit text-[1.5rem]'
          }
          onClick={() => setActive('5')}
          id='5'
        >
          <i className='fa fa-cog !text-[1.3rem] mr-2'></i> Settings
        </button>
        <div className='absolute bottom-20 left-20 flex flex-col gap-2 text-xl'>
          <button className=' border-none bg-transparent  text-white w-fit '>
            Help
          </button>
          <button className=' border-none bg-transparent  text-white w-fit  '>
            Contact Us
          </button>
        </div>
      </div>
      <div
        className='md:hidden sidehidden fixed left-0 top-0 z-[5] transition-all flex flex-col bg-blue-600 p-20 w-full h-full gap-8 duration-500'
        id='mobilesidebar'
      >
        <div className='  text-white font-bold  text-[3rem] mb-2 '>BOARD.</div>
        <button
          className={
            active === '1'
              ? ' border-none bg-transparent font-bold text-white w-fit text-[1.5rem]'
              : ' border-none bg-transparent text-white w-fit text-[1.5rem]'
          }
          onClick={() => {
            setActive('1')
            toggleside()
          }}
          id='1'
        >
          <i className='fa fa-pie-chart !text-[1.3rem] mr-2'></i> Dashboard
        </button>
        <button
          className={
            active === '2'
              ? ' border-none bg-transparent font-bold text-white w-fit text-[1.5rem]'
              : ' border-none bg-transparent text-white w-fit text-[1.5rem]'
          }
          onClick={() => {
            setActive('2')
            toggleside()
          }}
          id='2'
        >
          <i className='fa fa-tags !text-[1.3rem] mr-2'></i>transactions
        </button>
        <button
          className={
            active === '3'
              ? ' border-none bg-transparent font-bold text-white w-fit text-[1.5rem]'
              : ' border-none bg-transparent text-white w-fit text-[1.5rem]'
          }
          onClick={() => {
            setActive('3')
            toggleside()
          }}
          id='3'
        >
          <i className='fa fa-calendar-check-o !text-[1.3rem] mr-2'></i>{' '}
          Schedules
        </button>
        <button
          className={
            active === '4'
              ? ' border-none bg-transparent font-bold text-white w-fit text-[1.5rem]'
              : ' border-none bg-transparent text-white w-fit text-[1.5rem]'
          }
          onClick={() => {
            setActive('4')
            toggleside()
          }}
          id='4'
        >
          <i className='fa fa-user-circle-o !text-[1.3rem] mr-2'></i> Users
        </button>
        <button
          className={
            active === '5'
              ? ' border-none bg-transparent font-bold text-white w-fit text-[1.5rem]'
              : ' border-none bg-transparent text-white w-fit text-[1.5rem]'
          }
          onClick={() => {
            setActive('5')
            toggleside()
          }}
          id='5'
        >
          <i className='fa fa-cog !text-[1.3rem] mr-2'></i> Settings
        </button>
        <div className='absolute bottom-20 left-20 flex flex-col gap-2 text-xl'>
          <button className=' border-none bg-transparent  text-white w-fit '>
            Help
          </button>
          <button className=' border-none bg-transparent  text-white w-fit  '>
            Contact Us
          </button>
        </div>
        <div className='absolute top-20 right-20  text-[3rem]'>
          <button
            className=' border border-white rounded-full bg-transparent h-16 w-16 flex justify-center items-center text-white'
            onClick={toggleside}
          >
            <i className='fa fa-times' />
          </button>
        </div>
      </div>
      <div className='md:pl-[30rem] flex flex-col py-10 w-full gap-10 relative'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex gap-3 items-center'>
            <button
              className='bg-white rounded-full h-10 w-10 md:hidden '
              onClick={toggleside}
            >
              <i className='fa fa-bars'></i>
            </button>
            <span className=' font-bold md:text-[2rem]'>
              {tabs[active - 1]}{' '}
            </span>
          </div>
          <div className='flex gap-3 '>
            <input
              type='text'
              placeholder='Search..'
              className='rounded-lg px-3 h-10 w-32 md:w-56'
            ></input>
            <button className='bg-white border-none rounded-lg translate-x-[-2rem]'>
              <i className='fa fa-search text-gray-400 w-10 '></i>
            </button>
            <button>
              <i className='fa fa-bell-o !text-3xl'></i>
            </button>
            <div className='  h-9 w-9 rounded-full'>
              <img src={user} className='h-full w-full'></img>
            </div>
          </div>
        </div>
        <div className='flex w-full gap-5 flex-wrap justify-center items-center'>
          <Card
            cl='fa fa-money'
            col='bg-green-300'
            label='Total Revenues'
            data='$2,129,430'
            change='+2.5%'
          />
          <Card
            cl='fa fa-tags'
            col='bg-red-300'
            label='Total Transactions'
            data='1,520'
            change='+1.7%'
          />
          <Card
            cl='fa fa-thumbs-o-up'
            col='bg-blue-300'
            label='Total Likes'
            data='9,721'
            change='+1.4%'
          />
          <Card
            cl='fa fa-users'
            col='bg-indigo-300'
            label='Total Users'
            data='8,720'
            change='+4.2%'
          />
        </div>
        <Graph />
        <div className='flex w-full gap-5 flex-wrap'>
          <Datacard data={data} />
          <Profile
            profileActive={profileActive}
            setProfileActive={setProfileActive}
            modalopen={modalopen}
            setModalOpen={setModalOpen}
          />
        </div>
      </div>
    </div>
  )
}

export default Dash
