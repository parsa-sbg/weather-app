import React from 'react'
import './ForecastChart.css'
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'


export default function ForecastChart({ data, date }) {
    return (
        <div className="ForecastChart-wrapper">
            <h2 className='ForecastChart__title'>{date}</h2>
            <div className='ForecastChart'>
                <ResponsiveContainer width='100%' height={200}>
                    <LineChart width={730} height={250} data={data}>
                        <CartesianGrid strokeDasharray="1 20" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip contentStyle={{ color: 'red', backgroundColor: 'black' }} />
                        <Legend />
                        <Line strokeWidth={3} type="monotone" dataKey="temp" stroke="#fff" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

    )
}
