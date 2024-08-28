import { faGithub, faLinkedin, faUpwork, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faBars, faClose, faEnvelope, faFile, faGears, faHome, faIdCard, faPlay, faShapes, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'

function Menu(){
    const [show, updateShow] = useState(false)

    return <>
        <div className="fixed w-14 h-14 top-5 right-5 xl:top-10 xl:right-14 flex justify-center items-center cursor-pointer group rounded-full border-borderColor hover:border-accent border-[2px]" onClick={() => {updateShow(true)}}>
            <FontAwesomeIcon icon={faBars} className='w-[50%] h-[50%] group-hover:[&>path]:fill-accent [&>path]:fill-secondary'/>
        </div>
        <div className="hidden xl:flex fixed w-14 h-fit py-1 top-32 flex-col right-14 cursor-pointer rounded-full border-borderColor hover:border-accent border-[2px]">
            <a href='#introduction' aria-label='scroll to introduction section' className='group w-full aspect-square flex justify-center items-center'>
                <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faHome}/>
                <div className='absolute right-12 items-center flex pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto ease-in-out duration-500 delay-200 transition-opacity'>
                    <h2 className='bg-borderColor rounded-sm left-[5%] px-2'>Introduction</h2>
                    <FontAwesomeIcon icon={faPlay} className='[&>path]:fill-borderColor absolute right-[-10px]'></FontAwesomeIcon>
                </div>
            </a>
            <a href='#about' aria-label='scroll to about section' className='group w-full aspect-square flex justify-center items-center'>
                <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faUser}/>
                <div className='absolute right-12 items-center flex pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto ease-in-out duration-300 delay-150 transition-opacity'>
                    <h2 className='bg-borderColor rounded-sm left-[5%] px-2'>About</h2>
                    <FontAwesomeIcon icon={faPlay} className='[&>path]:fill-borderColor absolute right-[-10px]'></FontAwesomeIcon>
                </div>
            </a>
            <a href='#resume' aria-label='scroll to resume section' className='group w-full aspect-square flex justify-center items-center'>
                <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faFile}/>
                <div className='absolute right-12 items-center flex pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto ease-in-out duration-500 delay-200 transition-opacity'>
                    <h2 className='bg-borderColor rounded-sm left-[5%] px-2'>Resume</h2>
                    <FontAwesomeIcon icon={faPlay} className='[&>path]:fill-borderColor absolute right-[-10px]'></FontAwesomeIcon>
                </div>
            </a>
            <a href='#services' aria-label='scroll to services section' className='group w-full aspect-square flex justify-center items-center'>
                <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faGears}/>
                <div className='absolute right-12 items-center flex pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto ease-in-out duration-500 delay-200 transition-opacity'>
                    <h2 className='bg-borderColor rounded-sm left-[5%] px-2'>Services</h2>
                    <FontAwesomeIcon icon={faPlay} className='[&>path]:fill-borderColor absolute right-[-10px]'></FontAwesomeIcon>
                </div>
            </a>
            <a href='#skills' aria-label='scroll to skills section' className='group w-full aspect-square flex justify-center items-center'>
                <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faShapes}/>
                <div className='absolute right-12 items-center flex pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto ease-in-out duration-500 delay-200 transition-opacity'>
                    <h2 className='bg-borderColor rounded-sm left-[5%] px-2'>Skills</h2>
                    <FontAwesomeIcon icon={faPlay} className='[&>path]:fill-borderColor absolute right-[-10px]'></FontAwesomeIcon>
                </div>
            </a>
            <a href='#projects' aria-label='scroll to projects section' className='group w-full aspect-square flex justify-center items-center'>
                <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faIdCard}/>
                <div className='absolute right-12 items-center flex pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto ease-in-out duration-500 delay-200 transition-opacity'>
                    <h2 className='bg-borderColor rounded-sm left-[5%] px-2'>Projects</h2>
                    <FontAwesomeIcon icon={faPlay} className='[&>path]:fill-borderColor absolute right-[-10px]'></FontAwesomeIcon>
                </div>
            </a>
            <a href='#contact' aria-label='scroll to contact section' className='group w-full aspect-square flex justify-center items-center'>
                <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faEnvelope}/>
                <div className='absolute right-12 items-center flex pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto ease-in-out duration-500 delay-200 transition-opacity'>
                    <h2 className='bg-borderColor rounded-sm left-[5%] px-2'>Contact</h2>
                    <FontAwesomeIcon icon={faPlay} className='[&>path]:fill-borderColor absolute right-[-10px]'></FontAwesomeIcon>
                </div>
            </a>
        </div>
        <div onClick={() => {updateShow(false)}} className={`${show ? 'block' : 'hidden'} fixed top-0 left-0 w-screen h-screen opacity-20 bg-secondary`}></div>
        <div className={`${show ? 'right-0' : 'right-[-100%]'} h-full transition-[all] duration-500 ease-in-out fixed w-[300px] 
                        top-0 bg-[#111111] m-0 overflow-x-hidden overflow-y-hidden flex justify-center items-center`}>
            <div onClick={() => {updateShow(false)}} className='bg-primary group cursor-pointer hover:bg-red-400 w-8 h-8 rounded-lg absolute flex justify-center items-center top-5 right-5'>
                <FontAwesomeIcon icon={faClose} className='[&>path]:fill-borderColor w-[70%] h-[70%] group-hover:[&>path]:fill-background'/>
            </div>
            <div>
                <div>
                    <h2 className='text-secondary'>Menu</h2>
                    <div className='flex flex-col gap-1 my-10'>
                        <a onClick={() => {updateShow(false)}} href='#introduction' aria-label='scroll to introduction section' className='group flex items-center'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary w-[15px] h-[15px] group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faHome}/>
                            <h2 className='pl-5 text-secondary group-hover:text-primary'>Introduction</h2>
                        </a>
                        <a onClick={() => {updateShow(false)}} href='#about' aria-label='scroll to about section' className='group flex items-center'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary w-[15px] h-[15px] group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faUser}/>
                            <h2 className='pl-5 text-secondary group-hover:text-primary'>About</h2>
                        </a>
                        <a onClick={() => {updateShow(false)}} href='#resume' aria-label='scroll to resume section' className='group flex items-center'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary w-[15px] h-[15px] group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faFile}/>
                            <h2 className='pl-5 text-secondary group-hover:text-primary'>Resume</h2>
                        </a>
                        <a onClick={() => {updateShow(false)}} href='#services' aria-label='scroll to services section' className='group flex items-center'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary w-[15px] h-[15px] group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faGears}/>
                            <h2 className='pl-5 text-secondary group-hover:text-primary'>Services</h2>
                        </a>
                        <a onClick={() => {updateShow(false)}} href='#skills' aria-label='scroll to skills section' className='group flex items-center'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary w-[15px] h-[15px] group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faShapes}/>
                            <h2 className='pl-5 text-secondary group-hover:text-primary'>Skills</h2>
                        </a>
                        <a onClick={() => {updateShow(false)}} href='#projects' aria-label='scroll to projects section' className='group flex items-center'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary w-[15px] h-[15px] group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faIdCard}/>
                            <h2 className='pl-5 text-secondary group-hover:text-primary'>Projects</h2>
                        </a>
                        <a onClick={() => {updateShow(false)}} href='#contact' aria-label='scroll to contact section' className='group flex items-center'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary w-[15px] h-[15px] group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faEnvelope}/>
                            <h2 className='pl-5 text-secondary group-hover:text-primary'>Contact</h2>
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className='text-secondary'>Social</h2>
                    <div className='flex gap-4 py-10'>
                        <a onClick={() => {updateShow(false)}} aria-label='github profile link' className='group cursor-pointer' target='_blank' href='https://github.com/Nenad005'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent w-[20px] h-[20px] group-hover:scale-125' icon={faGithub}/>
                        </a>
                        <a onClick={() => {updateShow(false)}} aria-label='linkedin profile link' className='group cursor-pointer' target='_blank' href='https://www.linkedin.com/in/marko-nenadovic-293a6125b'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent w-[20px] h-[20px] group-hover:scale-125' icon={faLinkedin}/>
                        </a>
                        <a onClick={() => {updateShow(false)}} aria-label='upwork profile link' className='group cursor-pointer' target='_blank' href='https://www.upwork.com/freelancers/~0147c82d5c59edce57?mp_source=share'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent w-[20px] h-[20px] group-hover:scale-125' icon={faUpwork}/>
                        </a>
                        <a onClick={() => {updateShow(false)}} aria-label='whatsapp contact link' className='group cursor-pointer' target='_blank' href='https://wa.me/+381654546204'>
                            <FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent w-[20px] h-[20px] group-hover:scale-125' icon={faWhatsapp}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Menu