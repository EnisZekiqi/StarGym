
import './App.css';
import Home from './Home';
import Intro from './Intro';
import Navbar from './Navbar';
import About from './About';
import Diets from './Diets';
import Planprogram from './PlanProgram';


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
          <div className="empty2"/>
          <Planprogram/>
          <div className="empty"/>
      </header>
    </div>
  );
}

export default App;
