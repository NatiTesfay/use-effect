import './App.css';
import Game from './Game'
import Desk from './Desk'

function App() {
  return (
    <div className="App">
      <Game/>
      <Desk e={5} />
      
    </div>
  );
}

export default App;
