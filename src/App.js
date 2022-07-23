import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './Components/Navbar/navbar';
import PokeAnalyser from './Components/PokeAnalyser/pokeAnalyser';
import HomeScreen from './Components/HomeScreen/homeScreen';
import ElementCreator from './Components/ElementCreator/elementCreator';
import TeamAnalyser from './Components/TeamAnalyser/teamAnalyser';
import Footer from './Components/Footer/footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/pokeAnalyser' element={<PokeAnalyser/>} />
          <Route path='/teamAnalyser' element={<TeamAnalyser />} />
          <Route path='/typeCreator' element={<ElementCreator />} />
        </Routes>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
