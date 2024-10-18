import { BrowserRouter, Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar';

import Sobre from './Pages/Sobre';
import Projetos from './Pages/Projetos'
import Educacao from './Pages/Educacao'
import Home from './Pages/Home';

import './App.css';

function App() {
  return (
      <BrowserRouter>
      <div className='App'>
        <NavBar/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/educacao' element={<Educacao/>}/>
          <Route path='/projetos' element={<Projetos/>}/>
        </Routes>
      
      </div>
      </BrowserRouter>
  );
}

export default App;
