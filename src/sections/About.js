import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faU, faUser } from '@fortawesome/free-solid-svg-icons'

function About(){
    return <section id="about">
        <div id="section-icon"><FontAwesomeIcon icon={faUser}/>ABOUT</div>
        <h1 id="about-title">Every great design begin with an even <span>better story</span></h1>
        <h2 id="about-subtitle" className="subtitle mt-5">I'm a Front-End React Developer ready to delve into the world of web development. My focus is on creating user-friendly interfaces using React.js and other modern tools. I'm enthusiastic about learning and improving my skills in this dynamic field. With each project, I aim to grow and contribute to innovative solutions. I'm excited to continue exploring front-end development, gaining experience, and collaborating on impactful projects.</h2>
    </section>   
} 

export default About