import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosGetREquest = () => {
        const[mydata,setdata]=useState([]);
    useEffect(()=>{
    let url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url).then((response)=>{
        // console.log(response);
        setdata(response.data)
    }) 
},[])
  return (
    <>
     <h1>Axios get Request</h1> 
     {
        mydata.map((item,i)=>{
            return(
                <h3 key={i}>{item.name}</h3>
            )
        })
     }
    </>
  )
}

export default AxiosGetREquest
