
import React from 'react'


export default function BorderCard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='w-auto h-auto border-[0.5px] border-slate-100/45 rounded-sm p-3'>
        {children}
    </div>
  )
}


