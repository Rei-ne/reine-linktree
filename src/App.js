import './App.css';
import './Styles/Styles.css'
import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';
import Footer from "./Components/Footer"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contactpage />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
