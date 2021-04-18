import React, { Fragment } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch, Redirect, Link  } from 'react-router-dom'
import HeaderSection from './components/HeaderSection'
import MidSection from './components/MidSection'
import ActivityPage from './components/pages/ActivityPage'
import EarnPage from './components/pages/EarnPage'
import HomePage from './components/pages/HomePage'
import MarketPage from './components/pages/MarketPage'
import WalletPage from './components/pages/WalletPage'
import image8 from './images/image8.JPG'
import image10 from './images/image10.JPG'
import image11 from './images/image11.JPG'
import image12 from './images/image12.JPG'
import image13 from './images/image13.JPG'


class App extends React.Component {

  homeRedirect = () => {
      return <Redirect to='/home' />  
    } 
    
  activityRedirect = () => {
    return <Redirect to='/activity' />
  }

  walletRedirect = () => {
    return <Redirect to='/wallet' />
  }

  marketRedirect = () => {
    return <Redirect to='/market' />
  }

  earnRedirect = () => {
    return <Redirect to='/earn' />
  }

render(){
  return (
    <div className="container">
       
       <BrowserRouter>
          <Fragment>
            <HeaderSection/>
            <MidSection/>
            <div>


<div className="footer_secction">
   
    <div>
        <Link to='/home'
         className='image8' onClick={e => this.homeRedirect()}>
         
            <img src={image8} className='' alt='home' />
        </Link>     
    </div>

    <div>
      <Link to='/activity'
         className='image10' onClick={e => this.activityRedirect() }>
            <img src={image10} className='' alt='activity' /> 
       </Link> 
    </div>
    
    <div>
      <Link to='wallet'
        className='image11' onClick={e => this.walletRedirect() }>
            <img src={image11} className='' alt='wallet' /> 
       </Link> 
    </div>

    <div> 
        <Link to='market' 
        className='image12' onClick={e => this.marketRedirect()}>
            <img src={image12} className='' alt='Market' />                   
        </Link>        
    </div>

    <div>
        <Link to='earn' 
        className='image13' onClick={e => this.earnRedirect()}>
            <img src={image13} className='' alt='Earn' />
        </Link>       
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
                <Switch>
                  <Route 
                    exact path='/home' 
                    component={HomePage}/>             
                  <Route 
                    path='/activity' 
                    component={ActivityPage} />                 
                  <Route 
                    path='/wallet' 
                    component={WalletPage} />                 
                  <Route 
                   exact path='/market' 
                    component={MarketPage} />                
                  <Route 
                    path='/earn' 
                    component={EarnPage} />
                </Switch>
          </Fragment>
           
       </BrowserRouter>

    </div>
  );
}
}

export default App;
