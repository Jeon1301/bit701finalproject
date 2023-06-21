import logo from './logo.svg';
import './App.css';
import poimg from './9.png';

function App() {
  return (
    <div className="App">
      <img alt='' src={poimg} width={300} border="1" style={{marginTop:'20px'}}/>
      <br/><br/>
      <h2>Docker 배포 성공 기원!!!</h2>
    </div>
  );
}

export default App;
