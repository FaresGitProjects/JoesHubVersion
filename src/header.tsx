import React from 'react'
import 'header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { StateContext } from 'StateProvider';
import { State } from 'StateProvider';

// interface HeaderProps {
//     children: React.ReactNode;
//   }

const Header: React.FC = () =>  {
    const sc = useContext<State>(StateContext);

    function toggleMenu(side: string) {
        if(side==="right") {
            sc.setRightSideIsOpen(!sc.rightSideIsOpen);
            sc.setLeftSideIsOpen(false);
        }
        else if(side==="left") {
            sc.setLeftSideIsOpen(!sc.leftSideIsOpen);
            sc.setRightSideIsOpen(false);
        }
    }

    return (
        <div className='header 
        shadow-lg shadow-stone-400 
        flex fixed w-full top-0 bg-white z-10'>
            <nav className='h_logo
            text-red-500 hover:cursor-pointer
            p-3 sm:text-5xl text-3xl
            sm:ml-8
            '>
                Joe&#39;s
            </nav>
            <nav onClick={() => {toggleMenu("left")}} className='h_menu
            shadow-stone-400 text-center 
            flex items-center
            sm:text-2xl text-xl
            '>
                <div className='h_menu_inner 
                border-b-8 border-white
                transition-colors ease-in-out hover:cursor-pointer
               hover:border-b-red-600 pt-3 sm:ml-5 ml-3'
                >
                    <span className='flex items-center '>
                        Menu
                        <FontAwesomeIcon icon={faAngleDown} 
                        className={`mt-0.5 mx-1.5 transition-transform duration-200
                        ease-out ${sc.leftSideIsOpen?'-rotate-180':''}`}/>
                    </span>
                </div>
            </nav>
            <nav  className='h_cart 
                flex flex-grow justify-end
                '>
                <div  onClick={() => {toggleMenu("right")}} className='h_cart_inner 
                    flex items-center
                    px-3 py-2 sm:pr-24 hover:cursor-pointer
                    border-b-8 border-white hover:border-b-red-600
                    transition-colors ease-in-out
                    sm:text-xl text-sm
                    '>
                    <div className='h_cart_track
                        pr-2'>
                        <p className='h_cart_track_count 
                        border-b-2 border-b-black'>5</p>
                        <p className='h_cart_track_total
                        border-b-2 border-b-black'>$ 0.00</p>
                    </div>
                    <FontAwesomeIcon className='text-4xl' icon={faCartShopping} />
                </div>
            </nav>
        </div>
    )
}


export default Header;