import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";

function Favorite() {

  const [state,setState] = useState('')

  if(JSON.parse(localStorage.getItem('favorite'))==null || JSON.parse(localStorage.getItem('favorite')).length==0)
  {
    return <h1 className='text-3xl text-black font-serif'>Add Your Favorite Post</h1>
  }

  function handleDelete(e)
  {
    const filterObj = JSON.parse(localStorage.getItem('favorite')).filter((value,idx)=>
    {
      return idx!=(parseInt(e.target.id))
    })

    localStorage.setItem('favorite',JSON.stringify(filterObj))
    setState(Math.random())

  }


  return (

    JSON.parse(localStorage.getItem('favorite')).map((item,idx) => {
      return <div className='h-[8rem] w-[13rem] border-[2px] text-ellipsis overflow-x-auto bg-orange-200 border rounded-md font-serif shadow-lg' key={idx}>
        <div className='text-2xl'>
          <h2 className='font-serif text-rose-950 text-xl'>Author Is : {item.autherName}</h2>
        </div>

        <div className='text-fuchsia-800'>
          {item.autherSha}
        </div>

        <div className='flex'>
        
        
        <MdDelete id={idx} size={30}className='text-red-500 relative top-[30px] left-[60%]' onClick={handleDelete}/>
        </div>
        
      </div>
    })

  )
}

export default Favorite