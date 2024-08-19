import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
    query {
        experiences{
            data{
                id
                attributes{
                    Description
                    Begining
                    End
                    ShortDescription
                    Title
                    URL
                    Location{
                        LocationUrl
                        LocationString
                    }
                }
            }
        }
    }`

function Resume(){
    const { loading, error, data } = useQuery(GET_DATA);
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>

    console.log(data.experiences.data)

    return <section id="resume">
        <div id="section-icon"><FontAwesomeIcon icon={faFile}/>RESUME</div>
        <h1 id="resume-title">Education & <span>Experience</span></h1>
        <div id="resume-wrapper">
            {data.experiences.data.map((experience) => {
                let attributes = experience.attributes
                let beginingDateArr = attributes.Begining ? attributes.Begining.split('-') : null
                let beginingDate = beginingDateArr ? {
                    year : beginingDateArr[0],
                    month : beginingDateArr[1],
                    day : beginingDateArr[2]
                } : null
                let beginingDateStr = beginingDate ? `${beginingDate.month} ${beginingDate.year}` : 'Present'

                let endDateArr = attributes.End ? attributes.End.split('-') : null
                let endDate = endDateArr ? {
                    year : endDateArr[0],
                    month : endDateArr[1],
                    day : endDateArr[2]
                } : null
                let endDateStr = endDate ? `${endDate.month} ${endDate.year}` : 'Present'
                let shortDescStr = attributes.ShortDescription.replace(',', '<code>.</code>')
                
                return <div id="resume-task" className=" flex flex-row gap-[40px]">
                    <div className="flex flex-col justify-center items-center block">
                        <div className="bg-secondary w-[10px] h-[10px] rounded-[50%]"></div>
                        <div className="bg-secondary w-[2px] h-full"></div>
                    </div>
                    <div className="py-7">
                        <p className="subtitle mb-3">{beginingDateStr} - {endDateStr}</p>
                        <a href={attributes.URL ? attributes.URL : ''} target="_blank" className="title">{attributes.Title}</a>
                        <div className="subtitle flex mb-3" dangerouslySetInnerHTML={{__html: shortDescStr}}></div>
                        {attributes.Location && <>
                            <a href={attributes.Location.LocationUrl}>Location : {attributes.Location.LocationString}</a>
                        </>}
                    </div>
                </div>
            })}
        </div>
    </section>   
}

export default Resume