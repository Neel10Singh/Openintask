import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts'
function Graph() {
  const data = [
    { name: 'Week 1', uv: 400, us: 200, pv: 2400, amt: 2400 },
    { name: 'Week 2', uv: 200, us: 300, pv: 2400, amt: 2400 },
    { name: 'Week 3', uv: 300, us: 100, pv: 2400, amt: 2400 },
    { name: 'Week 4', uv: 100, us: 200, pv: 2400, amt: 2400 },
  ]

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className='custom-tooltip'>
          <p className='label'>{`${label} : ${payload[0].value}`}</p>
          <p className='label'>{`${label} : ${payload[1].value}`}</p>
        </div>
      )
    }

    return null
  }

  return (
    <div className='w-full h-fit md:h-[30rem] border border-gray-400 rounded-3xl !pl-1 pt-5 pr-5 pb-5 bg-white shadow-md'>
      <span className='font-bold text-3xl ml-10 block mb-2'>Activities</span>
      <div className='flex justify-between w-full'>
        <span className=' text-xl ml-10 text-gray-500 mb-2'>
          August-Septempber 2023
        </span>
        <div className='flex items-center text-xl'>
          <div className='h-2 w-2 rounded-full bg-[#EE8484] mr-3'></div>
          <span className='text-gray-500 mr-10'>Guest</span>
          <div className='h-2 w-2 rounded-full bg-[#98D89E] mr-3'></div>
          <span className='text-gray-500 mr-10'>User</span>
        </div>
      </div>
      <ResponsiveContainer width='95%' height='98%'>
        <BarChart data={data}>
          <Tooltip content={<CustomTooltip />} />

          <XAxis dataKey='name' />
          <YAxis />
          <Bar dataKey='uv' fill='#EE8484' radius={[5, 5, 5, 5]} />
          <Bar dataKey='us' fill='#98D89E' radius={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Graph
