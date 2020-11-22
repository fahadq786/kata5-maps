
import './App.css';
import Gmap from './components/gmap';

function App() {
  return (
    <div className="App">

      <h1>Google Maps example</h1>
      <Gmap lat='43.821364' lng='-79.365837'/>
    </div>
  );
}

export default App;
