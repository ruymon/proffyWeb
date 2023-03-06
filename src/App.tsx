import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StatusLayout } from './layouts/StatusLayout';

import { Home } from './pages/Home';
import { Success } from './pages/status/Success';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { PasswordRecovery } from './pages/auth/PasswordRecovery';
import { NewTeacherProfile } from './pages/app/NewTeacherProfile';

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
          <Route path="login" index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="passwordRecovery" element={<PasswordRecovery />} />
        </Route>

        {/* App */}
        <Route path="/app">
          <Route path="lecture/newTeacherProfile" element={<NewTeacherProfile />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
};