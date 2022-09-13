import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, FilmsPage, NotFoundPage } from "./views";

const SomeFilmPage = ({ title }) => <h1>{title}</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films" element={<FilmsPage />}>
          <Route
            path="castle-in-the-sky"
            element={<SomeFilmPage title={"Castle in the Sky"} />}
          />
          <Route
            path="howls-moving-castle"
            element={<SomeFilmPage title={"Howl's Moving Castle"} />}
          />
        </Route>
        {/* <Route
          path="films/castle-in-the-sky"
          element={<SomeFilmPage title={"Castle in the Sky"} />}
        /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
