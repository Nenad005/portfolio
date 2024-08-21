import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdCard, faLink } from '@fortawesome/free-solid-svg-icons'
import { gql, useQuery } from "@apollo/client"
import { backendUri } from "../backendUri"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const GET_DATA = gql`
    query {
        projects{
            data{
                attributes{
                    Title
                    Description
                    Technologies
                    Featured
                    GithubUrl
                    Url
                    Image{
                        data{
                            attributes{
                                url
                                alternativeText
                            }
                        }
                    }
                }
            }
        }
    }
`

function Projects(){
    const {loading, error, data} = useQuery(GET_DATA)
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>

    return <section id="projects">
        <h2 id="section-icon"><FontAwesomeIcon icon={faIdCard}/>PROJECTS</h2>
        <h1 id="projects-title">Featured <span>Projects</span></h1>
        <div id="projects-wrapper" className="mt-10">
            {data.projects.data.map((project, index) => {
                let attributes = project.attributes
                let technologies = attributes.Technologies.split(',')
                // console.log(technologies)
                return <div id="project" key={index} className={`${attributes.Featured ? 'featured' : ''} mb-10`}>
                    <div className="w-full aspect-video relative group/proj">
                        <img className="absolute w-full h-full object-cover rounded-3xl brightness-75" 
                                src={`${backendUri}${attributes.Image.data.attributes.url}`} 
                                alt={attributes.Image.data.attributes.alternativeText}></img>
                        {attributes.Url && <a href={attributes.Url} target="_blank" className="absolute top-[15px] left-[15px] group bg-primary px-3 py-2 rounded-3xl">
                            <FontAwesomeIcon className="[&>path]:fill-black group-hover:[&>path]:fill-accent" icon={faLink}></FontAwesomeIcon>
                        </a>}
                        {attributes.GithubUrl && <a href={attributes.GithubUrl} target="_blank" className="absolute top-[15px] right-[15px] bg-primary px-3 py-2 rounded-3xl">
                            <FontAwesomeIcon className="[&>path]:fill-black" icon={faGithub}></FontAwesomeIcon>
                        </a>}
                        <div className="absolute bottom-[15px] left-[15px] flex flex-wrap gap-4">
                            {technologies.map((technology, index) => {
                                return <h2 key={index} className="text-black bg-white group-hover/proj:text-white group-hover/proj:bg-[#1F1F1F] px-3 py-2 rounded-3xl font-light">{technology.trim()}</h2>
                            })}
                        </div>
                    </div>
                    <h2 className="title mt-5 text-4xl">{attributes.Title}</h2>
                    <h2>{attributes.Description}</h2>
                </div>
            })}
            <div id="project important"></div>
        </div>
        <a id="projects-github-plug" className="text-4xl hover:underline text-accent mt-10">Dive deeper into my diverse projects on GitHub <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>

    </section>   
}

export default Projects