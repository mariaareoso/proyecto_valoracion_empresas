import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./shared/context/authContext";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import EmpresasList from "./pages/EmpresasList";
import EmpresaInfo from "./pages/EmpresaInfo";
import RegisterHome from "./pages/RegisterHome";
import PerfilUser from "./pages/PerfilUsuario";
import AjustesDeCuenta from "./pages/AjustesDeCuenta";
import ResetPassword from "./components/ajustesDeCuenta/resetPassword";
import VentanaTablaEmpleados from "./components/listaEmpleados/WorkerList";
import ValoracionTablaEmpleados from "./components/valoracionesEmpleados/voteList";

function App() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/register">
            <RegisterHome></RegisterHome>
          </Route>
          <Route path="/empresaslist">
            <EmpresasList></EmpresasList>
          </Route>
          <Route path="/empresainfo/:idempresa">
            <EmpresaInfo></EmpresaInfo>
          </Route>
          <Route exact path="/users/iduser">
            <PrivateRoute>
              <PerfilUser></PerfilUser>
            </PrivateRoute>
          </Route>
          <Route exact path="/changeAccount">
            <AjustesDeCuenta></AjustesDeCuenta>
          </Route>
          <Route path="/resetPassword">
            <ResetPassword></ResetPassword>
          </Route>
          <Route path="/WorkerList">
            <VentanaTablaEmpleados></VentanaTablaEmpleados>
          </Route>
          <Route path="/voteList">
            <ValoracionTablaEmpleados></ValoracionTablaEmpleados>
          </Route>
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
eG;
