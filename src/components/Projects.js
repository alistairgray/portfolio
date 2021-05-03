import React from 'react';

function Projects() {
        return(
            <div className="content-wrap">
                <h1>Projects</h1>
                
                <div className="project-item-row">  
                    <div className="project-item">
                        <h2>Convo</h2>
                        <img src="/images/convo.png" alt=""/>
                        <p>This is an AI powered chatbot that simulates a networking conversation. Its aim is to help people who are new to networking and give them advice and encouragement for the real thing.</p>
                        <p>Tech Stack: React, Node, Express, Axios, IBM Watson (API) and Bootstrap</p>
                    </div>

                    <div className="project-item">           
                        <h2>Burning Airlines</h2>
                        <img src="/images/burning.png"/>
                        <p>An airline booking and registration app. Built during a 48hr period. This was a group project testing our resolve.</p>
                        <p>Tech Stack: React, Ruby-on-Rails and Axios</p>
                    </div> 

                    <div className="project-item">
                        <h2>Krave</h2>
                        <img src="/images/krave_orig.png"/>
                        <p>A restaurant menu app that sought to help people search for dietary requirements.</p>
                        <p>Tech Stack: React, Ruby-on-Rails, Google Maps (API), Bootstrap and Axios</p>
                    </div>

                </div> 
            </div>
        ) // return
} // class Projects

export default Projects