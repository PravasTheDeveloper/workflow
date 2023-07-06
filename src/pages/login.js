import React from 'react'

function login() {
    return (
        <div className='h-screen w-full bg-slate-800 flex justify-center items-center '>
            <div className='w-[700px] h-[450px] bg-white rounded'>
                <div className='bg-red-500'>
                    <input type="text" className='border border-slate-900' />
                </div>
                <div className='bg-red-500'>
                    <input type="text" className='border border-slate-900' />
                </div>
            </div>
        </div>
    )
}

export default login
