import React from "react";
import { Outlet, Link } from "react-router-dom";
import { MainLayout } from "../components";

export default function FilmsPage(props) {
  return (
    <MainLayout>
      <h1>Films</h1>
      <ul>
        <li>
          <Link to="castle-in-the-sky">Castle in the Sky</Link>
        </li>
        <li>
          <Link to="howls-moving-castle">Howl's Moving Castle</Link>
        </li>
      </ul>
      <Outlet />
    </MainLayout>
  );
}
