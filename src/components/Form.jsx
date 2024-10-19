import React, { useContext, useRef } from 'react'
import { MyContext } from '../context/MyContext'

function Forms() {

const name = useRef('')
const sha = useRef('')

const {setObj} = useContext(MyContext)

function HandleSubmit(e)
{
    e.preventDefault()
    if(name.current.value=='' || name.current.value=='')
    {
        alert('you are missing something')
        return
    }
    const newObj = {'autherName':name.current.value , 'autherSha':sha.current.value}

    if(localStorage.getItem('items')==null || localStorage.getItem('item')=='')
    {
        const newArray = []
        localStorage.setItem('items',JSON.stringify([...newArray , newObj]))
    }
    else
    {
        const value = JSON.parse(localStorage.getItem('items'))
        console.log("value",value);
        localStorage.setItem('items',(JSON.stringify([...(JSON.parse(localStorage.getItem('items'))),newObj])))

        // localStorage.setItem('items',JSON.stringify([...value,newObj]))
    }
    setObj((prev)=> [...prev , newObj])
}

return (
    <form action="" onSubmit={HandleSubmit} className='border-[2px] h-[12rem] w-[20rem] flex flex-col justify-center items-center gap-4 bg-black text-white font-bold border rounded-xl'>

        <div className='w-[100%]  flex justify-around'>
            <div>
            <label htmlFor="userName">Name</label>
            </div>

            <div>
                <input 
                type="text" 
                name="username" 
                ref={name}
                placeholder='autherName'
                className='border rounded w-[10rem] text-black'
                />
            </div>
        </div>

        <div className='w-[100%]  flex justify-around'>
            <div>
            <label htmlFor="userName">Write Posts</label>
            </div>

            <div>
                <textarea 
                name="shayari" 
                placeholder='shayari'
                ref={sha}
                className='border rounded w-[10rem] text-black'
                ></textarea>
            </div>
        </div>

        <div>
            <div>
                <button className='border-[2px] bg-green-500 h-[50px] w-[100px] border rounded-lg'>Add post</button>
            </div>
        </div>
    </form>
  )
}

export default Forms