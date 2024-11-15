// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AddBook from './Pages/AddBook';
import EditBook from './Pages/EditBook';
import ViewBook from './Pages/ViewBook';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddBook />} />
              <Route path="/edit/:id" element={<EditBook />} />
              <Route path="/view/:id" element={<ViewBook />} />
          </Routes>
      </Router>
  );
};

export default App;
