import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/homeComponent/Header";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import Templates from "./screens/Templates";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthChecker } from "./middleware/auth.middleware";
import SavedDataList from "./screens/SavedDataList";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:name" element={<AuthChecker />} />

        <Route path="/templates" element={<Templates />} />
        {/* <Route path="/templates/temp2" element={<Temp />} /> */}
        {/* <Route
          path="/Templates/buildResumeForm"
          element={<BuildResumeForm />}
        /> */}

        <Route path="/data" element={<SavedDataList />} />
        <Route path="/signIn" element={<Signin />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
