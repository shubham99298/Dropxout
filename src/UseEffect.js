import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [clicked,setclicked]=useState();
    const[count,setcount]=useState(0);

      useEffect(()=>{
         alert('we r in use state')
         return(
            ()=>{
                console.log("return of use State")
            }
         )
      },[clicked])
   
  return (
    <div>
      <button onClick={()=>setclicked('subscribed')}>subscirbe</button>
      <br/>
      <button onClick={()=>setclicked('to')} >to</button>
     
      <button onClick={()=>setclicked('my channel')}>my channel</button>
      <h1>{clicked}</h1>
      <button onClick={()=>{setcount(count+1)}}>Increment</button>
      <h1>{count}</h1>
    </div>
  )
}

export default UseEffect
