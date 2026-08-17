import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout"
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element= {<MainLayout/>}>
          <Route path="/" element={<Homepage />} />
          <Route path="/songlist/:searchTerm" element={<Searchpage />} />
          </Route>
          {/* <Route path="/song" element={<Homepage />} />
          <Route path="/songlist/:searchTerm" element={<Searchpage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
