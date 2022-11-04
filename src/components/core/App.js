import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../main/Main";
import Contact from "../pages/Contact/Contact";
import Course from "../pages/Course/Course";
import Error from "../pages/Error/Error";
import Info from "../pages/Info/Info";
import Mission from "../pages/Mission/Mission";

import "./App.scss"

function App() {
  return (
    <Router>
      <div>
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/info" element={<Info />} />
            <Route exact path="/courses" element={<Course />} />
            <Route exact path="/mission" element={<Mission />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
