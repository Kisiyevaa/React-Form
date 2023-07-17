import React from 'react'
import DataItem from './DataItem'

function Qeyd2({data}) {
  return (
     <ul className=' mt-5 p-5 border-double border-4 border-rose-600 w-[450px]'> 
        {
            data.map((item,index)=><DataItem {...item} key={index}/>)
        }
    </ul>
  )
}

export default Qeyd2