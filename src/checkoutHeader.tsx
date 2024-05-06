import React from 'react';
import { Link } from 'react-router-dom';
import 'header.css';

// interface HeaderProps {
//     children: React.ReactNode;
//   }

const CheckoutHeader: React.FC = () => {

    return (
        <div
            className="header
        flex w-full bg-white z-10
        border-b-red-500 border-b-2
        shadow-md shadow-neutral-400"
        >
            <Link to="/">
                <nav
                    className="h_logo
                text-red-500 hover:cursor-pointer
                p-3 sm:text-5xl text-3xl
                sm:ml-8
                "
                >
                    Alex&#39;s
                </nav>
            </Link>
            <nav
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
                        Checkout & Order Summary
                    </span>
                </div>
            </nav>
        </div>
    );
};

export default CheckoutHeader;
