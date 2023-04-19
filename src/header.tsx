import React from 'react';
import 'header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { StateContext } from 'StateProvider';
import { ActionTypes } from 'action';
import { formatPrice } from 'utils/utils';
import { Link } from 'react-router-dom';
import { closeSideBars } from 'utils/utils';
// interface HeaderProps {
//     children: React.ReactNode;
//   }

const Header: React.FC = () => {
  const { state, dispatch } = useContext(StateContext);

  function toggleMenu(side: string) {
    if (side === 'right') {
      dispatch({ type: ActionTypes.TOGGLE_RIGHT_SIDE });
      // sc.setRightSideIsOpen(!sc.rightSideIsOpen);
      if (state.leftSideIsOpen) {
        dispatch({ type: ActionTypes.TOGGLE_LEFT_SIDE });
      }
    } else if (side === 'left') {
      dispatch({ type: ActionTypes.TOGGLE_LEFT_SIDE });
      // sc.setRightSideIsOpen(!sc.rightSideIsOpen);
      if (state.rightSideIsOpen) {
        dispatch({ type: ActionTypes.TOGGLE_RIGHT_SIDE });
      }
    }
  }

  return (
    <div
      className="header
        flex fixed w-full top-0  border-b-red-500 border-b-2
        bg-white z-10 shadow-md shadow-neutral-400"
    >
      <Link to="/">
        <nav
          className="h_logo
            text-red-500 hover:cursor-pointer
            p-3 sm:text-5xl text-3xl
            sm:ml-8
            "
        >
          Joe&#39;s
        </nav>
      </Link>
      <nav
        onClick={() => {
          toggleMenu('left');
        }}
        className="h_menu
            text-center 
            flex items-center
            sm:text-2xl text-xl
            "
      >
        <div
          className="h_menu_inner 
                border-b-8 border-white
                transition-colors ease-in-out hover:cursor-pointer
               hover:border-b-red-600 pt-3 sm:ml-5 ml-3"
        >
          <span className="flex items-center ">
            Menu
            <FontAwesomeIcon
              icon={faAngleDown}
              className={`mt-0.5 mx-1.5 transition-transform duration-200
                        ease-out ${state.leftSideIsOpen ? '-rotate-180' : ''}`}
            />
          </span>
        </div>
      </nav>
      <nav
        className="h_button_container
        flex flex-grow justify-end"
      >
        <Link to="checkout" onClick={() => closeSideBars(state, dispatch)}>
          <button
            className="checkout_button
            bg-red-600 w-fit h-full px-4 
            text-2xl text-white font-bold
            hover:bg-red-200 hover:text-red-600
            border-4 hover:border-dashed border-dotted
            hover:border-red-600 border-white transition rounded-s-full
            sm:block hidden
          "
          >
            Checkout
          </button>
        </Link>
      </nav>
      <nav
        className="h_cart 
                flex flex-grow-0 justify-end
                "
      >
        <div
          onClick={() => {
            toggleMenu('right');
          }}
          className="h_cart_inner 
                    flex items-center
                    px-3 sm:pr-24 hover:cursor-pointer
                    border-b-8 border-white hover:border-b-red-600
                    transition-colors ease-in-out
                    sm:text-xl text-sm
                    "
        >
          <div
            className="h_cart_track
                        pr-2"
          >
            <p
              className="h_cart_track_count 
                        border-b-2 border-b-black"
            >
              {state.shoppingCart.reduce((prev, curr) => {
                return prev + curr.count;
              }, 0)}
            </p>
            <p
              className="h_cart_track_total
                        border-b-2 border-b-black"
            >
              {formatPrice(
                state.shoppingCart.reduce(
                  (prev, curr) => prev + curr.price * curr.count,
                  0
                )
              )}
            </p>
          </div>
          <FontAwesomeIcon className="text-4xl" icon={faCartShopping} />
        </div>
      </nav>
    </div >
  );
};

export default Header;
