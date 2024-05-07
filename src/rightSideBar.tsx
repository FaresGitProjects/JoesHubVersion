import 'rightSideBar.css';
import { StateContext } from 'StateProvider';
import { useContext, useEffect } from 'react';
import Counter from 'counter';
import { Link } from 'react-router-dom';
import { closeSideBars } from 'utils/utils';


interface RightBarProps {
  price: number;
}

function RightSideBar() {
  const { state, dispatch } = useContext(StateContext);

  return (
    <div className="rightSideBar">
      <div
        className={`s_listR 
            border-l-2 border-t-2 sm:mt-2 -mt-1
            border-neutral-400 z-10
            side-menuR 
            ${state.rightSideIsOpen ? 'open' : ''}
            ${state.shoppingCart.length === 0
            ? 'flex justify-center items-center'
            : ''
          }`}
      >
        {state.shoppingCart.length === 0 ? (
          <p className="sm:text-5xl text-4xl opacity-40 font-bold mb-72 text-gray-500 text-center">
            Your Cart Is Empty!
          </p>
        ) : (
          <>
            {state.shoppingCart.map((item, index) => (
              <div key={index} className="s_list_outerR hover:cursor-pointer">
                <div className="s_list_itemR flex items-center">
                  <p className="s_l_i_innerR w-10/12">{item.name}</p>
                  <Counter itemName={item.name} itemPrice={item.price} />
                </div>
              </div>
            ))}
            <Link to="checkout" onClick={() => closeSideBars(state, dispatch)}>
              <button
                className="checkout_button
              bg-red-600 w-full h-fit
              text-3xl text-white font-bold my-auto
              hover:bg-red-200 hover:text-red-600
              border-4 hover:border-dashed border-dotted
              hover:border-red-600 border-white transition 
              rounded-xs py-5
              "
              >
                Checkout
              </button>
            </Link>
          </>
        )}

      </div>
    </div>
  );
}

export default RightSideBar;
