import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import CharactersList from './components/CharactersList';
import CharacterDetails from './components/CharacterDetails';
import NotFound from './components/NotFound';
import AboutUs from './components/AboutUs';
import OurMission from './components/OurMission';
import OurValues from './components/OurValues';

function App()
{
  return (
    <>
      <Navigation />
      <h1>React Router</h1>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} >
          <Route path='us' element={<AboutUs />} />
          <Route path='mission' element={<OurMission />} />
          <Route path='values' element={<OurValues />} />
        </Route>
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/characters' element={<CharactersList />} />
        <Route path='/characters/:id' element={<CharacterDetails />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

      <footer>All rights reserved &copy;</footer>
    </>
  );
};

export default App;
