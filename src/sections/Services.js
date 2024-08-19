import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGears } from '@fortawesome/free-solid-svg-icons'
import {useQuery, gql} from '@apollo/client'

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

function Services(){
    const {loading, error, data} = useQuery(GET_DATA)
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>

    return <section id="services">
        <div id="section-icon"><FontAwesomeIcon icon={faGears}/> SERVICES</div>
        <h1 id="services-title">My <span>Specializations</span></h1>
        <div id="services-wrapper">
            <div id="service">Custom Website Development</div>
        </div>
    </section>   
}

export default Services