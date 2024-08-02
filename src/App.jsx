import React from 'react'
import AxiosGetREquest from './Component/AxiosGetREquest'
import AxiosPostRequest from './Component/AxiosPostRequest'
import AxiosPutRequest from './Component/AxiosPutRequest'
import AxiosDeleteData from './Component/AxiosDeleteData'
import './index.css'; // or './App.css'

const App = () => {
  return (
    <>
     <h1>App.jsx</h1> 
     <AxiosGetREquest/> 
     <AxiosPostRequest/>
      <AxiosPutRequest/>
     <AxiosDeleteData/>
    </>
  )
}

export default App
