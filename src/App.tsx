import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./routes/private";
//CONTEXT
import { AuthProvider } from "./context";
// PAGES
import SignIn from "./pages/Sigin";
import UsuariosPage from "./pages/usuarios";
import ParaleloPage from "./pages/paralelo";
import NotasPage from "./pages/notas";
import MateriaPage from "./pages/materia";
import CicloAcademico from "./pages/cicloacademico";
import Games from "./pages/Games";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Elements />} />
          <Route path="/games" element={<Games />} />
          <Route element={<SignIn />} path="signIn" />
          <Route path="Admin" element={<ProtectedRoute />}>
            <Route element={<UsuariosPage />} path="usuarios" />
            <Route element={<ParaleloPage />} path="paralelos" />
            <Route element={<NotasPage />} path="notas" />
            <Route element={<MateriaPage />} path="materia" />
            <Route element={<CicloAcademico />} path="cicloAcademico" />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
const HomeProcted = () => {
  return <h2>Text auth</h2>;
};

const Elements = () => {
  return <h2>Element</h2>;
};
export default App;
