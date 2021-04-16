import React, { Component } from 'react'
import image9 from '../images/image9.JPG'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>
                   <p>4.02</p>
                </div>
                <div>
                       <span className='image8'>
                           <img src={image9} className='' alt='battery' />
                       </span>
                   </div>
                
                <div>

                </div>
                
            </div>
        )
    }
}

export default Header