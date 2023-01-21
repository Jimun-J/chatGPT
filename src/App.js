import Home from './pages/Home'
import Codex from './pages/Codex'
import DallE from './pages/DallE'
import Davinci from './pages/Davinci'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/codex" element={<Codex />} />
      <Route path="/dall-e" element={<DallE />} />
      <Route path="/davinci" element={<Davinci />} />
    </Routes>
  );
}

export default App;
