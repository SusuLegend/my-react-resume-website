import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarView from "./components/navbar";
import Home_Banner from "./components/home";
import About_View from "./components/about";
import Skill_View from "./components/skill";
import Project_View from "./components/project";
import Contact_view from "./components/contact";
import Footer_view from "./components/footer";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App w-full">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Resume Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Jason Adika personal website application" />
      </Helmet>
      <NavbarView />
      <Home_Banner />
      <About_View />
      <Skill_View />
      <Project_View />
      <Contact_view />
      <Footer_view />
    </div>
  );
}

export default App;
