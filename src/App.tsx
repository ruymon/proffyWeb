import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StatusLayout } from './layouts/StatusLayout';

import { Home } from './pages/Home';
import { Success } from './pages/Success';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { PasswordRecovery } from './pages/auth/PasswordRecovery';

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
          <Route path="register" element={<Register />} />
          <Route path="passwordRecovery" element={<PasswordRecovery />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
};