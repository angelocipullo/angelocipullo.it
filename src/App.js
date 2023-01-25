import { Route, Routes } from 'react-router-dom';
import './App.css';
import Links from './screens/Links';
import Home from './screens/Home';
import Three from './screens/Three.js'
import Projects from './screens/Projects';
import AppDrawer from './screens/AppDrawer';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path="/links" element={<Links />} />
        <Route path='/3d' element={<Three />} />
        <Route path='/apps' element={<AppDrawer />} />
      </Routes>
  );
}

export default App;
