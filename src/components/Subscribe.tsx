import React from 'react'

const Subscribe = () => {
  return (
    <div style={{ textAlign:'center'}} className='subscribe'>
        <div className="sunText">
            <h1>Subscribe to <span style={{color:'red', opacity:'80%'}}>B</span>lueway</h1>
            <p>Get the latest posts delivered right to your email.</p>
        </div>
        <form style={{display:'flex', justifyContent: 'center',marginBottom:"4%"}} autoComplete='on'>
            <input type="text" name="" id="" placeholder='Enter your email address' autoComplete='email'/>
            <div className="submit"><input type="submit" value="Submit" /></div>
        </form>
    </div>
  )
}

export default Subscribe;