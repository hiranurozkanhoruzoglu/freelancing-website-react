import './App.css';
import FirstLook from './components/first-look';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <div className="header">
        <Navbar title="Merhaba" />
        <FirstLook />
      </div>
    
    </div>
  );
}

export default App;
