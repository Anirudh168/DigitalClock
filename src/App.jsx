import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [currentDate,setCurrentDate] = useState(new Date());
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCurrentDate(new Date());
    });
    return ()=>clearInterval(timer);
  },[]);
  const formatDay = () =>{
    const options = {weekday:"long",year:"numeric",month:"long",day:"numeric"}
    return currentDate.toLocaleDateString(undefined,options);
  }
  const formatHours=()=>{
    const hours = currentDate.getHours();
    return hours===0?12:hours>12?hours-12:hours; 
   };
   const formatPadding=(format)=>{
    return format>=10?format:`0${format}`;
   }
  return (
    <div className='h-screen flex justify-center items-center bg-gray-800'>
      <div className='bg-white p-3 w-xl rounded-lg'>
          <div className='text-4xl font-bold text-red-500 text-center my-5'>Digital Clock</div>
          <div className='my-3'>
          <div className='text-center font-bold text-3xl mt-2'>{formatPadding(formatHours(currentDate.getHours()))}:{formatPadding(currentDate.getMinutes())}:{formatPadding(currentDate.getSeconds())} {currentDate.getHours()>=12?'PM':'AM'}</div>
          <div className='text-center text-2xl text-gray-600 mt-2'>{formatDay()}</div>
          </div>
      </div>
    </div>
  )
}

export default App
