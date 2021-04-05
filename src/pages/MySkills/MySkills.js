import React from 'react'

export default function MySkills() {
    return (
        <div className="my-skills-page text-white pt-5">
            <div className="container mx-auto">
                <h4><span>MY SKILLS</span></h4>
                <div className="row">
                    <div className="col-4">
                        <div className="info-content">
                            <div className="content-box p-4">
                                <h5>PROGRAMMING LANGUAGES</h5>
                                <ul>
                                    <li>Javascript</li>
                                    <li>Web Suite (HTML, CSS, SCSS)</li>
                                </ul>
                                <h5>FRAMEWORKS</h5>
                                <ul>
                                    <li>ReactJS</li>
                                    <li>Angular</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="info-content">
                            <div className="content-box p-4">
                                <h5>VERSION CONTROL</h5>
                                <ul>
                                    <li>Git</li>
                                    <li>Github</li>
                                </ul>
                                <h5>CODE EDITOR</h5>
                                <ul>
                                    <li>Visual Studio Code</li>
                                    <li>Sublime Text</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="info-content">
                            <div className="content-box p-4">
                                <h5>ENGLISH SKILL</h5>
                                <ul>
                                    <li>Able to read foreign books and documents</li>
                                    <li>Can communicate in basic English</li>
                                </ul>
                                <h5>KNOWLEDGE</h5>
                                <ul>
                                    <li>Responsive</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
