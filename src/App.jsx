import React, { useEffect, useState } from 'react'
import { createBrowserRouter, Form, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Card from './components/Card'
import Forms from './components/Form'
import { ContextProvider } from './context/MyContext'
import Favorite from './components/Favorite'


function App() {


  const [obj,setObj] = useState([])
  const routes = createBrowserRouter([

    {path:'' , Component:Home , children:[
      {path:'/posts',element:<Card></Card>},
      {path:'/createPost',element:<Forms ></Forms>},
      {path:'/favorite',element:<Favorite></Favorite>},
    ]}
  ])

  return (
    <ContextProvider>
         <RouterProvider router={routes} />
    </ContextProvider>
  )
}

export default App