import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import New from './pages/new';
import Diary from './pages/diary';
import NotFound from './pages/not-found';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/diary/:id" element={<Diary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
