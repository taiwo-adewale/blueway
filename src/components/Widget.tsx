import React, { useState } from 'react'

function Widget() {
  const[active, setActive] = useState(false)
  const[active2, setActive2] = useState(false)
  function HandleToggle(){
    setActive(current => !current)
  }
  return (
    <div style={{marginTop: '20px'}}>
      <div className='widgets'><h1 className={active ? 'widgTogs': ''} onClick={HandleToggle}>Monthly</h1><h1>Yearly</h1></div>
      <div className="text">
        <h3>Already have an account?</h3>
        <a href="#">Sign in</a>
      </div>
    </div>
  )
}

export default Widget;