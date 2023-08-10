import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/about/About'
import Events from './pages/events/Events'
import Home from './pages/home/Home'
import News from './pages/news/News'
import Roster from './pages/roster/Roster'
import Shop from './pages/shop/Shop'
import NewsArticle from './components/NewsArticle'
import GamerProfile from './components/GamerProfile'

import Footer from './components/Footer';
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/roster" element={<Roster/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/roster/:gamerId" element={<GamerProfile/>} />
        <Route path="/news/:newsId" element={<NewsArticle/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
