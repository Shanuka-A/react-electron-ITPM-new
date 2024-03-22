import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "layouts/dashboard";
import ContactUs from "components/contactUs/ContactUs";
import Navbar from "components/navbar/index";


const App = () => {
  return (
    
    <Routes>
      <Route path="home/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  
  );
};

export default App;
 