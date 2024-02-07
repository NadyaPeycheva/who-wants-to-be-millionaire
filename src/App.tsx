import { Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import StartGame from "./pages/startGame/StartGame";
import QuestionsPage from './pages/questions/QuestionsPage';
import EndGame from './pages/endGame/EndGame';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/end-game" element={<EndGame />} />

      </Routes>
    </div>

  );
}

export default App;
