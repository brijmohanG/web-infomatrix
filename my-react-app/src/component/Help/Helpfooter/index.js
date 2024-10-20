import {Component} from "react"
import "./index.css"
import { IoLogoWhatsapp } from "react-icons/io";


class HelpFooter extends Component{
    render(){
        return(
            <div className="help-footer-bg-container">
                <div>
                    <a href="https://corporate.indiamart.com/about-us/" className="help-footer-link">About Us</a><br/>
                    <a href="https://corporate.indiamart.com/partner-with-us/" className="help-footer-link">Join Sales</a><br/>
                    <a href="https://help.indiamart.com" className="help-footer-link">Help</a><br/>
                    <a href="https://help.indiamart.com/user-feedback/" className="help-footer-link">Feedback</a><br/>
                    <a href="https://help.indiamart.com/complaint-registration/" className="help-footer-link">Complaints</a><br/>
                    <a href="https://corporate.indiamart.com/branch-offices/" className="help-footer-link">Contact Us</a><br/>
                    <a href="https://corporate.indiamart.com/customer-care-services/" className="help-footer-link">Customer Care</a><br/>
                    <a href="https://help.indiamart.com/knowledge-base/security-measures-of-indiamart/#Buyers" className="help-footer-link">Security Tips for Buyers</a><br/>
                </div>
                <div>
                    <a href="https://corporate.indiamart.com/about-us/" className="help-footer-link">Sell on IndiaMART</a><br/>
                    <a href="https://corporate.indiamart.com/partner-with-us/" className="help-footer-link">Learning Center</a><br/>
                    <a href="https://help.indiamart.com" className="help-footer-link">Enterprise Solutions</a><br/>
                    <a href="https://help.indiamart.com/user-feedback/" className="help-footer-link">Success Stories</a><br/>
                    <a href="https://help.indiamart.com/complaint-registration/" className="help-footer-link">Press Section</a><br/>
                    <a href="https://corporate.indiamart.com/branch-offices/" className="help-footer-link">Advertise with Us</a><br/>
                    <a href="https://corporate.indiamart.com/customer-care-services/" className="help-footer-link">Security Tips for Sellers</a><br/>
                </div>
                <div>
                    <div className="help-footer-card-container">
                        <div>
                            <h1 className="help-card-heading">WhatsApp:</h1>
                            <p>+91-9696969696</p>
                        </div>
                        <div>
                            <IoLogoWhatsapp className="whatspp-logo"/>
                        </div>
                    </div>
                    <div className="second-card-container">
                        <div>
                            <h1 className="help-card-heading">Email us:</h1>
                            <p>customercare@indiamart.com</p>
                        </div>
                    </div>
                    <div className="second-card-container">
                        <div>
                            <h1 className="help-card-heading">Call us:</h1>
                            <p>096-9696-9696</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HelpFooter