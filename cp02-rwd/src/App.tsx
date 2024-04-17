import React from 'react';
import './App.css';
import Home from './Componentes/Home';
import Footer from './Componentes/Footer';
import UserList from './Componentes/UserList';
import PostList from './Componentes/PostList';
import PhotoGallery from './Componentes/PhotoGallery';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// criação do app, utilizando nav para criar a barra de menu do site
// utilização de link para os componentes
// utilização de routes para os componentes
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-gradient-to-r from-pink-400 to-blue-300 text-white p-5">
          <h1 className="text-3xl font-semibold font-serif">CheckPoint 02</h1>
        </header>

        <nav>
          <ul className="flex justify-center space-x-4 p-3">
          <li><Link to='/' className="text-pink-600 font-bold hover:text-pink-400 hover:font-semibold hover:transition-all hover:duration-300">HOME</Link></li>
            <li><Link to='/users' className="text-pink-600 font-bold hover:text-pink-400 hover:font-semibold hover:transition-all hover:duration-300">LISTA DE USUÁRIOS</Link></li>
            <li><Link to='/posts' className="text-pink-600 font-bold hover:text-pink-400 hover:font-semibold hover:transition-all hover:duration-300">LISTA DE POSTS</Link></li>
            <li><Link to='/photos' className="text-pink-600 font-bold hover:text-pink-400 hover:font-semibold hover:transition-all hover:duration-300">GALERIA DE FOTOS</Link></li>
          </ul>
        </nav>

        <main className="flex-grow bg-pink-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/photos" element={<PhotoGallery />} />
          </Routes>
        </main>
        <Footer/>        
      </div>
    </Router>
  );
}

export default App;
