import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useQuery, gql } from '@apollo/client';
import 'react-simple-typewriter/dist/index'
import { Typewriter } from "react-simple-typewriter/dist/index";
import CountUp from "react-countup";
import { useState } from "react";

const GET_DATA = gql`
    query {
        counters(sort:"Count:desc"){
            data{
                id
                attributes{
                    Description
                    Count
                    __typename
                }
            }
        }
    }   
`

function Intro(){
    const {loading, error, data} = useQuery(GET_DATA)
    if (loading) return <h1>Loading</h1>
    if (error) return <h1>Error</h1>



    // console.log(data.counters.data) 

    return <section id="introduction">
        <div id="section-icon" className="hidden1 down mb-20"><FontAwesomeIcon icon={faHome}/> INTRODUCTION</div>
        <h1 id="intro-title" className="big-title xl:text-6xl xl:line-" >Hello there! I'm <span className="text-primary">Marko Nenadovic</span>, a <Typewriter
            words={['Front-End Developer.', 'Back-End Developer.', 'Full-Stack Developer :)']} loop={1} onLoopDone={() => {
                console.log('done')
                document.querySelector("span.styles-module_blinkingCursor__yugAC").classList.add('hide-cursor')
            }} cursor={true} cursorColor="#28e98c"
        ></Typewriter></h1>
        <h2 id="intro-subtitle" className="hidden1 blur1 left subtitle mt-5">I design and code beautifully simple things and i love what i do. Just simple like that!</h2>
        <a id="intro-projects-link"></a>
        <div id="intro-counters" className="flex [&>div]:w-[100px] w-fit justify-between px-4 gap-5">
            {data.counters.data.map((counter, index) => {
                let attributes = counter.attributes
                return <div key={index} id="intro-counter-expreience" className="mt-20">
                    <h1 id="intro-counter-number" className="text-accent"><CountUp end={attributes.Count} duration={5}/>+</h1>
                    <h2 id="intro-counter-title" className="subtitle">{attributes.Description}</h2>
                </div>
            })}
        </div>
    </section>   
}

export default Intro