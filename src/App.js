import './App.css';
import Cards from './components/cards';
import FirstLook from './components/first-look';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <div className="header">
        <Navbar title="Merhaba" />
        <FirstLook />
      </div>

      <Cards />      
    </div>
  );
}

export default App;
