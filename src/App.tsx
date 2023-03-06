import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StatusLayout } from './layouts/StatusLayout';
import { Login } from './pages/auth/Login';

import { Home } from './pages/Home';
import { Success } from './pages/Success';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/status" element={<StatusLayout />}>
          <Route path="success" element={<Success />} />
        </Route>

        {/* Auth */}
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<h1>Register</h1>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
};