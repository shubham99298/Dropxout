import React, { useEffect, useState } from 'react'

const Fetch = () => {
  const[users,setuser]=useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(Response=>Response.json())
        .then(data=>setuser(data))
        .catch(error=>console.error(error))
    })
  return (
    <div>
      <h1>user list </h1>
      <ul>
          {
            users.map( user=>{
             return<li key={user.id}>{user.price}</li>
           })
          }
      </ul>
    </div>
  )
}

export default Fetch
