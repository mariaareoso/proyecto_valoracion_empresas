import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './shared/context/authContext';
import Home from './pages/Home';
import EmpresasList from './pages/EmpresasList';
import EmpresaInfo from './pages/EmpresaInfo';


function App() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/empresaslist">
            <EmpresasList></EmpresasList>
          </Route>
          <Route path="/empresainfo/:idempresa">
            <EmpresaInfo></EmpresaInfo>
          </Route>
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
