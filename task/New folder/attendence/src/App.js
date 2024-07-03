
import { Center, Link } from "@chakra-ui/react";
import "./App.css";
import Tabs from './Tabs';


function App() {

  return (
    <div className="App" >
        <div className="Attendence" style={{display:"flex",backgroundColor:'grey',justifyContent:"center",textAlign: "center"}} >
          Attendence
        </div>
        <div className="Progress"style={{backgroundColor:'red'}}>
          Progress
        </div>
        <div className="Schedule"style={{backgroundColor:'orange'}}>
        Schedule
        </div>
        <div className="Achievements" style={{backgroundColor:'teal'}}>
        <Link to="/achievements">Achievements</Link>
        </div>
    </div>
  );
}
    
export default App;