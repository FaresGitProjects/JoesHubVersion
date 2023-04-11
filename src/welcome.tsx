import React from 'react'
import './welcome.css'
import { useContext } from 'react';
import { StateContext } from 'StateProvider';


function Welcome() {
  const sc = useContext(StateContext)

  return (
    <div className='welcome
    flex flex-col items-center
    my-16 sm:my-14 pt-16'>
      <h1 className="w_title text-3xl font-bold mb-4">
        <span className="text-orange-500">W</span>
        <span className="text-green-500">e</span>
        <span className="text-orange-500">l</span>
        <span className="text-green-500">c</span>
        <span className="text-orange-500">o</span>
        <span className="text-green-500">m</span>
        <span className="text-orange-500">e</span>
        <span className="text-green-500"> </span>
        <span className="text-orange-500">t</span>
        <span className="text-green-500">o</span>
        <span className="text-orange-500"> </span>
        <span className="text-red-500">J</span>
        <span className="text-green-700">o</span>
        <span className="text-red-500">e</span>
        <span className="text-green-700">'</span>
        <span className="text-red-500">s</span>
        <span className="text-green-700">!</span>
      </h1>
      <p className='w_body
      text-2xl w-3/4 sm:w-1/2 text-center'>
        Discover our delicious pizzas and 
        find the perfect slice to satisfy 
        your cravings today.
      </p>
    </div>
  )
}

export default Welcome;