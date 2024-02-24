import React from'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import SongList from './components/SongList';
import CreateForm from './components/SongCreate';
import UpdateForm from './components/SongUpdate';
import RemoveForm from './components/SongRemove';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Song List</Link>
            </li>
            <li className="nav-item">
              <Link to="/create-song" className="nav-link">Create Song</Link>
            </li>
            <li className="nav-item">
              <Link to="/update-song" className="nav-link">Update Song</Link>
            </li>
            <li className="nav-item">
              <Link to="/delete-song" className="nav-link">Delete Song</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<SongList/>} />
          <Route path="/create-song" element={<CreateForm/>} />
          <Route path="/update-song" element={<UpdateForm/>} />
          <Route path="/delete-song" element={<RemoveForm/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 
