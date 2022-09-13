import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, FilmsPage, NotFoundPage } from "./views";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films" element={<FilmsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
