import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './styling/App.css';
import Navbar from './components/Navbar';
import Rockets from './components/rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <hr />
      <div className="App-content">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
