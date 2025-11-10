import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './homepage';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        {/* Aur routes yahan add kar sakte ho */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;