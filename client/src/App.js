// Dependncies
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from './components/Header/Navbar';
import Home from './components/Pages/Home';
import Favorite from './components/Pages/Favorite';

// Assets
import './assets/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
