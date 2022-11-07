import { useState } from "react";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Content } from "./components/Content";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

function App() {
  const [page, setPage] = useState("#Home");

  // const router = createBrowserRouter([
  //   {
  //     path: "/Home",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/About",
  //     element: <About />,
  //   },
  //   {
  //     path: "/Project",
  //     element: <Project />,
  //   },
  //   {
  //     path: "/Contact",
  //     element: <Contact />,
  //   },
  // ]);

  const pageToShow = () => {
    switch (page) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Projects":
        return <Project />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-gray-900 m-0 flex flex-row relative">
      <Menu page={page} setPage={setPage} />
      <Content>{pageToShow()}</Content>
    </div>
  );
}

export default App;
