import React from 'react';
import decodeTokenData from '../utils/decodeTokenData';
import { useState } from 'react';
import { getUserInfo, login, register, updateInfoUser } from '../../http/apiSharpView';
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
    localStorage.setItem('token', loginData.token);
    localStorage.setItem('user', JSON.stringify(loginData.user))
    localStorage.setItem('empresa', JSON.stringify(loginData.empresa))
    const tokenObject = decodeTokenData(loginData.token);
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

  const researchTokenProfileUser = async (nombre, primerApellido, segundoApellido, pais, ciudad, email, password, repeatPassword) => {
    await updateInfoUser(nombre, primerApellido, segundoApellido, pais, ciudad, email, password, repeatPassword);
    await updateInfoUser(nombre, primerApellido, segundoApellido, pais, ciudad, email, password, repeatPassword);
    localStorage.removeItem('token');
    setUserData(tokenObject);
    setIsUserLogged(true);
    history.push('/users/iduser')
  }

  const signUp = async (email, password, repeatPassword, empleado, empresa) => {
    const message = await register(email, password, repeatPassword, empleado, empresa);
    console.log('signUp', { message });
    return message;
  };

  const signOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('empresa');
    history.push('/');
    setUserData(null);
    setIsUserLogged(false);
  };

  return (
    <AuthContextProvider value={{
      userData,
      userInfo: JSON.parse(localStorage.getItem('user')) || {},
      signIn,
      signInEmpresa,
      signOut,
      signUp,
      researchTokenProfileUser,
      isUserLogged
    }}>{children}</AuthContextProvider>
  );
}
