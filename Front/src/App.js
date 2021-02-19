import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './shared/context/authContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import EmpresasList from './pages/EmpresasList';
import EmpresaInfo from './pages/EmpresaInfo';
import EmpresaInfoEdit from './pages/EmpresaInfoEdit';
import RegisterHome from './pages/RegisterHome';
import Perfil from './pages/Perfil';
import EmpleadosList from './pages/ListaEmpleados';

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
              <Perfil></Perfil>
            </PrivateRoute>
          </Route>
          <Route exact path="/empresaeditinfo/">
            <PrivateRoute>
              <EmpresaInfoEdit></EmpresaInfoEdit>
            </PrivateRoute>
          </Route>
          <Route exact path="/empleados/:idempresa">
            <PrivateRoute>
              <EmpleadosList></EmpleadosList>
            </PrivateRoute>
          </Route>
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;

