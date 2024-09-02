import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdCard, faLink } from '@fortawesome/free-solid-svg-icons'
import { gql, useQuery } from "@apollo/client"
import { backendUri } from "../backendUri"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const GET_DATA = gql`
    query {
        projects{
            data{
                id
                attributes{
                    Title
                    Description
                    Technologies
                    Featured
                    GithubUrl
                    Importance
                    Url
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

function Projects(){
    const {loading, error, data} = useQuery(GET_DATA)
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>

    let sortedData = [...data.projects.data].sort((a,b) => {
        let importanceA = a.attributes.Importance
        let importanceB = b.attributes.Importance
        let featuredA = a.attributes.Featured
        let featuredB = b.attributes.Featured
        importanceA = importanceA ? (featuredA ? importanceA : importanceA + 20) : 100
        importanceB = importanceB ? (featuredB ? importanceB : importanceB + 20) : 100

        // console.log(a.attributes.Title+importanceA, b.attributes.Title+importanceB)
        return importanceA - importanceB
    })

    return <section id="projects">
        <h2 id="section-icon"><FontAwesomeIcon icon={faIdCard}/>PROJECTS</h2>
        <h1 id="projects-title">Featured <span>Projects</span></h1>
        <div id="projects-wrapper" className="mt-10 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-12 max-w-[1700px]">
            {sortedData.map((project, index) => {
                let attributes = project.attributes
                let technologies = attributes.Technologies.split(',')
                // console.log(technologies)
                return <div id="project" key={index} className={`${attributes.Featured ? 'xl:col-span-2' : ''}`}>
                    <div className="w-full aspect-video relative group/proj">
                        <img className="absolute w-full h-full object-cover rounded-3xl brightness-75" 
                                src={`${backendUri}${attributes.Image.data.attributes.url}`} 
                                alt={attributes.Image.data.attributes.alternativeText}></img>
                        {attributes.Url && <a href={attributes.Url} target="_blank" aria-label="project link (website)" className="absolute top-[15px] left-[15px] group bg-primary px-3 py-2 rounded-xl">
                            <FontAwesomeIcon className="[&>path]:fill-black group-hover:[&>path]:fill-accent group-hover:scale-110" icon={faLink}></FontAwesomeIcon>
                        </a>}
                        {attributes.GithubUrl && <a href={attributes.GithubUrl} target="_blank" aria-label="project link (github)" className="absolute top-[15px] right-[15px] group bg-primary px-3 py-2 rounded-xl">
                            <FontAwesomeIcon className="[&>path]:fill-black group-hover:[&>path]:fill-accent group-hover:scale-110" icon={faGithub}></FontAwesomeIcon>
                        </a>}
                        <div className="absolute bottom-[15px] left-[15px] flex flex-wrap gap-4">
                            {technologies.map((technology, index) => {
                                return <h2 key={index} className="text-black cursor-default bg-white transition-all duration-300 group-hover/proj:text-white group-hover/proj:bg-[#1F1F1F] px-3 py-2 rounded-3xl font-light">{technology.trim()}</h2>
                            })}
                        </div>
                    </div>
                    <a href={attributes.Url ? attributes.Url : attributes.GithubUrl} target="_blank" className="hover:underline cursor-pointer block title mt-7 text-[24px]">{attributes.Title}</a>
                    <h2 className="subtitle mt-3">{attributes.Description}</h2>
                </div>
            })}
            {/* <div id="project important"></div> */}
        </div>
        <a id="projects-github-plug" target="_blank" href="https://github.com/Nenad005" className="text-[24px] block  mt-10 cursor-pointer hover:underline text-accent mt-10">Dive deeper into my diverse projects on GitHub <FontAwesomeIcon icon={faGithub} className="[&>path]:fill-primary"></FontAwesomeIcon></a>

    </section>   
}

export default Projects