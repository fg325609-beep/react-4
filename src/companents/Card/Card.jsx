import React, { useEffect } from 'react'
import "../Card.scss";
import { useState } from 'react';

function Card  (){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch("https://69e05e1129c070e6597b67e3.mockapi.io/students")
    })
  return (
    <div className='one'>

    </div>
  )
}

export default Card