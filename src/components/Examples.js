import React from 'react';

function Examples() {
    return(
        <div className='examples content-wrap'>
            <h1>Examples</h1>
            <h2>User Experience Related</h2>
            <div className='examples-item-row'>

                <div className='examples-item'>
                    <h3>Designing Next Gen Chatbots</h3>
                    <p>Crafting appropriate copy was a significant challenge in this project as the requirements involved building in training capacities into the dialogue. Here is a sample of the front end where the text had to be semi-informal and inviting.
                    </p>
                    <img src="/images/chatbot-mockup.png" />
                </div>

                <div className='examples-item'>
                    <a href="https://www.linkedin.com/pulse/removing-ambiguity-linkedins-application-process-alistair-gray/" target="_blank"><h3>Removing ambiguity in LinkedIn's Application Process</h3></a>
                    <p>This is a mock up of collected user feedback that would be displayed to show areas such as levels of communication, the users' experience in the application phase and the time typically invested in the whole process. I've used a rating system using the blue and grey blocks but that may not be necessary.</p>
                    <img src="/images/linkedin-recruit-mockup.png" />
                </div>

                <div className='examples-item'>
                    <h3>It's not just a bank recruitment website</h3>
                    <p>I built and launched a website to attract top talent to join ANZ's UX design team. This design won wide praise and resulted in achieving the team's recruitment goals.
                    </p>
                    <img src="/images/ANZ-Microsite.png" />
                </div>
            </div>
            <h2>Creative Copywriting</h2>
            <div className='examples-item-row'>
                <div className='examples-item'>
                    <h3>Lucid Planet: Episode 5</h3>
                    <p>As the morning began, the light from the sun peeked through the ceiling and drifted across 
                        The Marchioness’s eyes. She began to awake, rather slowly, and peered up at the ceiling. There appeared to be a collection of iridescent crystals, each one carrying the light from the sun outside, illuminating the surroundings. Silvae was beside his makeshift workshop staring at its surface, deeply in thought. 
                        <br />
                        <br />
                        He looked towards Tally and spoke with a quiet intensity, “When I was young, I as others like me, took an oath. My oath to the forest is to protect you, and others like you, to ensure a safe passage. We cannot go to The Court.” Silvae motioned towards The Marchioness’s head. “That wound was not from a fall but by a Triactural Scar. Its mark is distinct.” ...</p>
                </div>
                <div className='examples-item'>
                    <h3>Flip Back (Unreleased)</h3>
                    <p>David noticed Aiden peering at the screen, took a deep breath and explained, "Everything is interconnected, the atoms that make us, our planet, sun and solar system originally came from an exploding star. It's hard to imagine that such a key event in the past led to the conversation we're having right now." David paused for a moment, got out of his chair and walked towards the centre of the room before continuing.
                    <br />
                    <br /> 
                    "But what if that star was altered, even slightly? It would affect everything, Earth, humans, who knows? We both know this it for our species, we're not ready for planetary colonisation, and I'm sure as hell that it's already too late to evacuate." David took another deep breath and looked down the central grate. "Something has to change kid, history needs to be, tweaked. And you're going to be the one to do it."</p>
                </div>
            </div>
        </div>
    )
}

export default Examples