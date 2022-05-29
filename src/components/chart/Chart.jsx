import React from "react"
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <>
      <div className='chart'>
        <h3>{title}</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' stroke='#5550bd' />
            <Tooltip />
            <Line type='monotone' dataKey={dataKey} stroke='#5550bd' />
            {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default Chart
