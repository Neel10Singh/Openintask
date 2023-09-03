import React from 'react'

function Card({ cl, col, data, label, change }) {
  return (
    <div className='flex-1 min-w-[20rem] border-[1px] border-gray-400 rounded-xl p-4 bg-white shadow-md flex flex-col gap-2'>
      <div
        className={`w-14 h-14 rounded-full ${col} flex justify-center items-center`}
      >
        <i className={`${cl} !text-4xl text-white`} />
      </div>
      <span className='text-lg'>{label}</span>
      <div className='flex w-full justify-between'>
        <span className='text-3xl font-bold'>{data}</span>
        <span className=' bg-green-200 py-1 px-2 rounded-full  text-emerald-500'>
          {change}
        </span>
      </div>
    </div>
  )
}

export default Card
