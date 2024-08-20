import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGears } from '@fortawesome/free-solid-svg-icons'
import {useQuery, gql} from '@apollo/client'
import {backendUri} from '../backendUri'
import {useState, useEffect} from "react"

const GET_DATA = gql`
    query {
        specializations{
            data{
                attributes{
                    Title
                    Description
                    Icon{
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

function Icon({ url }) {
    const [svgContent, setSvgContent] = useState('');
  
    useEffect(() => {
      fetch(url)
        .then(response => response.text())
        .then(data => setSvgContent(data));
    }, [url]);
  
    return (
      <div className="w-7 h-7"
        dangerouslySetInnerHTML={{ __html: svgContent }}
        // style={{ fill: '#999999' }}
      />
    );
  }

function Services(){
    const {loading, error, data} = useQuery(GET_DATA)
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>

    return <section id="services">
        <div id="section-icon"><FontAwesomeIcon icon={faGears}/> SERVICES</div>
        <h1 id="services-title">My <span>Specializations</span></h1>
        <div id="services-wrapper" className="flex flex-col gap-3">
            {data.specializations.data.map((specialization) => {
                let attributes = specialization.attributes 
                return <div id="service" className="flex flex-col border-solid border-[#626262] border-[1px] rounded-3xl px-7 py-7">
                    <div className="flex justify-between items-center">
                        <h2 className="title text-xl mb-2">{attributes.Title}</h2>
                        <Icon url={`${backendUri}${attributes.Icon.data.attributes.url}`}></Icon>
                    </div>
                    <h2 className="subtitle">{attributes.Description}</h2>
                </div>
            })}
        </div>
    </section>   
}

export default Services