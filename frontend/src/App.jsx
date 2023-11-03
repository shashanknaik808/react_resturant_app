import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './component/navbar/Navbar.jsx';
import Login from './component/login/Login.jsx';
import Resturant from './component/resturant/Resturant.jsx';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/resturant" element={<Resturant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
