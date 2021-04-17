import React, { Component } from 'react'
import image9 from '../images/image9.JPG'
import image1 from '../images/image1.JPG'
import image2 from '../images/image2.JPG'
import image3 from '../images/image3.JPG'
import image4 from '../images/image4.JPG'

class Header extends Component {
    render() {
        return (
            <div className="header">
            <div className="header_one">
                <div>
                    <p>4.02</p>
                </div>
                <div>
                    <span className='image8'>
                        <img src={image9} className='' alt='battery' />
                    </span>
                </div>
            </div> 

                <div className="header_two">
                    <div>
                    <span className='image1'>
                        <img src={image1} className='' alt='battery' />
                    </span>
                    <span className='image2'>
                        <img src={image2} className='' alt='logo' />
                    </span>
                    </div>
                    
                    <div>
                    <span className='image3'>
                        <img src={image3} className='' alt='logo' />
                    </span>
                    <span className='image4'>
                        <img src={image4} className='' alt='battery' />
                    </span>
                    </div>
                </div>
             </div>   
            
        )
    }
}

export default Header