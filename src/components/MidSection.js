import React, { Component } from 'react'

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
            </div>
        )
    }
}
export default MidSection