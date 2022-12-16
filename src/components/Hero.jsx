import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero-class'>
        <p>Medical Darpan {">"} Search {">"} FabiFlu Tablet</p>
        <form className='form' action="" >
           <input type="text" className='input' placeholder="Paracetamol"></input>
           <button type="submit" className='btn'>Search</button>
        </form>
      <div className='section'>
        <h4 className='med--class'>Paracetamol</h4><p>(128 products)</p>
        <button className='btn2'>Aceclofenac× </button>
        <button className='btn2'>500 mg× </button>
        <button className='btn3'>Remove all</button>
      </div>
    </div>
  )
}

export default Hero