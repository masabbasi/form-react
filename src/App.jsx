import "./App.css";
import SignUp from "./components/SignUp.jsx";
import LogIn from "./components/LogIn.jsx";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
					<Route path="/form/signup" element={<SignUp />}/>
					<Route path="/form/login" element={<LogIn />}/>
					<Route path="*" element={<Navigate to="/form/signup" />}
    />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
