import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'


import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Sobre from './Pages/Sobre';
import Projetos from './Pages/Projetos'
import Contatos from './Pages/Contatos'
import Educacao from './Pages/Educacao'
import Home from './Pages/Home';

import './App.css';

function App() {
  return (
      <BrowserRouter>
      <div className='App'>
        <NavBar/>

        <Routes>
        <Route path='/home' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/educacao' element={<Educacao/>}/>
          <Route path='/projetos' element={<Projetos/>}/>
          <Route path='/contatos' element={<Contatos/>}/>
        </Routes>
      
      </div>
      </BrowserRouter>
  );
}

export default App;
