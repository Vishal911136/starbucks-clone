import { useState } from 'react';
import {MdLocationOn} from 'react-icons/md'
import {IoIosArrowForward} from 'react-icons/io'

const Header = () =>{

    const [toggle,setToggle] = useState(false);

    return(
        <>
            <header className="d_flex">
                <div className="nav-container d_flex">
                    <div className="d_flex">
                        <div className="logo">
                            <img src="https://logos-download.com/wp-content/uploads/2016/03/Starbucks_Logo_1987.png" alt="" />
                        </div>
                        <div className="nav_links d_flex">
                            <li><a href="/">menu</a></li>
                            <li><a href="/">rewards</a></li>
                            <li><a href="/">gift cards</a></li>
                        </div>
                    </div>

                        <div className="d_flex header_right">
                            <div className="d_flex">
                                <div style={{marginTop:'8px'}}>
                                <MdLocationOn/>
                                </div>
                                <a href="/"> 
                                Find a store</a>
                            </div>
                            <button className='sign_in'>Sign in</button>
                            <button className='join_now'>Join now</button>
                        </div>
                </div>
                
                <div className="toggle_container">
                    <div className={toggle?"toggle_btn opan toggle_btn":"toggle_btn open toggle_btn"} onClick={() =>{
                        setToggle(!toggle);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>

            <div className={toggle?"sm_header":"sm_header close"} >
                <ul>
                    <div className="menu_btn">
                        <p className='link'>Menu</p>
                        <IoIosArrowForward/>
                    </div>
                    <li><a href="/">Rewards</a></li>
                    <li><a href="/">Gift Cards</a></li>
                </ul>

                <div className="d_flex" style={{margin:'2rem 0'}}>
                            <button className='sign_in'>Sign in</button>
                            <button className='join_now' style={{marginLeft:'1rem'}}>Join now</button>
                            <div className="d_flex">
                                <div style={{marginTop:'8px'}}>
                                <MdLocationOn/>
                                </div>
                                <a href="/"> 
                                Find a store</a>
                            </div>
                </div>
                
            </div>
        </>
    )
}

export default Header;