import React from 'react'
import { useState, useEffect } from 'react';



const WorkName = () => {


  const [time, setTime] = useState(new Date());


  useEffect(() => {
    // console.log("setup timing")
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("ending timeing")
    }
  }, []);



  return (
    <>
      <h1>Work-Plan</h1>
      <span> Current Time Zone : {time.toLocaleTimeString()} </span>
    </>
  )
}

export default WorkName