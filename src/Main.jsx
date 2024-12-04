import React, { useEffect, useState } from 'react'
import OpeningScreen from './Components/Preloader/OpeningScreen'
import './Global.css'
import Home from './Components/Home/Home'
const Main = () => {
  let [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },4000)
  })
  return (
    <div className='bodyMain'>
        {loading?<OpeningScreen/>:<Home/>}
    </div>
  )
}

export default Main
