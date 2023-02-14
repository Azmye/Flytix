import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import MovieDets from './Pages/MovieDets';
import Ticket from './Pages/Ticket';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ticket" element={<Ticket />} />
        <Route path="moviedets/:id" element={<MovieDets />} />
      </Routes>
    </div>
  );
};

export default App;
