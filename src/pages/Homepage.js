import About from "../sections/About";
import Contact from "../sections/Contact";
import Intro from "../sections/Intro";
import Profile from "../components/Profile";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Services from "../sections/Services";
import Skills from "../sections/Skills";

export default function Homepage(){
    return <div id="homepage" className="flex flex-col mx-auto md:w-[700px] xl:w-full xl:flex-row">
        <Profile></Profile>
        <div id="homepage-sections" className="flex flex-col gap-4 px-[20px] xl:h-screen xl:overflow-y-scroll xl:pl-16">
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