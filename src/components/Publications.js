import React from 'react';

function Publications() {

    return(

        <div className="content-wrap">
            <h1>Publications</h1>

            <div className="publications-item-row">

                <div className="publications-item">
                    <a href="https://www.amazon.com.au/Finding-Your-Within-Burning-World-ebook/dp/B08L6TX3XK/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1620094945&sr=8-1" target="_blank"><img src="/images/fire.jpg"/></a>
                    <a href="https://www.amazon.com.au/Finding-Your-Within-Burning-World-ebook/dp/B08L6TX3XK/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1620094945&sr=8-1" target="_blank"><h3>Finding Your Fire Within a Burning World</h3></a>
                    <p>This is my first published book which seeks to help people who are going through change amongst the challenges that this world offers.</p>
                </div>

                <div className="publications-item">
                    <a href="https://www.linkedin.com/pulse/removing-ambiguity-linkedins-application-process-alistair-gray/" target="_blank"><img src="/images/dog.jpeg"/></a>
                    <a href="https://www.linkedin.com/pulse/removing-ambiguity-linkedins-application-process-alistair-gray/" target="_blank"><h3>Removing the ambiguity in LinkedIn's application process</h3></a>
                    <p>Here I discuss some user experience gaps in the hiring phase for job applicants.</p>
                </div>

                <div className="publications-item">
                <a href="https://www.linkedin.com/pulse/case-space-hub-geelong-alistair-gray/" target="_blank"><img src="/images/spacex-heavy.jpeg"/></a>
                <a href="https://www.linkedin.com/pulse/case-space-hub-geelong-alistair-gray/" target="_blank"><h3>The case for a space hub in Geelong</h3></a>
                    <p>Here I detail an idea for a space manufacturing and data science hub in the region of Geelong, Victoria.</p>
                </div>

                <div className="publications-item">
                    <img src="/images/vertical-farm.jpeg"/>
                    <h3>Modernising our Agricultural Sector</h3>
                    <p>I talk about how Australia has an incredible advantage utilising renewables and vertical farming.</p>
                </div>

                <div className="publications-item">
                        <img src="/images/rocket-lab.jpeg"/>
                        <h3>Why Australia needs a space agency</h3>
                        <p>As of 2019 we now have an agency. But prior to that announcement I was advocating why it was important to the future of our economy.</p>
                </div>

                <div className="publications-item">
                    <img src="/images/hands.jpeg"/>
                    <h3>The fight against complexity</h3>
                    <p>The final article in the series exploring information overload at scale.</p>
                </div>

                <div className="publications-item">
                    <img src="/images/iota.jpeg"/>
                    <h3>Blockchain and Agile</h3>
                    <p>I explore the mechanisms of both blockchain and blockless chains alongside agile to adequately scale organisations without compromising cognitive load.</p>
                </div>

                <div className="publications-item">
                    <img src="/images/apps.jpeg"/>
                    <h3>Blockchain and Agile</h3>
                    <p>Messaging app saturation and how it kills workplace productivity.</p>
                </div>

                <div className="publications-item">
                    <img src="/images/frustrated.png"/>
                    <h3>Why Email needs to die a fiery death…and be reborn</h3>
                    <p>I challenge the idea that email and messaging apps need a major rethink.</p>
                </div>

                <div className="publications-item">
                    <img src="/images/brain.jpeg"/>
                    <h3>Why we need to have a chat about Information Overload</h3>
                    <p>The original article that outlines why information overload is a major problem that is only being marginally tackled.</p>
                </div>

            </div>

        </div>
    ) // return
} // class Publications

export default Publications