
import './App.css';
import Home from './Home';
import Intro from './Intro';
import Navbar from './Navbar';
import About from './About';
import Diets from './Diets';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
          <Navbar/>
          <div className="empty"/>
          <Intro/>
          <div className="empty"/>
          <About/>
          <div className="empty"/>
          <Diets/>
          <div className="empty"/>
      </header>
    </div>
  );
}

export default App;
