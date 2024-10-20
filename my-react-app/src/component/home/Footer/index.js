import {Component} from "react"
import "./index.css"

class Footer extends Component{
    render(){
        return(
            <div className="footer-bg-container">
                <h3>We are here to help you!</h3>

                <div className="list-container">
                    <ul>
                        <li><a href="https://corporate.indiamart.com/about-us/">About Us</a></li>
                        <li><a href="https://corporate.indiamart.com/partner-with-us/">Join Sales</a></li>
                        <li><a href="https://corporate.indiamart.com/category/success-stories/">Success Stories</a></li>
                        <li><a href="https://corporate.indiamart.com/category/indiamart-in-news/press-releases/">Press Section</a></li>
                        <li><a href="https://corporate.indiamart.com/advertise-with-indiamart/">Advertise with Us</a></li>
                        <li><a href="https://investor.indiamart.com/index.htm ">Investor Section</a></li>
                    </ul>
                    <ul>
                        <li><a href="https://help.indiamart.com/">Help</a></li>
                        <li><a href="https://help.indiamart.com/user-feedback/">Feedback</a></li>
                        <li><a href="https://help.indiamart.com/complaint-registration/">Complaints</a></li>
                        <li><a href="https://corporate.indiamart.com/customer-care-services/">Customer Care</a></li>
                        <li><a href="https://corporate.indiamart.com/careers-at-im/ ">Jobs & Careers</a></li>
                        <li><a href="https://corporate.indiamart.com/branch-offices/">Contact Us</a></li>
                    </ul>
                    <div>
                    <p>Suppliers Tool Kit</p>
                    <ul>
                        <li><a href="https://seller.indiamart.com/">Sell on IndiaMART</a></li>
                        <li><a href="https://seller.indiamart.com/bltxn/?pref=recent">Latest BuyLead</a></li>
                        <li><a href="https://corporate.indiamart.com/quick-learn/">Learning Centre</a></li>
                        <li><a href="https://shipwith.indiamart.com/">Ship With IndiaMART</a></li>
                    </ul>
                    </div>
                    <div>
                    <p>Buyers Tool Kit</p>
                    <ul>
                        <li><a href="//buyer.indiamart.com/buyertools/postbl?modid=IMHOME">Post Your Requirement</a></li>
                        <li><a href="//buyer.indiamart.com/buyertools/myproductbuy/?modid=IMHOME">Products You Buy</a></li>
                        <li><a href="https://www.indiamart.com/search.html">Search Products & Suppliers</a></li>
                    </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer