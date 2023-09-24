import React, { useState } from 'react'

const Form = () => {
    // const[name,setname]=useState("")
    // const[email,setemail]=useState("")
    // const[password,setpassword]=useState("")
    const[formdata,setformdata]=useState({
      name:'',
      email:'',
      password:''
    });

    // const[mail,setmail]=useState("")
  //   const handlename=(e)=>{
  //       console.log(e.target.value)
  //       setname(e.target.value)
  //   }
  //   const handleemail=(e)=>{
  //     console.log(e.target.value)
  //     setemail(e.target.value)
  // }
  // const handlepasssword=(e)=>{
  //   console.log(e.target.value);
  //   setpassword(e.target.value)
  // }
  // const handlesubmit=(e)=>{
  //   e.preventDefault();
  // }

  const handleinput=(e)=>{
    const{name,value}=e.target;

    setformdata({...formdata,[name]:value})
  }

  return (
    <div>
     
     <form >
     <label>
         Name:<input type='text' name='name' value={formdata.name} onChange={handleinput}/>
         {/* Email:<input type='email' value={mail} onChange={handleemail}/> */}
      </label>
      <label>
         Email:<input type='email' name='email' value={formdata.email} onChange={handleinput}/>
         {/* Email:<input type='email' value={mail} onChange={handleemail}/> */}
      </label>

      <label>
         Password:<input type='password' name='password' value={formdata.password} onChange={handleinput}/>
         {/* Email:<input type='email' value={mail} onChange={handleemail}/> */}
      </label>
      <button>submit</button>
      
     </form>

      
    </div>
  )
}

export default Form
