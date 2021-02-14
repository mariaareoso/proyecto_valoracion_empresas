import React from 'react';
import decodeTokenData from '../utils/decodeTokenData';
import { useState } from 'react';
import { login, register } from '../../http/apiSharpView';
import { useHistory } from 'react-router-dom';

export const AuthContext = React.createContext();
const AuthContextProvider = AuthContext.Provider;
const token = localStorage.getItem('token');
const tokenObject = decodeTokenData(token);


export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(tokenObject);
  const [isUserLogged, setIsUserLogged] = useState(!!tokenObject);
  const history = useHistory();


  const signIn = async (email, password) => {
    const loginData = await login(email, password);
    localStorage.setItem('token', loginData);
    const tokenObject = decodeTokenData(loginData);
    setUserData(tokenObject);
    setIsUserLogged(true);
    history.push('/');
  };

  const signInEmpresa = async (email, password) => {
    const loginData = await login(email, password);
    localStorage.setItem('token', loginData);
    const tokenObject = decodeTokenData(loginData);
    setUserData(tokenObject);
    setIsUserLogged(true);
    history.push('/');
  };


  const signUp = async (email, password, repeatPassword, empleado, empresa) => {
    const message = await register(email, password, repeatPassword, empleado, empresa);
    console.log('signUp', { message });
    return message;
  };

  const signOut = () => {
    localStorage.removeItem('token');
    history.push('/');
    setUserData(null);
    setIsUserLogged(false);
  };

  return (
    <AuthContextProvider value={{ userData, signIn, signInEmpresa, signOut, signUp, isUserLogged }}>{children}</AuthContextProvider>
  );
}
