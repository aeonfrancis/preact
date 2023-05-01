import "bootstrap/dist/css/bootstrap.min.css";
import FooterComponent from "./components/Footer";
import HomeComponent from "./section-pages/Home";
// import AboutMeComponent from "./section-pages/AboutMe";
// import ContactsComponent from "./section-pages/Contacts";
// import ProjectsComponent from "./section-pages/Projects";
// import SkillsComponent from "./section-pages/Skills";

export function App() {

  return (
    <>
      <HomeComponent />
      {/* <AboutMeComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <ContactsComponent /> */}
      <FooterComponent />
    </>
  )
}
