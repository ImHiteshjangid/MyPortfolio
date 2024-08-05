import React, { useState, Suspense, lazy } from "react";
import { NavigationBar } from "./components";
import Loader from "./components/Loader/Loader";
import About from "./pages/About/about";

const Home = lazy(() => import("./pages/Home/Home"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const Education = lazy(() => import("./pages/Education/Education"));
const Experience = lazy(() => import("./pages/About/about"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Contact = lazy(() => import("./pages/Contact/contact"));

const App = () => {
  const [currentTab, setCurrentTab] = useState("home");

  const renderSwitch = (param) => {
    switch (param) {
      case "home":
        return <Home />;
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "about":
        return <About />;
      case "education":
        return <Education />;
      case "contact":
        return <Contact />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="App">
      <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <Suspense fallback={Loader()}>{renderSwitch(currentTab)}</Suspense>
    </div>
  );
};

export default App;
