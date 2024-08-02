import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosPutRequest = () => {
    const[post,setpost]=useState({
        title:'',
        body:''
    })
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1 ').then((result)=>{
            console.log(result.data)
        })
         },[])
    const handleInput=(e)=>{ 
        setpost({...post,[e.target.name]:e.target.value})
    }
    const handlesubmit=(e)=>{
      e.preventDefault();
      axios.put('https://jsonplaceholder.typicode.com/posts/1 ',{post}).then((response)=>{
        console.log(response.data);
      })

    }
  return (
    <>
     <h1>Axios put Request</h1> 
     <form >
        <input type="text" name='title' placeholder='Enter title' onChange={handleInput} /><br /><br />
        <input type="text" name='body' placeholder='Deescription' onChange={handleInput} /><br /><br />
        <button onClick={handlesubmit}>Submit</button>
     </form>
    </>
  )
}

export default AxiosPutRequest
