import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faFile, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Profile(){
    return <>
        <div id="profile-wrapper" className="flex h-100 flex-col 
                                             justify-end p-5 m-[12px_12px_12px_12px] border 
                                             border-solid border-borderColor 
                                             rounded-3xl items-center">
            <div id="title" className="mb-auto flex justify-between w-full items-end">
                <h1 className='title text-accent'>Marko N.</h1>
                <h1 className='subtitle text-secondary'>Developer</h1>
            </div>
            <img id="profile-picture" alt="my picture" className="bg-white w-[200px] h-[200px] mb-10 rounded-3xl mt-10"></img>
            
            <a id="profile-mail" href="mailto:markonenadovic2005@gmail.com" className='hover:underline transition-all duration-200 ease-in'><FontAwesomeIcon icon={faEnvelope} className='mr-2'/>markonenadovic2005@gmail.com</a>
            <a id="profile-location" href='https://maps.app.goo.gl/Hzbu8gQrXW11kdjq7' target='_blank' className='mb-7 hover:underline'><FontAwesomeIcon icon={faLocationDot} className='mr-2'/>Based in Belgrade, Serbia</a>
            <div id="profile-licence" className='flex justify-center items-center mb-7'>
                <FontAwesomeIcon icon={faCopyright} className='[&>*]:fill-secondary mr-2'></FontAwesomeIcon>
                <p id="licence-text" className='text-secondary text-sm'>2024 Marko Nenadovic, All Rights Reserved</p>
            </div>
            <div id="profile-links" className='mb-10'>
                <a id="profile-link">github</a>
                <a id="profile-link">linkedin</a>
                <a id="profile-link">fiverr</a>
                <a id="profile-link">upwork</a>
                <a id="profile-link">whatsapp</a>
            </div>
            <div id="profile-actions" className="w-[300px] flex justify-between">
                <a id="profile-action" className='action-button group'>
                    <FontAwesomeIcon icon={faEnvelope} className='mr-2 [&>*]:fill-black group-hover:[&>*]:fill-accent
                                                                  transition-all duration-200 ease-linear'/>
                                                                  HIRE ME</a>
                <a id="profile-action" className='action-button group'>
                    <FontAwesomeIcon icon={faFile} className='mr-2 [&>*]:fill-black group-hover:[&>*]:fill-accent
                                                                  transition-all duration-200 ease-linear'/>
                    RESUME</a>
            </div>
        </div>
    </>   
}

export default Profile