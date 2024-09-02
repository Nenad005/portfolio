import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { useQuery, gql } from '@apollo/client'
import { backendUri } from '../backendUri'
import { useState, useEffect } from "react"
import { faDocker } from "@fortawesome/free-brands-svg-icons"

const GET_DATA = gql`
    query {
        specializations{
            data{
                id
                attributes{
                    Title
                    Description
                    Icon{
                        data{
                            id
                            attributes{
                                url
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

function Icon({ url }) {
    const [svgContent, setSvgContent] = useState('');

    useEffect(() => {
        fetch(url)
            .then(response => response.text())
            .then(data => setSvgContent(data));
    }, [url]);

    return (
        <div className="w-7 h-7 [&>svg]:w-full [&>svg]:h-full [&>svg]:mb-2"
            dangerouslySetInnerHTML={{ __html: svgContent }}
        // style={{ fill: '#999999' }}
        />
    );
}

function setNativeValue(element, value) {
    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

    if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, value);
    } else {
        valueSetter.call(element, value);
    }
}

function fillSubject(e, title, focus) {
    // document.querySelector("#subject")
    console.log(e, title)
    let subject = document.querySelector("#subject")
    setNativeValue(subject, title)
    subject.dispatchEvent(new Event('input', {bubbles: true}))
    focus()
}

function Services({focus}) {
    const { loading, error, data } = useQuery(GET_DATA)
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>

    return <section id="services">
        <div id="section-icon"><FontAwesomeIcon icon={faGears} /> SERVICES</div>
        <h1 id="services-title">My <span>Services</span></h1>
        <div id="services-wrapper" className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-3 mt-10 ">
            {data.specializations.data.map((specialization, index) => {
                let attributes = specialization.attributes
                return <a href="#contact" key={index} onClick={(e) => fillSubject(e, attributes.Title, focus)} id="service" className="transition-all duration-300 hover:border-accent flex flex-col border-solid border-[#626262] border-[1px] rounded-3xl px-7 py-7">
                    <div className="flex justify-between items-center h-fit">
                        <h2 className="title text-xl mb-2">{attributes.Title}</h2>
                        <Icon url={`${backendUri}${attributes.Icon.data.attributes.url}`}></Icon>
                    </div>
                    <h2 className="subtitle">{attributes.Description}</h2>
                </a>
            })}
        </div>
    </section>
}

export default Services