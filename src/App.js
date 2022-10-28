import './css/App.css';
import Navbar from './Nav';
import IntroContainer from './components/pure/Intro';
import ProjectsContainer from './container/ProjectsContainer';
import AboutMe from './container/AboutMeContainer';
import ContactContainer from './container/ContactContainer';
import Footer from './container/Footer';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <IntroContainer></IntroContainer>
      <ProjectsContainer></ProjectsContainer>
      <AboutMe></AboutMe>
      <ContactContainer></ContactContainer>
      <Footer></Footer>
    </div>
  );
};

export default App;
