import {Component} from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import { CiShoppingTag } from "react-icons/ci"
import { IoStorefrontOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineAssignmentInd } from "react-icons/md";
import Banner from './Banner';
import Main from './Main';
import HelpFooter from './Helpfooter';


class Help extends Component{
    render(){
        return(
            <div>
                <header className='header'>
                    <div className='header-container'>
                        <Link to="/" className='link-tag'>
                            <div className='header-logo-container'>
                                <img src='https://banner2.cleanpng.com/20190615/fhv/kisspng-indiamart-business-to-business-service-online-mark-ambition-industry-1713887040647.webp' className='indiamart-logo' alt='logo' />
                                <h1>indiamart</h1>
                            </div>
                        </Link>
                        <div className='header-search-input-container'>
                            <div className='header-search-input'>
                                <input type='text' className='header-input'/>
                                <button className='input-button'>Search</button>
                            </div>
                            <div>
                                <a href="//buyer.indiamart.com/buyertools/postbl?modid=IMHOME">
                                <button className='header-best-price-button'>Get best price</button>
                                </a>
                            </div>
                        </div>
                        <ul className='header-list-container'>
                            <li className='header-list'>
                                <CiShoppingTag />
                                <p>Shoping</p>
                            </li>
                            <li className='header-list'>
                                <IoStorefrontOutline />
                                <p>Sell</p>
                            </li>
                            <Link to="/help" className='link-tag'>
                                <li className='header-list'>
                                    <IoMdHelpCircleOutline />
                                    <p>Help</p>
                                </li>
                            </Link>
                            <li className='header-list'>
                                <FiMessageSquare />
                                <p>Message</p>
                            </li>
                            <li className='header-list'>
                                <MdOutlineAssignmentInd />
                                <p>Sign In</p>
                            </li>
                        </ul>
                    </div>
                </header>
                <Banner/>
                <Main/>
                <HelpFooter/>
            </div>
        )
    }
}

export default Help