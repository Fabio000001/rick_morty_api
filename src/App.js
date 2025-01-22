import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Contacto from './components/pages/Contacto';
import Blog from './components/pages/Blog';
import NotFound from './components/pages/NotFound';
import BlogCharacter from './components/pages/BlogCharacter';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>App</h1>
        <Navbar />
        <Routes>
          <Route element={<Layout />} path="/">
            <Route element={<Inicio />} path="/"></Route>
            <Route element={<Contacto />} path="/contacto"></Route>
            <Route element={<Blog />} path="/blog"></Route>
            <Route element={<BlogCharacter />} path="/blog/:id"></Route>
            <Route element={<NotFound />} path="*"></Route>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
