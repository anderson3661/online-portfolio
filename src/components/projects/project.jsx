import React, { Component } from 'react';

import './projects.scss';


class Project extends Component {

    handleClickViewApp = (projectLoadDelay, issueLoadTimeWarning, app) => {
        projectLoadDelay(issueLoadTimeWarning, app);
    }

    render() {

        const { projectTitle, description, app, code, tools } = this.props.project;
        const { isFirstProject, isLastProject, handleNextProject, handlePreviousProject, displayDownloadHelp, projectLoadDelay, issueLoadTimeWarning } = this.props;

        return (
            <div className="info">

                <div className="project-header">

                    <div className="project previous">
                        <button className={`${isFirstProject ? "first" : ""}`} onClick={handlePreviousProject}></button>
                        {displayDownloadHelp && <span className="download-help1"></span>}
                    </div>

                    <h2>{projectTitle}</h2>

                    <div className="project next">
                        <button className={`${isLastProject ? "last" : ""}`} onClick={handleNextProject}></button>
                        {displayDownloadHelp && <span className="download-help2"></span>}
                    </div>

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

                    <div className="button view-app" onClick={this.handleClickViewApp.bind(this, projectLoadDelay, issueLoadTimeWarning, app)}></div>

                        <div>
                            <a href={code} target="_blank" rel="noopener noreferrer">
                                <div className="button view-code"></div>
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        )

    }
}

export default Project;