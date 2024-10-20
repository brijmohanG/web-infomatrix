import {Component} from "react"
import "./index.css"
import { FaRegLightbulb } from "react-icons/fa6"

class Banner extends Component{
    render(){
        return(
            <div className="help-banner-bg-container">
                <div>
                    <a href="https://help.indiamart.com/article-categories/buyer-help/" className="help-section">
                        <div>
                            <FaRegLightbulb className="help-section-bulb"/>
                        </div>
                        <div>
                            <h4 className="help-section-heading">I'm a Buyer</h4>
                            <h5 className="help-section-heading">79 Articles / 4 Categories</h5>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://help.indiamart.com/article-categories/seller-help/" className="help-section">
                        <div>
                            <FaRegLightbulb className="help-section-bulb"/>
                        </div>
                        <div>
                            <h4 className="help-section-heading">I'm a Seller</h4>
                            <h5 className="help-section-heading">315 Articles / 8 Categories</h5>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="https://help.indiamart.com/product-updates/" className="help-section">
                        <div>
                            <FaRegLightbulb className="help-section-bulb"/>
                        </div>
                        <div>
                            <h4 className="help-section-heading">Product Updates</h4>
                            <h5 className="help-section-heading">17 Articles / 8 Categories</h5>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Banner