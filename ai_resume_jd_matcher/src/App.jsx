import { Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import CompanyLogin from "./components/companyLogin";
import UserLogin from "./components/userLogin";
import CompanyRegister from "./components/companyRegister";
import UserRegister from "./components/userRegister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/company-login" element={<CompanyLogin />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/company-signup" element={<CompanyRegister />} />
      <Route path="/user-signup" element={<UserRegister />} />
    </Routes>
  );
}

export default App;
