import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShapes } from '@fortawesome/free-solid-svg-icons'
import {useQuery, gql} from '@apollo/client'
import { backendUri } from "../backendUri"

const GET_DATA = gql`
    query {
        technologies{
            data{
                attributes{
                    Name
                    tool
                    Image{
                        data{
                            attributes{
                            url
                            }
                        }
                    }
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

    console.log(skills)
    console.log(tools)

    return <section id="skills">
        <div id="section-icon"><FontAwesomeIcon icon={faShapes}/>SKILLS</div>
        <h1 id="skills-title">My <span>Advantages</span></h1>
        <div id="skills-wrapper" className="w-full flex gap-7 flex-wrap justify-center">
            {skills.map((skill) => {
                return <div id="skill" className="flex flex-col w-fit justify-center items-center">
                    <div className="w-fit h-fit border-solid border-borderColor border-[1px] p-5 rounded-3xl">
                        <img className="w-[70px] h-[70px]" src={`${backendUri}${skill.attributes.Image.data.attributes.url}`}></img>
                    </div>
                    <h2 className="font-thin mt-2">{skill.attributes.Name}</h2>
                </div>
            })}
        </div>
        <h1 id="tools-title">Powered by Essention <span>Tools</span></h1>
        <div id="tools-wrapper" className="w-full flex gap-7 flex-wrap justify-center">
            {tools.map((tool) => {
                return <div id="tool" className="flex flex-col w-fit justify-center items-center">
                    <div className="w-fit h-fit border-solid border-borderColor border-[1px] rounded-3xl p-5">
                        <img className="w-[70px] h-[70px]" src={`${backendUri}${tool.attributes.Image.data.attributes.url}`}></img>
                    </div>
                    <h2 className="font-thin mt-2">{tool.attributes.Name}</h2>
                </div>
            })}
        </div>
    </section>   
}

export default Skills