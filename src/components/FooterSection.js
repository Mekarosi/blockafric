import React, { Component } from 'react'
import image8 from '../images/image8.JPG'
import image10 from '../images/image10.JPG'
import image11 from '../images/image11.JPG'
import image12 from '../images/image12.JPG'
import image13 from '../images/image13.JPG'

 class FooterSection extends Component {

    handleClick = (e) => {
        e.preventDefault();
        console.log('hello')
    }

    render() {
        return (
            <div>
                <div className="footer_secction">
                    <div>
                        <span className='image8'>
                            <img src={image8} className='' alt='home' />
                        </span>     
                    </div>
                    <div>
                        <span className='image10'>
                            <img src={image10} className='' alt='activity' />
                        </span>
                        
                    </div>
                    <div>
                        <span className='image11'>
                            <img src={image11} className='' alt='wallet' />
                        </span>
                        
                    </div>
                    <div> 
                        <span className='image12' onClick={this.handleClick}>
                            <img src={image12} className='' alt='Market' />
                        </span>
                        
                    </div>
                    <div>
                        <span className='image13'>
                            <img src={image13} className='' alt='Earn' />
                        </span>
                        
                    </div>
                 </div>
                 <div className="footer_secction">
                    <p className="footersection_item_name">Home</p>
                    <p className="footersection_item_name">Activity</p>
                    <p className="footersection_item_name">Wallet</p>
                    <p className="footersection_item_name">Market</p>
                    <p className="footersection_item_name">Earn</p>


                 </div>


                <br/>
            </div>
        )
    }
}

export default FooterSection