import React, { useState } from 'react'

const Toggle = () => {
    const [isVisible, setIsVisible]=useState(false)
  
    const HandleClick=()=>{
        setIsVisible(e=>!e)
    }
  
    return (
    <div>
      <button onClick={HandleClick}>
        {isVisible ? "Hide" :"Show"}
      </button>

      {isVisible  && ( 
        <p>Iam a devil </p>)}
    </div>
  )
}

export default Toggle
