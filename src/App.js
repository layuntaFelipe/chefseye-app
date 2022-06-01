import './App.css';
import Header from './components/Header';
import ManageBox from './components/ManageBox';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <Header />
      <Slider/>
      <div className='mainBody'>
        <ManageBox />
        <ManageBox bgColor='#ECEFF0' titleBGColor='#8D99AE' title='Menu Preview' titleColor='#FFFFFF' />
        <ManageBox title='Storage History' /> 
      </div>
    </>
  );
}

export default App;
