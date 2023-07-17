import React from 'react'

function DataItem(props){
  return (
    <li className='text-left pt-3 text-xl font-medium block'>
       <p>Ad:{props.ad}</p>
       <p>Soyad:{props.soyad}</p>
       <p>Email:{props.email}</p>
    </li>

  )
}

export default DataItem