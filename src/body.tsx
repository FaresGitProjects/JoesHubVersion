import React from 'react'
import Section from './section'

function Body() {
  return (
    <div className='body'> 
      <Section 
        sectTitle='Pizza'/>
      <Section 
        sectTitle='Sides'/>
    </div>
  )
}

export default Body;