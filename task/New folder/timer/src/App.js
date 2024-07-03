import './App.css';
import StopWatch from './Components/StopWatch/StopWatch.jsx';
import Clocks from './Components/Clock/Clock.jsx';

function App() {
  return (
    <div className="App">
      <div className='clock'>
      <Clocks />
      </div>
      <div className='stopwatch'>
      <StopWatch />
      </div>
      
    </div>
    
  );
}
  
export default App;