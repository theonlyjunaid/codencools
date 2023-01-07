import React from 'react'

const Bargain = () => {
  return (
<div className='w-[300px]  my-4 h-[40px]'>
    <div className='flex relative '>

              <input type="text" className='border border-black rounded-md w-full h-[40px] px-3' placeholder='recommended price : 299'/>
    <div className='bg-green-400 w-max px-1 absolute right-2 my-2 hover:bg-green-500 cursor-pointer rounded-sm fl'>
Send
    </div>
    </div>
</div>
  )
}

export default Bargain