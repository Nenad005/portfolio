import { faBars, faEnvelope, faFile, faGears, faHome, faIdCard, faShapes, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'

function Menu(){
    const [show, updateShow] = useState(false)

    return <>
        <div className="fixed w-14 h-14 top-5 right-5 xl:top-10 xl:right-14 flex justify-center items-center cursor-pointer group rounded-full border-borderColor hover:border-accent border-[2px]" onClick={() => {updateShow(true)}}>
            <FontAwesomeIcon icon={faBars} className='w-[50%] h-[50%] group-hover:[&>path]:fill-accent [&>path]:fill-secondary'/>
        </div>
        <div className="hidden xl:flex fixed w-14 h-fit py-1 top-32 flex-col right-14 cursor-pointer rounded-full border-borderColor hover:border-accent border-[2px]">
            <a href='#introduction' className='group w-full aspect-square flex justify-center items-center'><FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faHome}/></a>
            <a href='#about' className='group w-full aspect-square flex justify-center items-center'><FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faUser}/></a>
            <a href='#resume' className='group w-full aspect-square flex justify-center items-center'><FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faFile}/></a>
            <a href='#services' className='group w-full aspect-square flex justify-center items-center'><FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faGears}/></a>
            <a href='#skills' className='group w-full aspect-square flex justify-center items-center'><FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faShapes}/></a>
            <a href='#projects' className='group w-full aspect-square flex justify-center items-center'><FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faIdCard}/></a>
            <a href='#contact' className='group w-full aspect-square flex justify-center items-center'><FontAwesomeIcon className='[&>path]:fill-secondary group-hover:[&>path]:fill-accent group-hover:scale-125' icon={faEnvelope}/></a>
        </div>
        <div className={`${show ? 'right-0' : 'right-[-100%]'} h-full transition-[all] duration-500 fixed grid w-[300px] top-0 bg-[#222222] m-0 overflow-x-hidden overflow-y-hidden`}>
            <div onClick={() => {updateShow(false)}} className='w-[300px]'>Close</div>
            <h1>MENU</h1>
            <h2>{show? 'true' : 'false'}</h2>
        </div>
    </>
}

export default Menu