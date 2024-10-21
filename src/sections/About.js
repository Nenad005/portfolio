import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faU, faUser } from '@fortawesome/free-solid-svg-icons'
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
    query{
        aboutMe{
            data{
                attributes{
                    __typename
                    Title
                    Paragraph
                }
            }
        }
    }
`

function About(){
    const { loading, error, data } = useQuery(GET_DATA);
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>

    return <section id="about">
        <div id="section-icon" className="hidden1 blur1"><FontAwesomeIcon icon={faUser}/>ABOUT</div>
        <h1 id="about-title" className="hidden1 blur1" dangerouslySetInnerHTML={{__html: data.aboutMe.data.attributes.Title}}></h1>
        <h2 id="about-subtitle" className="hidden1 blur1 subtitle mt-5">{data.aboutMe.data.attributes.Paragraph}</h2>
    </section>   
} 

export default About