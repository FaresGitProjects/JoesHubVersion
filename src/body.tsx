import React from 'react'
import Section from './section'
import { useEffect, useContext } from 'react'
import { StateContext } from 'StateProvider';


function Body() {
  const { state, dispatch } = useContext(StateContext);


  useEffect(() => {
    console.log("State updated:", state.shoppingCart);
  }, [state.shoppingCart]);
  return (
    <div className='body
      sm:px-0 mx-9 pb-6'>
      {/* {
        state.categories.map((category) => (
          <Section category={category} />
        ))
      } */}
      <Section
        category={state.categories[0]} />
      <Section
        category={state.categories[1]} />
    </div>
  )
}

export default Body;