import { Routes, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import CompanyLogin from "./components/companyLogin";
import UserLogin from "./components/userLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/company-login" element={<CompanyLogin />} />
      <Route path="/user-login" element={<UserLogin />} />
    </Routes>
  );
}

export default App;
