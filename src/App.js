import logo from './logo.svg';
import './App.css';
import Cmp1 from './components/Cmp1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
       
         
        <Cmp1></Cmp1> 

          Learn React
        
      </header>
    </div>
  );
}

export default App;

