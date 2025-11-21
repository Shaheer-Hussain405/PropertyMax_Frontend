import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Terminal from "./Pages/Terminal";
import Dashboard from "./Components/Terminal/Sections/Dashboard";
import Property from "./Components/Terminal/Sections/Property";
import PropertyDetails from "./Components/Terminal/Sections/PropertyDetails";
import AddProperty from "./Components/Terminal/Sections/AddProperty";
import Notification from "./Components/Terminal/Sections/Notification";
import Settings from "./Components/Terminal/Sections/Settings";
import Tenants from "./Components/Terminal/Sections/Tenants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login-Page" element={<Login />} />
      <Route path="/signup-Page" element={<Signup />} />
      <Route path="/Demo" element={<Terminal />}>
        <Route index element={<Dashboard />} />
        <Route path="Properties" element={<Property />}>
          <Route path="Add-Property" element={<AddProperty />} />
        </Route>
        <Route path="Prop_Details" element={<PropertyDetails />} />
        <Route path="Notifications" element={<Notification />} />
        <Route path="Settings" element={<Settings />} />
        <Route path="Tenants" element={<Tenants />} />
      </Route>
    </Routes>
  );
}

export default App;
