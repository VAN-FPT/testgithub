import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import Search from "./components/Search";
const App = () => {
  return ( 
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/feedback" element={<Feedback/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </HashRouter>
    </>
   );
}
export default App;