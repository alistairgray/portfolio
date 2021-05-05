import React from 'react';

function Projects() {
        return(
            <div className="content-wrap">
                <h1>Projects</h1>
                
                <div className="project-item-row">  
                    <div className="project-item">
                        <a href="https://alistairgray.github.io/convo-react-frontend/" target="_blank"><h2>Convo</h2>
                        <a href="https://alistairgray.github.io/convo-react-frontend/" target="_blank"></a><img src="/images/convo.png" alt="convo app"/></a>
                        <p>This is an AI powered chatbot that simulates a networking conversation. Its aim is to help people who are new to networking and give them advice and encouragement for the real thing.</p>
                        <p>Tech Stack: React, Node, Express, Axios, IBM Watson (API) and Bootstrap</p>
                        <ul>
                            <li><a href="https://github.com/alistairgray/convo-react-frontend" target="_blank">Github</a></li>
                            <li><a href="https://alistairgray.github.io/convo-react-frontend/" target="_blank">Live Site</a></li>                        
                        </ul>
                    </div>

                    <div className="project-item">           
                        <a href="https://github.com/alistairgray/burning-airlines-front-end" target="_blank"><h2>Burning Airlines</h2></a>
                        <a href="https://github.com/alistairgray/burning-airlines-front-end" target="_blank"><img src="/images/burning.png"/></a>
                        <p>An airline booking and registration app. Built during a 48hr period. This was a group project testing our resolve.</p>
                        <p>Tech Stack: React, Ruby-on-Rails and Axios</p>
                        <ul>
                            <li>
                                <a href="https://github.com/alistairgray/burning-airlines-front-end" target="_blank">Github Front End</a>
                            </li>
                            <li>
                                <a href="https://github.com/alistairgray/rails-burning-airlines" target="_blank">Github Back End</a>
                            </li>
                        </ul>
                    </div> 

                    <div className="project-item">
                        <a href="https://github.com/alistairgray/ka-react-frontend" target="_blank"><h2>Krave</h2></a>
                        <a href="https://github.com/alistairgray/ka-react-frontend" target="_blank"><img src="/images/krave_orig.png"/></a>
                        <p>A restaurant menu app that sought to help people search for dietary requirements.</p>
                        <p>Tech Stack: React, Ruby-on-Rails, Google Maps (API), Bootstrap and Axios</p>
                        <ul>
                            <li>
                                <a href="https://github.com/alistairgray/ka-react-frontend" target="_blank">Github Front End</a>
                            </li>
                            <li>
                                <a href="https://github.com/alistairgray/krave-rails-backend" target="_blank">Github Back End</a>
                            </li>
                        </ul>
                    </div>

                </div> 
            </div>
        ) // return
} // class Projects

export default Projects