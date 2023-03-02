import './App.css';
import { Home, News, Profile, Error } from './pages';
import NavBar from './components/NavBar';
import { Container } from '@mui/system';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} expect />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
