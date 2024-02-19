import React from 'react'
import '../App.css'

const Home = (props) => {
  return (
    <div className='Home'>
        <div class='ripple-background'>
        <div class='circle xxlarge shade1'></div>
        <div class='circle xlarge shade2'></div>
        <div class='circle large shade3'></div>
        <div class='circle mediun shade4'></div>
        <div class='circle small shade5'></div>
      </div>
      
      <div className='text-end font-monospace'>
        <h1 className='text'>AUCTION SYSTEM</h1>
        <p className='text1'>buy your most-liked fittings</p></div>
       </div>

    
  )
}

export default Home