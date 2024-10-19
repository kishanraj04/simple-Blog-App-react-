import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { MyContext } from '../context/MyContext';
import { MdFavorite } from "react-icons/md";


function Card() {

  const context = useContext(MyContext)
  const locanStorageValue = JSON.parse(localStorage.getItem('items'))

  if(!context.obj)
  {
    return
  }

  function handleDelete(e)
  {
    const filterObj = locanStorageValue.filter((value,idx)=>
    {
      return idx!=(parseInt(e.target.id))
    })

    localStorage.setItem('items',JSON.stringify(filterObj))
    context.setObj(filterObj)
  }



  function AddFavorite(e)
  {
  
    
    const favoriteArray = JSON.parse
    (localStorage.getItem('items')).filter((value,idx)=>
    {
      return idx==(e.target.id)
    })
    
    
    if(JSON.parse(localStorage.getItem('favorite')==null))
    {
      console.log("hii");
      localStorage.setItem('favorite',JSON.stringify(favoriteArray))
    }
    else
    {
      localStorage.setItem('favorite',JSON.stringify([...JSON.parse(localStorage.getItem('favorite')),...favoriteArray]))
    }

    
  }

  
  if(JSON.parse(localStorage.getItem('items'))==null)
  {
    return <><h1 className='text-3xl font-serif text-blue-700'>Create Your Posts</h1>
    
    </>
  }

  return (

    JSON.parse(localStorage.getItem('items')).map((item,idx) => {
      return <div className='h-[8rem] w-[13rem] border-[2px] text-ellipsis overflow-x-auto bg-orange-200 border rounded-md font-serif shadow-lg' key={idx}>
        <div className='text-2xl'>
          <h2 className='font-serif text-rose-950 text-xl'>Author Is : {item.autherName}</h2>
        </div>

        <div className='text-fuchsia-800'>
          {item.autherSha}
        </div>

        <div className='flex'>
        
        
        <MdFavorite id={idx} size={30}className='text-red-500 relative top-[30px] left-[55%]' onClick={AddFavorite}/>
        
        
        <MdDelete id={idx} size={30}className='text-red-500 relative top-[30px] left-[60%]' onClick={handleDelete}/>
        </div>
        
      </div>
    })

  )
}

export default Card