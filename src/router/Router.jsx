import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from '../public/login/Login';
import { Validar } from '../public/login/Validar';
import Error404 from '../view/Error404';
import { Dashboard } from '../private/dashboard/Dashboard';
import { Features } from '../private/features/Features';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/validar" element={<Validar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/features" element={<Features />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;