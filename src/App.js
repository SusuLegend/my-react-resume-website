import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarView from "./components/navbar";
import Home_Banner from "./components/home";
import About_View from "./components/about";
import Skill_View from "./components/skill";
import Project_View from "./components/project";
import Contact_view from "./components/contact";
import Footer_view from "./components/footer";

function App() {
  return (
    <div className="App w-full">
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
