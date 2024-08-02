import axios from 'axios'
import React, { useEffect } from 'react'

const AxiosDeleteData = () => {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1 ').then((response)=>{
            console.log(response);
        })
    },[]);
    const deleteRecord=()=>{
        axios.delete('https://jsonplaceholder.typicode.com/posts/1').then((response)=>{
            alert("post has been deleted!!!")
        })
    }
  return (
    <>
     <h1>Delete Data</h1> 
     <button onClick={deleteRecord}>Delete</button>
    </>
  )
}

export default AxiosDeleteData
