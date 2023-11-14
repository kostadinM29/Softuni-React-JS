import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import CreateGameForm from "./components/Forms/CreateGameForm/CreateGameForm";
import LoginForm from "./components/Forms/LoginForm/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm/RegisterForm";
import Details from "./components/Catalog/CatalogItem/Details/Details";

function App()
{
  return (
    <div id='box'>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/games' element={<Catalog />} />
        <Route path='/games/:id' element={<Details />} />
        <Route path='/games/create' element={<CreateGameForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
      </Routes>
    </div>
  );
};

export default App;
