import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/homeComponent/Header";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import Templates from "./screens/Templates";
import BuildResumeForm from "./screens/BuildResumeForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Templates" element={<Templates />} />
        <Route
          path="/Templates/buildResumeForm"
          element={<BuildResumeForm />}
        />
        <Route path="/SignIn" element={<Signin />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
