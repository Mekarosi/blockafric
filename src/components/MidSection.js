import React, { Component } from 'react'
import image5 from '../images/image5.JPG'
import image6 from '../images/image6.JPG'
import image7 from '../images/image7.JPG'

class MidSection extends Component {
    render() {
        return (
            <div>
                <div className="mid_sectionA">
                    <div className="mid_sectionA_one">
                        <span>
                            <h5 className="white_circle"><span className="white_circle_text1"
                            >AFYA</span> </h5>
                            <p className="mid_section_number">143.00</p>
                            <p className="mid_section_text">Balance</p>
                        </span>

                    </div>
                    <div>
                        <span className="vertical_line"></span>
                    </div>
                    <div className="mid_sectionA_two">
                    <span>
                            <h5 className="white_circle"><span className="white_circle_text2">ZAR</span></h5>
                            <p className="mid_section_number">R21.00</p>
                            <p className="mid_section_text">Equivalent</p>
                        </span>

                    </div>
                    
                </div>
                <div className="mid_sectionB">
                    <div className="mid_sectionB_one">
                      <p className="mid_sectionB_one_text">Select Currency:</p>
                    </div>

                </div>
                <div className="mid_convert_factor">
                    <div>
                        <span className="mid_convert_factor_text">AFYA</span> <span className="mid_convert_factor_number">0.00000001</span>
                    </div>
                    </div>
                    <div className="send_receive">
                        <div>
                            <p className="send_text"><span className="send_text_item">SEND</span></p>
                        </div>
                        <div>
                            <p className="receive_text"><span className="receive_text_item">RECEIVE</span></p>
                        </div>
                       
                    </div>

                    <div className="mid_sectionB">
                        <div className="mid_sectionB_one">
                            <p className="mid_sectionB_one_textB">Recent Activity</p>
                        </div>
                        <br/>

                    </div>

                    <ul>
                        <li className="recent_activities_list">
                            <span><img src={image5} className='' alt='battery' /></span>
                            <p>HIV Blood Draw Test</p>
                            <p>A100</p>

                        </li>
                        <li className="recent_activities_list">
                            <span><img src={image6} className='' alt='battery' /></span>
                            <p>TB Radiology XRay</p>
                            <p>A30</p>
                        </li>
                        <li className="recent_activities_list">
                        <span><img src={image7} className='' alt='battery' /></span>
                            <p>Blood Pressure Check</p>
                            <p>A10</p>
                        </li>
                    </ul>

                    <div className="mid_sectionD"></div>
                <br/>
                


            </div>
        )
    }
}
export default MidSection