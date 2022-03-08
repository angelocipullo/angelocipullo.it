import "./Timeline.css"
import React from 'react'

const Timeline = (props) => {

    const handleJobRender = (job, key) => {
        let isInverted = ((key % 2) >= 1)

        return (
            <TimelineElement
                key={'timeline-' + key}
                title={job.title}
                subtitle={job.subtitle}
                date={job.date}
                inverted={isInverted}
            />
        )
    }

    return (
        <div className="timeline">
            {props.data.map(handleJobRender)}
        </div>
    )
}

const TimelineElement = ({ title, subtitle, date, bottom, inverted }) => {
    if (inverted) {
        return (
            <>
                <div className="timeline__component">
                    <div className="timeline__date timeline__date--right">{date}</div>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                </div>
                <div className="timeline__component timeline__component--bg">
                    <h2 className="text-3xl">{title}</h2>
                    <p className="">
                        {subtitle}
                    </p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="timeline__component timeline__component--bg">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-lg">
                        {subtitle}
                    </p>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point timeline__point"></div>
                </div>
                <div className="timeline__component">
                    <div className="timeline__date">{date}</div>
                </div>
            </>
        )
    }




}

export default Timeline