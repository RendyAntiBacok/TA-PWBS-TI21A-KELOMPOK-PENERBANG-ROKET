import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <p>layout dari Dashboard</p>
        {children}
        </div>
  )
}
