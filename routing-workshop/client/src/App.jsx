import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as authService from "./services/authService";
import AuthContext from "./contexts/authContext";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import CreateGameForm from "./components/Forms/CreateGameForm/CreateGameForm";
import LoginForm from "./components/Forms/LoginForm/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import Details from "./components/Catalog/CatalogItem/Details/Details";
import Logout from "./components/Logout/Logout";

function App()
{
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() =>
  {
    localStorage.removeItem('accessToken');

    return {};
  });

  const loginSubmitHandler = async (values) =>
  {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    localStorage.setItem('accessToken', result.accessToken);

    navigate('/');
  };

  const registerSubmitHandler = async (values) =>
  {
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    localStorage.setItem('accessToken', result.accessToken);

    navigate('/');
  };

  const logoutHandler = () =>
  {
    setAuth({});

    localStorage.removeItem('accessToken');

    navigate('/');
  };


  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.username,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={values}>
      <div id='box'>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/games' element={<Catalog />} />
          <Route path='/games/:id' element={<Details />} />
          <Route path='/games/create' element={<CreateGameForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
