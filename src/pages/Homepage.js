import About from "../sections/About";
import Contact from "../sections/Contact";
import Intro from "../sections/Intro";
import Profile from "../components/Profile";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import Menu from "../components/Menu";
import { useLayoutEffect, useRef } from "react"
import observer from "../components/Observer.js"

export default function Homepage() {
	const findHidden = () => {
		document.querySelectorAll('.hidden1').forEach((el) => { observer.observe(el) })
		setTimeout(findHidden, 250)
	}
	useLayoutEffect(() => {
		findHidden()
	}, [])

	const nameRef = useRef(null)

	function focus(){
		if (nameRef.current){
			setTimeout(() => {
				nameRef.current.focus()
				console.log('called')
			}, 1000)
		}
	}

	return <div id="homepage" className="flex flex-col mx-auto md:w-[700px] xl:w-screen xl:flex-row overflow-hidden">
		<Profile></Profile>
		<div id="homepage-sections" className="flex flex-col gap-4 px-[20px] xl:h-screen [&>section]:max-w-[1700px] [&>section]:w-full w-full items-center xl:overflow-y-scroll xl:pl-16 xl:pr-32">
			<Intro></Intro>
			<About></About>
			<Resume></Resume>
			<Services focus={focus}></Services>
			<Skills></Skills>
			<Projects></Projects>
			<Contact nameRef={nameRef}></Contact>
		</div>
		<Menu></Menu>
	</div>
}