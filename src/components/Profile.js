import { faCopyright, faSadCry } from '@fortawesome/free-regular-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Profile(){
    return <>
        <div id="profile-wrapper" className="flex h-100 min-w-[350px] flex-col 
                                             justify-end p-5 ml-3 mb-3 mt-3 border 
                                             border-solid border-borderColor 
                                             rounded-3xl items-center">
            <div id="title" className="mb-auto flex justify-between w-full items-end">
                <h1 className='title text-accent'>Marko N.</h1>
                <h1 className='subtitle text-secondary'>Developer</h1>
            </div>
            <img id="profile-picture" alt="my picture" className="bg-white w-[200px] h-[200px] mb-10 rounded-3xl"></img>
            <a id="profile-mail" href="mailto:markonenadovic2005@gmail.com" className='hover:underline transition-all duration-200 ease-in'>markonenadovic2005@gmail.com</a>
            <p id="profile-location" className='mb-7'>Based in Novi Beograd, Belgrade, Serbia</p>
            <div id="profile-licence" className='flex justify-center items-center mb-7'>
                <FontAwesomeIcon icon={faCopyright} className='fill-red-500 text-red-500 mr-2'></FontAwesomeIcon>
                <p id="licence-text" className='text-secondary text-sm'>2024 Marko Nenadovic, All Rights Reserved</p>
            </div>
            <div id="profile-links" className='mb-10'>
                <a id="profile-link">github</a>
                <a id="profile-link">linkedin</a>
                <a id="profile-link">fiverr</a>
                <a id="profile-link">upwork</a>
                <a id="profile-link">whatsapp</a>
            </div>
            <div id="profile-actions" className="w-full flex justify-between">
                <a id="profile-action" className='action-button'>HIRE ME</a>
                <a id="profile-action" className='action-button'>RESUME</a>
            </div>
        </div>
    </>   
}

export default Profile