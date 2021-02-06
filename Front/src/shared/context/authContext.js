import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login, register } from '../../http/apiSharpView';
import decodeTokenData from '../utils/decodeTokenData';

const AuthContext = React.createContext();
const AuthContextProvider = AuthContext.Provider;

const token = localStorage.getItem('token');
const tokenObject = decodeTokenData(token);

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(tokenObject);
  const [userLogged, setUserLoged] = useState(!!tokenObject);
  const history = useHistory();

  const signIn = async (email, password) => {
    const loginData = await login(email, password);
    if (loginData) {
      localStorage.setItem('token', loginData);
      const tokenObject = decodeTokenData(loginData);
      setUserData(tokenObject);
      setUserLoged(true);
      console.log(loginData);
      history.push('/');
    }
  };

  const signUp = async (email, password) => {
    const message = await register(email, password);
    return message;
  };

  const logOut = () => {
    localStorage.removeItem('token');
    history.push('/login');
    setUserData(null);
    setUserLoged(false);
  };

  return <AuthContextProvider value={{ userData, signIn, logOut, signUp, userLogged }}>{children}</AuthContextProvider>;
}

export { AuthContext, AuthProvider };
