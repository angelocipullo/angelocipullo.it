import { Fade } from "react-awesome-reveal"

const TimelineElement = ({ title, subtitle, imgUrl, date, inverted }) => {
    if (inverted) {
        // right bubble
        return (
            <>
                <div className="timeline__component ">
                    <Fade delay={100}>
                        <div className="font-thin no-family text-right text-white">
                            {date}
                        </div>
                    </Fade>
                </div>
                <div className="timeline__middle">
                    <div className="timeline__point"></div>
                </div>
                <Fade  delay={200} direction="right">
                    <div className="ml-0 timeline__component timeline__component--bg">

                        <div className='flex items-center space-x-2'>
                            <div
                                style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}
                                className="bg-gray-400 border-2 shadow border-gray-800 h-14 w-14 rounded-full"
                            />
                            <h2 className="text-2xl font-[900] font-primary">{title}</h2>
                        </div>

                        <p className="text-lg mt-2">
                            {subtitle}
                        </p>
                    </div>
                </Fade>
            </>
        )
    } else {
        // left bubble
        return (
            <>
                <Fade direction="left" delay={200}>
                    <div className="ml-0 timeline__component timeline__component--bg">
                        <div className='flex items-center space-x-2'>
                            <div
                                style={{ background: `url(${imgUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
                                className="bg-gray-400 border-2 shadow border-gray-800 h-14 w-14 rounded-full"
                            />
                            <h2 className="text-2xl font-[900] font-primary">{title}</h2>
                        </div>
                        <p className="text-lg mt-2">
                            {subtitle}
                        </p>
                    </div>
                </Fade>
                <div className="timeline__middle">
                    <div className="timeline__point timeline__point"></div>
                </div>
                <Fade delay={100}>
                    <div className="timeline__component ">
                        <div className="hidden md:block font-thin no-family text-white text-left">{date}</div>
                    </div>
                </Fade>
            </>
        )
    }
}

export default TimelineElement