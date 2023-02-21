import './App.css';
import { Home, News, Profile, Error } from './pages';
import NavBar from './components/NavBar/NavBar';
import { Container } from '@mui/system';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Container>
        <Routes>
          <Route path="/home" element={<Home />} expect />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
