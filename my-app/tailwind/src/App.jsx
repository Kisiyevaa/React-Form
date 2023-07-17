import Qeyd from './Qeyd'
import './App.css'
import { useState } from 'react'
import Qeyd2 from './Qeyd2'

function App() {
  const [data,setData]=useState([])
  return (
   <div>
    <Qeyd data={data} setData={setData}/>
    <Qeyd2 data={data}/>
   </div>
  )
}

export default App
