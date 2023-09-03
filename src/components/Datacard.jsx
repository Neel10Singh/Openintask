import React from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
} from 'recharts'
function Datacard({ data }) {
  const COLORS = [
    '#728FCE',
    '#7E354D',
    '#B0E0E6',
    '#F67280',
    '#2E8B57',
    '#E799A3',
    '#4AA02C',
    '#622F22',
    '#E8F1D4',
    '#F7E7CE',
    '#FAF884',
    '#2E8B57',
    '#EE9A4D',
    '#483C32',
    '#F87217',
    '#C24641',
    '#AAF0D1',
    '#EE82EE',
  ]

  return (
    <div className='flex-1 min-w-[30rem] h-96 bg-white rounded-2xl border border-gray-400 shadow-md !p-4 flex !gap-0 md:gap-2 justify-between items-center'>
      <ResponsiveContainer width={'50%'} height={'80%'}>
        <PieChart>
          <Pie
            data={data}
            dataKey='value'
            nameKey='entry'
            cx='50%'
            cy='50%'
            innerRadius={60}
            outerRadius={80}
            fill='#82ca9d'
            cornerRadius={5}
          >
            {data.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='flex flex-col overflow-y-scroll gap-3 w-[40%] h-full'>
        {data.map((entry, index) => {
          return (
            <div className='flex gap-1 items-center'>
              <div
                className=' h-5 w-5 rounded-full '
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className='text-md font-bold'>{entry.entry}</span>
              <span className='text-sm text-gray-500'>({entry.value})</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Datacard
