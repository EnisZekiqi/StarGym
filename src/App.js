
import './App.css';
import Home from './Home';
import Intro from './Intro';
import Navbar from './Navbar';
import About from './About';
import Diets from './Diets';
import Planprogram from './PlanProgram';
import Suplements from './Suplements';
import Clients from './Clients';
import Example from './Example';
import { useDarkMode } from "./DarkModeContext";


function App() {

  const { darkMode } = useDarkMode();
  const { toggleDarkMode } = useDarkMode();

  return (
    <div className="App">
      <header  style={{ backgroundColor: darkMode ? "#FAFBF9" : "#050604", 
        color:darkMode ? "#131A0F": "#E9F0E5"
    }} className="App-header">
       
          <Navbar/>
          <div className="empty"/>
          <Intro/>
          <div className="empty"/>
          <About/>
          <div className="empty"/>
          <Diets/>
          <div className="empty4"/>
          <Planprogram/>
          <div className="empty"/>
          <Suplements/>
          <Example/>
          <div className="empty"/>
          <Clients/>
          <div className="empty3"/>
      </header>
    </div>
  );
}

export default App;
