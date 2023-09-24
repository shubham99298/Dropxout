import React, { useEffect, useState } from 'react'

const MultipleReturn = () => {
    const[users,setuesrs]=useState([]);
    const[isloading,setisloading]=useState(true);
    const[error,setrror]=useState(null);

    useEffect(()=>{
        async function fetchusers(){
            try{
                const response=await fetch ('https://api.github.com/users');
                const data=await response.json()
                setuesrs(data);
                setisloading(false);
            }
            catch(error){
                setrror(error);
                setisloading(false)
            }
        }
        fetchusers();
    },[])

    if(isloading){
        return<p>loading...</p>
    }

    if(error){
        return<p>error:{error.message}</p>
    }

  return (
    <div>
       <h1>users list</h1>
       <ul>
          {
            users.map(user=>{
                return<li key={user.id}>{user.login}</li>
            })
          }
       </ul>
    </div>
  )
}

export default MultipleReturn
