import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/BaseComponents/Navbar';
import Welcome from './pages/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Welcome />} path={'/'} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;