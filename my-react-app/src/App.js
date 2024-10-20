import Home from "./component/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Help from "./component/Help";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </Router>
  );
}

export default App;
