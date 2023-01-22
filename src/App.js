import Home from './pages/Home'
import Codex from './pages/Codex'
import DallE from './pages/DallE'
import Davinci from './pages/Davinci'
import NotFound from './pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/codex" element={<Codex />} />
      <Route path="/dall-e" element={<DallE />} />
      <Route path="/davinci" element={<Davinci />} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
  );
}

export default App;
