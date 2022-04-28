import "./Timeline.css"
import React from 'react'
import TimelineElement from "./TimelineElement"

const Timeline = (props) => {

    const handleJobRender = (job, key) => {
        let isInverted = ((key % 2) >= 1)

        return (
            <TimelineElement
                key={'timeline-' + key}
                title={job.title}
                subtitle={job.subtitle}
                date={job.date}
                inverted={window.innerWidth < 1000 ? false : isInverted}
                imgUrl={job.imgUrl}
            />
        )
    }

    return (
        <div className="timeline md:px-10">
            {props.data.map(handleJobRender)}
        </div>
    )
}


export default Timeline