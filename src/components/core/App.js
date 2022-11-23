import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";

const Main = lazy(() => import("../main/Main"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Course = lazy(() => import("../pages/Course/Course"));
const Info = lazy(() => import("../pages/Info/Info"));
const Mission = lazy(() => import("../pages/Mission/Mission"));
const Error = lazy(() => import("../pages/Error/Error"));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/info" element={<Info />} />
            <Route exact path="/courses" element={<Course />} />
            <Route exact path="/mission" element={<Mission />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/*" element={<Error />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
