import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShapes } from '@fortawesome/free-solid-svg-icons'
import {useQuery, gql} from '@apollo/client'
import { backendUri } from "../backendUri"

const GET_DATA = gql`
    query {
        technologies(pagination: {limit: 100}){
            data{
            id
                attributes{
                    Name
                    tool
                    Image{
                        data{
                            id
                            attributes{
                                url
                                alternativeText
                                __typename
                            }
                        }
                    }
                    __typename
                }
            }
        }
    }
`

function Skills(){
    const {loading, error, data} = useQuery(GET_DATA)
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>

    let skills = []
    let tools = []
    data.technologies.data.forEach(technology => {
        if (technology.attributes.tool) tools.push(technology)
        else skills.push(technology)
    });

    return <section id="skills">
        <div id="section-icon"><FontAwesomeIcon icon={faShapes}/>SKILLS</div>
        <h1 id="skills-title">My <span>Advantages</span></h1>
        <div id="skills-wrapper" className="w-full flex gap-7 flex-wrap justify-center mt-10 mb-10">
            {skills.map((skill, index) => {
                return <div key={index} id="skill" className="flex flex-col w-fit justify-center items-center">
                    <div className="w-fit h-fit border-solid border-borderColor border-[1px] p-5 rounded-3xl">
                        <img className="object-contain w-[70px] h-[70px]" src={`${backendUri}${skill.attributes.Image.data.attributes.url}`}
                             alt={skill.attributes.Image.data.attributes.alternativeText}></img>
                    </div>
                    <h2 className="font-thin mt-2">{skill.attributes.Name}</h2>
                </div>
            })}
        </div>
        <h1 id="tools-title">Powered by Essention <span>Tools</span></h1>
        <div id="tools-wrapper" className="w-full flex gap-7 flex-wrap justify-center mt-10">
            {tools.map((tool, index) => {
                return <div key={index} id="tool" className="flex flex-col w-fit justify-center items-center">
                    <div className="w-fit h-fit border-solid border-borderColor border-[1px] rounded-3xl p-5">
                        <img className="object-contain w-[70px] h-[70px]" src={`${backendUri}${tool.attributes.Image.data.attributes.url}`}
                             alt={tool.attributes.Image.data.attributes.alternativeText}></img>
                    </div>
                    <h2 className="font-thin mt-2">{tool.attributes.Name}</h2>
                </div>
            })}
        </div>
    </section>   
}

export default Skills