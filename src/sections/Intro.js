import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
    query {
        counters{
            data{
                attributes{
                    Description
                    Count
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
        <div id="section-icon"><FontAwesomeIcon icon={faHome}/> INTRODUCTION</div>
        <h1 id="intro-title" className="big-title" >Hello there! I'm <span>Marko Nenadovic</span>, a Full-Stact developer</h1>
        <h2 id="intro-subtitle" className="subtitle">I design and code beautifully simple things and i love what i do. Just simple like that!</h2>
        <a id="intro-projects-link"></a>
        <div id="intro-counters" className="flex [&>div]:w-[100px] w-full justify-between px-4">
            {data.counters.data.map((counter) => {
                let attributes = counter.attributes
                return <div id="intro-counter-expreience">
                    <h1 id="intro-counter-number" className="text-accent">{attributes.Count}+</h1>
                    <h2 id="intro-counter-title" className="subtitle">{attributes.Description}</h2>
                </div>
            })}
        </div>
    </section>   
}

export default Intro