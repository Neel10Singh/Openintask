import React, { useState } from 'react'

function Profile({ profileActive, setProfileActive, modalopen, setModalOpen }) {
  const [openmenu, setOpenMenu] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [ilink, setILink] = useState('')
  const [ylink, setYLink] = useState('')

  const changemenu = (e) => {
    e.preventDefault()
    if (name && email && number && number.length === 10) {
      setOpenMenu(2)
    } else {
      const alert = document.getElementById('alert')
      alert.innerHTML = 'Please enter all the details correctly!'
    }
  }
  const submitform = (e) => {
    e.preventDefault()
    setModalOpen(false)
    setOpenMenu(1)
    setProfileActive(true)
  }
  return (
    <>
      <div className='flex-1 min-w-[30rem] bg-white rounded-2xl border border-gray-400 shadow-md !p-4'>
        {!profileActive ? (
          <div className='w-full h-full flex flex-col justify-center items-center py-20'>
            <button
              className='h-32 w-32 rounded-full bg-gray-200 text-gray-500 text-[5rem] pb-12 hover:bg-gray-300 ttransition-all'
              onClick={() => setModalOpen(true)}
            >
              +
            </button>
            <span className='text-2xl text-gray-400 mt-4'>Add Profile</span>
          </div>
        ) : (
          <div className='w-full h-full p-5'>
            <p className='text-3xl font-bold'>{name}</p>
            <div className='flex flex-wrap gap-5 mt-5 justify-center items-center'>
              <div className='flex gap-3 min-w-[45%]'>
                <div className='h-10 w-10 rounded-full bg-green-300 flex justify-center items-center text-3xl text-green-500'>
                  <i className='fa fa-whatsapp'></i>
                </div>
                <p className='text-2xl underline font-semibold'>{number}</p>
              </div>
              {ilink && (
                <div className='flex gap-3 min-w-[45%]'>
                  <div className='h-10 w-10 rounded-full bg-red-300 flex justify-center items-center text-3xl text-red-500'>
                    <i className='fa fa-instagram'></i>
                  </div>
                  <p className='text-2xl underline font-semibold'>{ilink}</p>
                </div>
              )}
              <div className='flex gap-3 min-w-[45%]'>
                <div className='h-10 w-10 rounded-full bg-indigo-300 flex justify-center items-center text-3xl text-indigo-500'>
                  <i className='fa fa-envelope'></i>
                </div>
                <p className='text-2xl underline font-semibold'>{email}</p>
              </div>

              {ylink && (
                <div className='flex gap-3 min-w-[45%]'>
                  <div className='h-10 w-10 rounded-full bg-sky-300 flex justify-center items-center text-3xl text-red-500'>
                    <i className='fa fa-youtube'></i>
                  </div>
                  <p className='text-2xl underline font-semibold'>{ylink}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {modalopen && (
        <div className=' fixed top-[50%] left-[50%] w-[40rem] h-fit translate-y-[-50%] translate-x-[-50%] rounded-xl bg-white z-20 '>
          <div className='flex w-full justify-between p-2 border-b border-gray-200'>
            <p className='text-3xl font-bold'>Add New Profile</p>
            <button className='h-10 w-10' onClick={() => setModalOpen(false)}>
              <i className='fa fa-times !text-2xl text-gray-400'></i>
            </button>
          </div>
          <div className='flex w-full px-3 gap-5 justify-center mt-3'>
            <button
              className={` flex-1 ${
                openmenu === 1 ? 'activemenu' : ' '
              } border-b-[3px] border-gray-400 text-2xl p-2`}
              onClick={() => setOpenMenu(1)}
            >
              Basic
            </button>
            <button
              className={` flex-1 ${
                openmenu === 2 ? 'activemenu' : ''
              } border-b-[3px] border-gray-400 text-2xl p-2`}
              onClick={() => setOpenMenu(2)}
            >
              Contact
            </button>
          </div>
          {openmenu === 1 && (
            <form className='flex flex-col w-full h-full p-4'>
              <p className='text-xl'>Enter Name*</p>
              <input
                className='w-full h-14 border text-xl border-gray-300 focus:outline-none focus:border-gray-500 rounded-lg pl-3 mb-4'
                placeholder='Eg: John Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <p className='text-xl'>Enter Email*</p>
              <input
                type='email'
                className='w-full h-14 border text-xl border-gray-300 focus:outline-none focus:border-gray-500 rounded-lg pl-3 mb-4'
                placeholder='Eg: John123@gmail.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <p className='text-xl'>Enter Phone*</p>
              <input
                className='w-full h-14 border text-xl border-gray-300 focus:outline-none focus:border-gray-500 rounded-lg pl-3 mb-4'
                placeholder='Eg: 9876543210'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></input>
              <div className='w-full border-b border-gray-200 mt-3'></div>
              <div className='flex justify-end items-center mt-3'>
                <div className='text-red-500 mr-3' id='alert'></div>
                <button
                  className='w-32 p-3 bg-blue-600 border-none text-xl text-white rounded-lg hover:bg-blue-500 transition-all'
                  onClick={changemenu}
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {openmenu === 2 && (
            <form className='flex flex-col w-full h-full p-4'>
              <p className='text-xl'>Instagram Link(Optional)</p>
              <input
                className='w-full h-14 border text-xl border-gray-300 focus:outline-none focus:border-gray-500 rounded-lg pl-3 mb-4'
                placeholder='Eg: instagram.com/username'
                value={ilink}
                onChange={(e) => setILink(e.target.value)}
              ></input>
              <p className='text-xl'>Youtube Link(Optional)</p>
              <input
                type='email'
                className='w-full h-14 border text-xl border-gray-300 focus:outline-none focus:border-gray-500 rounded-lg pl-3 mb-4'
                placeholder='Eg: John123@gmail.com'
                value={ylink}
                onChange={(e) => setYLink(e.target.value)}
              ></input>

              <div className='w-full border-b border-gray-200 mt-3'></div>
              <div className='flex justify-end items-center mt-3'>
                <div className='text-red-500 mr-3' id='alert'></div>
                <button
                  className='w-32 p-3 bg-blue-600 border-none text-xl text-white rounded-lg hover:bg-blue-500 transition-all'
                  onClick={submitform}
                >
                  Next
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  )
}

export default Profile
