import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./views/about.page";
import Nav from "./components/routing/nav";

function View({ title }) {
  return (
    <div className="App">
      <div className="App-header">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<View title={"Home"} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<View title={"Contact"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
