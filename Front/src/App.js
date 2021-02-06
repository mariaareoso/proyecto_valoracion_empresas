import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/Register';
import PublicRoute from './components/PublicRoute';
import { AuthProvider } from './shared/context/authContext';
import Landing from './pages/Landing';
import Upload from './pages/Upload';
import Login from './components/home/Login';
import PopUp from './components/Modal';

function App() {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PublicRoute>
            <Route path="/login">
              <Login />
            </Route>
          </PublicRoute>
          <Route path="/landing">
            <Landing></Landing>
          </Route>
          <Route path="/register">
            <PopUp title='Registro de usuario'><Register /></PopUp>
          </Route>
          <Route path="/upload">
            <Upload></Upload>
          </Route>
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
