import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Cv1 from "./pages/Cv1/Cv1";
import Cv2 from "./pages/Cv2/Cv2";
import Cv3 from "./pages/Cv3/Cv3";
import Cv4 from "./pages/Cv4/Cv4";
import Cv5 from "./pages/Cv5/Cv5";
import Cv6 from "./pages/Cv6/Cv6";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/cv1" element={<Cv1 />} />
        <Route path="/cv2" element={<Cv2 />} />
        <Route path="/cv3" element={<Cv3 />} />
        <Route path="/cv4" element={<Cv4 />} />
        <Route path="/cv5" element={<Cv5 />} />
        <Route path="/cv6" element={<Cv6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
