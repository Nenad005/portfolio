import About from "../sections/About";
import Contact from "../sections/Contact";
import Intro from "../sections/Intro";
import Profile from "../components/Profile";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Services from "../sections/Services";
import Skills from "../sections/Skills";

export default function Homepage(){
    return <>
        <Profile></Profile>
        <Intro></Intro>
        <About></About>
        <Resume></Resume>
        <Services></Services>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
    </>
}