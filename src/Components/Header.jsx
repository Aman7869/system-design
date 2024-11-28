import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='bg-black text-white p-2'>
            <ul className='flex  gap-5 justify-center'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/infinite-scroll">Infinite Scroll</Link></li>
                <li><Link to="/accordian">Accordian</Link></li>
                <li><Link to="/nested-comment">Nested Comments</Link></li>
                <li><Link to="/pagination">Pagination</Link></li>
                <li><Link to="/live-chat">Live Chat</Link></li>
                <li><Link to="/searchbar">Search Bar</Link></li>
            </ul>
        </div>
    )
}

export default Header