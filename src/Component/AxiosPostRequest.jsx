import axios from 'axios'
import React, { useState } from 'react'

const AxiosPostRequest = () => {
    const[post,setpost]=useState({title:'',body:''})
    const handleInput=(e)=>{
    setpost({...post,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts ', {post}).then((response)=>{
            console.log(response);
        })
    }
  return (
    <>
     <h1>AxiosPostRequest</h1> 
     <form onSubmit={handlesubmit}>
        <input type="text" name="title" placeholder='title' onChange={handleInput} /><br /><br />
        <input type="text" name="body" placeholder='body' onChange={handleInput} /><br /><br />
        <button onClick={handlesubmit}>Submit</button>
     </form>
    </>
  )
}

export default AxiosPostRequest
