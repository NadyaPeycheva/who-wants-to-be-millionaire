import React from 'react';
import {Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import StartGame from "./pages/startGame/StartGame";
import QuestionsPage from './pages/questions/QuestionsPage';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<StartGame/>} />
          <Route path="/questions" element={<QuestionsPage/>} />
      </Routes>
    </div>
    
  );
}

export default App;
