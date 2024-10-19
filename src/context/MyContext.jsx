// import { createContext, useState } from "react";

// export const MyContext = createContext('')

//  export function HandleContext({children})
// {
//     const [obj,setObj] = useState([])
//     return <MyContext.Provider value={{obj,setObj}}>
//         {children}
//     </MyContext.Provider>
// }


import { createContext, useRef, useState } from "react";


export const MyContext = createContext()

export function ContextProvider({children})
{
    const [obj,setObj] = useState([])
    const auther = useRef()
    const [check,setCheck] = useState(true)
    
    return <MyContext.Provider value={{obj,setObj,auther,check,setCheck}}>{children}</MyContext.Provider>

    
}