import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './Components/Navbar/navbar';
import PokeAnalyser from './Components/PokeAnalyser/pokeAnalyser';
import HomeScreen from './Components/HomeScreen/homeScreen';
import ElementCreator from './Components/ElementCreator/elementCreator';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/pokeAnalyser' element={<PokeAnalyser/>} />
          <Route path='/typeCreator' element={<ElementCreator />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
