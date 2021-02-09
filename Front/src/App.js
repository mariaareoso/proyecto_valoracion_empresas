import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './shared/context/authContext';
import Home from './pages/Home';
import EmpresasList from './pages/EmpresasList';


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
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
