import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContantUs from "./pages/ContantUs";

import GlobalStyle from "./components/GlobalStyle";
import {Route, Routes} from "react-router-dom"
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>

      <Routes>
      <Route path="/" element={<AboutUs/>}>
      </Route>
      <Route path="/work" element={<OurWork/>}>
      </Route>
      <Route path="/contact" element={<ContantUs/>}>
      </Route>
      </Routes>
       
    </div>
  );
}

export default App;
