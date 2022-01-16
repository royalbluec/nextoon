import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage';
import WebtoonPage from './pages/WebtoonPage';
import MangaPage from './pages/MangaPage';
import NovelPage from './pages/NovelPage';

function App() {
  return (
    <div>
      <Header />
      <main role="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/webtoon" element={<WebtoonPage />} />
          <Route path="/manga" element={<MangaPage />} />
          <Route path="/novel" element={<NovelPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
