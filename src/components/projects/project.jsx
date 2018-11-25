import React from 'react';

import './projects.scss';


export default props => {

    let { projectTitle, description, app, code, tools } = props.project;
    let { isFirstProject, isLastProject, handleNextProject, handlePreviousProject } = props;

    return (
        <div className="info">

            <div className="project-header">
                <button className={`project previous ${isFirstProject ? "first" : ""}`} onClick={handlePreviousProject}></button>
                <h2>{projectTitle}</h2>
                <button className={`project next ${isLastProject ? "last" : ""}`} onClick={handleNextProject}></button>
            </div>

            <div className="project-body">
                <p>{description}</p>
            </div>

            <div className="project-footer">

                <div className="skills">
                    {tools.map(tool => {
                        return (
                            <div className="skill" key={tool}>
                                <span>{tool}</span>
                                <div className="tick">L</div>
                            </div>
                        )
                    })}
                </div>

                <div className="buttons">

                    <div><a href={app} target="_blank" rel="noopener noreferrer">
                        {/* <img className="button view-app" src={require("../../assets/images/miscellaneous/view-app.png")} alt=""></img> */}
                        <div className="button view-app"></div>
                    </a></div>

                    <div><a href={code} target="_blank" rel="noopener noreferrer">
                        {/* <img className="button view-code" src={require("../../assets/images/miscellaneous/view-code.png")} alt=""></img> */}
                        <div className="button view-code"></div>
                    </a></div>

                </div>

            </div>
        </div>
    )
}