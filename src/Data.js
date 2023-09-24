import React, { useState } from 'react'
import Datas from './Data.json'

const Data = () => {
    const [ndata,setndata] =useState(Datas)

    const  handle=(()=>{
      setndata([])
    })
    
    const handle1 =(itemid)=>{
           setndata(ndata.filter(item=>item.id!==itemid))
    }
  return (
    <div>
      
      <ul>
       {
        ndata.map(  items=>
            <li key={items.id}>
             {items.name}
             <br/>
             <button onClick={() =>handle1(items.id)}>remove</button>
            </li>
        )
       }
      </ul>
      <button onClick={handle}>click</button>
    </div>
  )
}

export default Data
