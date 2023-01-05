import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/homeComponent/Header";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import Templates from "./screens/Templates";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Templates" element={<Templates />} />
        <Route path="/SignIn" element={<Signin />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
