"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "1", value: 0 },
  { name: "2", value: 0 },
  { name: "3", value: 0 },
  { name: "4", value: 0 },
  { name: "5", value: 0 },
  { name: "6", value: 0 },
  { name: "7", value: 0 },
]

export function OrderChart() {
  return (
    <div className="bg-[#25262b] rounded-lg p-6">
      <h3 className="text-white font-medium mb-6">Order Statistics - Last 30 days</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#374151",
                border: "none",
                borderRadius: "0.5rem",
              }}
            />
            <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

