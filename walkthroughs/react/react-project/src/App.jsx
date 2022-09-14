import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/home.page";
import AboutPage from "./views/about.page";
import ContactPage from "./views/contact.page";
import UserPage from "./views/user.page";
import Nav from "./components/routing/nav";

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="user/:username" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
