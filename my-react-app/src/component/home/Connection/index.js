import { Component } from "react"
import { MdOutlineStars } from "react-icons/md";
import { AiTwotoneSafetyCertificate } from "react-icons/ai"
import { MdOutlineQuickreply } from "react-icons/md"
import "./index.css"
// src/index.js or src/App.js
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';





class Connection extends Component {
    render() {
        return (
            <div className="connection-bg-container">
                <div className="trust-bg-container">
                    <div>
                        <h2>
                            We connect
                            <span className="connect-span">
                                Buyers
                            </span> &
                            <span className="connect-span">
                                Sellers
                            </span>
                        </h2>
                        <p>IndiaMART is India's largest online B2B marketplace, connecting buyers with suppliers.</p>
                    </div>
                    <div className="trust-container">
                        <div className="trust">
                            <MdOutlineStars className="icons"/>
                            <p>Trusted Platform</p>
                        </div>
                        <div className="trust">
                            <AiTwotoneSafetyCertificate className="icons"/>
                            <p>Safe & Secure</p>
                        </div>
                        <div className="trust">
                            <MdOutlineQuickreply className="icons"/>
                            <p>Quick Assistance</p>
                        </div>
                    </div>
                </div>
                <div className="carousel-container">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <a href="https://youtu.be/M9otyTcg0LU">
                                <img
                                    className="d-block w-100"
                                    src="https://hm.imimg.com/imhome_gifs/ss_money.jpg"
                                    alt="First slide"
                                />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img
                                className="d-block w-100"
                                src="https://hm.imimg.com/imhome_gifs/home-banner-4.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        )
    }
}

export default Connection