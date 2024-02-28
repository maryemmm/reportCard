import './App.css';
import Report from './Components/Report/report.jsx';
import userImg from './Assets/userImg.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Report
        userImg={userImg}
        userName='Jeremy Robson'/>
      </header>
    </div>
  );
}

export default App;
