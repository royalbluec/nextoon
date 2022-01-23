import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';

// Login O
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';

// Login X
import BrowsePage from './pages/BrowsePage';
import WebtoonPage from './pages/WebtoonPage';
import MangaPage from './pages/MangaPage';
import NovelPage from './pages/NovelPage';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <main role="main">
        <Routes>
          {/* Login O */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />

          {/* Login X */}        
          <Route path="/browser" element={<BrowsePage />} />  
          <Route path="/webtoon" element={<WebtoonPage />} />
          <Route path="/manga" element={<MangaPage />} />
          <Route path="/novel" element={<NovelPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
