import './App.css';
import {Routes, Route} from 'react-router-dom'
import { Landing, Details } from './pages'
import { NavBar } from './components'

function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
