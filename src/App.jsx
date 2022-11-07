import { useState } from "react";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Content } from "./components/Content";
import { Resume } from "./components/Resume";
function App() {
  const [page, setPage] = useState("About");

  const pageToShow = () => {
    switch (page) {
      case "About":
        return <About />;
      case "Projects":
        return <Project />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
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
