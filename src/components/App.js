import NavBar from './Header'
import LeftBar from './LeftBar'
import RightBar from './RightBar'
import ContentArea from './ContentArea'
import Footer from './Footer'

import '../css/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LeftBar/>
      <ContentArea />
      <RightBar />
    </div>
  );
}

export default App;
