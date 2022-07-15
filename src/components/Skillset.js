import React from 'react';


function Skillset() {
    return (
        <div>
            <h2>Writing Skillset</h2>
            <section className="skill-item">
                <div>
                    <img src="/images/icons8-canva.svg" alt="canva"/>
                    <p>Canva</p>
                </div>
                <div>
                    <img src="/images/icons8-sketch.svg" alt="sketch"/>
                    <p>Sketch</p>
                </div>
                <div>
                    <img src="/images/icons8-figma.svg" alt="figma"/>
                    <p>Figma</p>
                </div>
                <div>
                    <img src="/images/icons8-html-5.svg" alt="html"/>
                    <p>html5</p>
                </div>
                <div>
                    <img src="/images/icons8-css3.svg" alt="css3"/>
                    <p>css3</p>
                </div>
                <div>
                    <img src="/images/icons8-react-native.svg" alt="react"/>
                    <p>React</p>
                </div>            
            </section>
            <div>
                <span id="icons">Icons supplied by <a href="https://icons8.com">Icons8</a></span>
            </div>
        </div>
    )
}

export default Skillset;