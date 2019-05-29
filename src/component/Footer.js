import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="dummy_page"></div>
                <div className="footer" id="footer">
                    <div className="contain container" >
                        <div className="row">
                            <div className="col col-xl-3 col-md-3 col-sm-3">
                                <h1>Q Mart</h1>
                                <ul>
                                    <li>Address </li>
                                    <li>Peoples Colony # 1  D-ground Faisalabad</li>
                                    {/* <li>Cash On Delivery</li> */}
                                </ul>
                            </div>
                            <div className="col col-xl-3 col-md-3 col-sm-3">
                                <h1>Information</h1>
                                <ul>
                                    <li>Delivery Within 24 Hours</li>
                                    <li>Delivery Time 09:00 AM  To 09:00 PM</li>
                                </ul>
                            </div>
                            <div className="col col-xl-3 col-md-3 col-sm-3">
                                <h1>Contact US</h1>
                                <ul>
                                    <li>Email : Mirza.ali710@gmail.com</li>
                                    <li>Any Complaint Call Us At<br/> 0306-4898918</li>
                                </ul>
                            </div>
                            <div className="col col-xl-3 col-md-3 col-sm-3">
                                <h1>About</h1>
                                <ul>
                                    {/* <li>Webmail</li>
                                    <li>Redeem code</li>
                                    <li>WHOIS lookup</li>
                                    <li>Site map</li>
                                    <li>Web templates</li>
                                    <li>Email templates</li> */}
                                </ul>
                            </div>
                            {/* <div class="col social">
                        <h1>Social</h1>
                        <ul>
                            <li><img src="https://svgshare.com/i/5fq.svg" width="32" style="width: 32px;"/></li>
                            <li><img src="https://svgshare.com/i/5eA.svg" width="32" style="width: 32px;"/></li>
                            <li><img src="https://svgshare.com/i/5f_.svg" width="32" style="width: 32px;"/></li>
                        </ul>
                    </div> */}
                            {/* <div class="clearfix"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
