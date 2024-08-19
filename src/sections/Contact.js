import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact(){
    return <section id="contact">
        <div id="section-icon" className="test-el"><FontAwesomeIcon icon={faEnvelope}/>CONTACT</div>
        <h1 id="contact-title">Let's work <span>Together!</span></h1>
    </section>   
}

export default Contact