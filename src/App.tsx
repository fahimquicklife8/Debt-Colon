import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Themes from './pages/Themes';
import Dynamics from './pages/Dynamics';
import Reviews from './pages/Reviews';
import Media from './pages/Media';
import Notes from './pages/Notes';

import './App.css';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <Routes>
            <Route path="/home" Component={Home} />
            <Route path="/themes" Component={Themes} />
            <Route path="/dynamics" Component={Dynamics} />
            <Route path="/reviews" Component={Reviews} />
            <Route path="/media" Component={Media} />
            <Route path="/notes" Component={Notes} />
          </Routes>
        </div>
        <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full">
          <ul className="flex justify-around">
            <li>
              <Link to="/home" className="button">Home</Link>
            </li>
            <li>
              <Link to="/themes" className="button">Themes</Link>
            </li>
            <li>
              <Link to="/dynamics" className="button">Dynamics</Link>
            </li>
            <li>
              <Link to="/reviews" className="button">Reviews</Link>
            </li>
            <li>
              <Link to="/media" className="button">Media</Link>
            </li>
            <li>
              <Link to="/notes" className="button">Notes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>











  );
}

export default App;
