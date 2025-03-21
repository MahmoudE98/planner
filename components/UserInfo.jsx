import React from 'react'

const UserInfo = () => {
  return (
    <div className='grid justify-end pr-4 '>
        <div className="shadow-lg p-8 bg-zinc-300/20 flex flex-col gap-2 my-6">
                <div>
                    Name: <span className="font-bold">John</span>
                </div>
                <div>
                    Email: <span className="font-bold">John@gmail.com</span>
                </div>
                <button className="bg-red-500 text-white font-bold px-6 py-2 mt-3">Log Out</button>
            </div>
    </div>
  )
}

export default UserInfo