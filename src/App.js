import './App.css';
import HeaderSection from './components/HeaderSection'
import MidSection from './components/MidSection'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <div className="container">
       <HeaderSection/>
       <MidSection/>
       <FooterSection/>
    </div>
  );
}

export default App;
