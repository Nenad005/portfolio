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

    // console.log(data.experiences.data)
    // console.log(Object.isFrozen(data.experiences.data))
    let sortedData = [...data.experiences.data].sort((a,b) => {
        let beginingDateArrA = a.attributes.Begining.split('-')
        let dateA = new Date(`${ beginingDateArrA[0]}-${beginingDateArrA[1]}-${beginingDateArrA[2]}`)

        let beginingDateArrB = b.attributes.Begining.split('-')
        let dateB = new Date(`${ beginingDateArrB[0]}-${beginingDateArrB[1]}-${beginingDateArrB[2]}`)

        return dateB.getTime() - dateA.getTime()
    })

    let monthToStr = (monthStr) => {
        // console.log(monthStr)
        switch (parseInt(monthStr)) {
            case 1:
                return 'JAN'
            case 2:
                return 'FEB'
            case 3:
                return 'MAR'
            case 4:
                return 'APR'
            case 5:
                return 'MAY'
            case 6:
                return 'JUN'
            case 7:
                return 'JUL'
            case 8:
                return 'AUG'
            case 9:
                return 'SEP'
            case 10:
                return 'OCT'
            case 11:
                return 'NOV'
            case 12:
                return 'DEC'
            default:
                return 'ERR';
        }
    }

    return <section id="resume">
        <div id="section-icon"><FontAwesomeIcon icon={faFile}/>RESUME</div>
        <h1 id="resume-title">Education & <span>Experience</span></h1>
        <div id="resume-wrapper" className="mt-10">
            {sortedData.map((experience, index) => {
                let attributes = experience.attributes
                let beginingDateArr = attributes.Begining ? attributes.Begining.split('-') : null
                let beginingDate = beginingDateArr ? {
                    year : beginingDateArr[0],
                    month : beginingDateArr[1],
                    day : beginingDateArr[2]
                } : null
                let beginingDateStr = beginingDate ? `${monthToStr(beginingDate.month).toLowerCase()} ${beginingDate.year}` : 'Present'

                let endDateArr = attributes.End ? attributes.End.split('-') : null
                let endDate = endDateArr ? {
                    year : endDateArr[0],
                    month : endDateArr[1],
                    day : endDateArr[2]
                } : null
                let endDateStr = endDate ? `${monthToStr(endDate.month).toLowerCase()} ${endDate.year}` : 'Present'
                let shortDescStr = attributes.ShortDescription.replace(',', '<code>.</code>')
                // console.log(attributes.Location)
                
                return <div key={index} id="resume-task" className=" flex flex-row gap-[40px] group">
                    <div className="flex flex-col justify-center items-center block">
                        <div className="bg-secondary w-[10px] h-[10px] rounded-[50%] group-hover:bg-accent transition-all duration-300"></div>
                        <div className="bg-secondary w-[2px] h-full"></div>
                    </div>
                    <div className="py-9">
                        <p className="subtitle mb-3 group-hover:text-accent transition-all duration-300">{beginingDateStr} - {endDateStr}</p>
                        <a href={attributes.URL ? attributes.URL : ''} target="_blank" className="title hover:underline block mt-7">{attributes.Title}</a>
                        <div className="subtitle flex mt-2" dangerouslySetInnerHTML={{__html: shortDescStr}}></div>
                        {attributes.Location.length > 0 && <>
                            <a className="hover:underline text-sm mt-4 block" href={attributes.Location[0].LocationUrl}>Location : {attributes.Location[0].LocationString}</a>
                        </>}
                    </div>
                </div>
            })}
        </div>
    </section>   
}

export default Resume