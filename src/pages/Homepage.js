import About from "../sections/About";
import Contact from "../sections/Contact";
import Intro from "../sections/Intro";
import Profile from "../components/Profile";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Services from "../sections/Services";
import Skills from "../sections/Skills";

export default function Homepage(){
    return <div id="homepage" className="flex flex-col bg-background">
        <Profile></Profile>
        <div id="homepage-sections" className="flex flex-col gap-4 h-screen px-[20px] overflow-scroll overflow-x-hidden">
            <Intro></Intro>
            <About></About>
            <Resume></Resume>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    </div>
}