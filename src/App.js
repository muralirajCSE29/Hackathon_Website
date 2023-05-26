import { Route, Router, Routes } from "react-router-dom";
// import About from './About';
import "./App.css";
// import Categories from './Categories';
// import Footer from './Footer';
import LoginPage from "./Login";
// import Participate from './Participate';
// import Prize from './Prize';
// import Header from "./header";
import AllComps from "./AllComps";
import Signup from "./Signup";
import Forgotpassword from "./Forgotpassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllComps />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/login" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
