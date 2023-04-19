import React from 'react'
import Header from 'header'
import LeftSideBar from 'leftSideBar'
import RightSideBar from 'rightSideBar'
import Welcome from 'welcome'
import Body from 'body'


const Menu = () => {
    return (
        <div className='Menu'>
            <Header />
            <LeftSideBar />
            <RightSideBar />
            <Welcome />
            <Body />
        </div>
    )
}

export default Menu