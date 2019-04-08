import React, { Component, Fragment  } from 'react';

import Header from '../nav/header';
import Project from './project';

import { PROJECT_DATA, WALLBOARD_IMAGE_PROJECTS } from '../../utilities/constants';

import './projects.scss';


export default class Projects extends Component {

    state = {
        projectCounter: 0,
        projectImageCounter: 0,
        displayDownloadHelp: true,
    }

    handlePreviousProject = () => {
        if (this.state.projectCounter > 0) {
            this.setState(prevState => ({projectCounter: prevState.projectCounter - 1, projectImageCounter: 0}))
        }
    }

    handleNextProject = () => {
        if ((this.state.projectCounter + 1) < PROJECT_DATA.length) {
            this.setState(prevState => ({projectCounter: prevState.projectCounter + 1, projectImageCounter: 0}))
        }
    }

    handlePreviousProjectImage = () => {
        if (this.state.projectImageCounter > 0) {
            this.setState(prevState => ({projectImageCounter: prevState.projectImageCounter - 1}))
        }
    }

    handleNextProjectImage = () => {
        if ((this.state.projectImageCounter + 1) < PROJECT_DATA[this.state.projectCounter].images.length) {
            this.setState(prevState => ({projectImageCounter: prevState.projectImageCounter + 1}))
        }
    }

    getImageStyle() {
        return {
            backgroundImage: `url(${ PROJECT_DATA[this.state.projectCounter].images[this.state.projectImageCounter] })`,
        }
    }

    handleViewApp = (source) => {
        window.open(source, "_blank");
    }

    componentDidMount() {
        this.interval = setTimeout(() => this.setState({displayDownloadHelp: false}), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {

        const { projectCounter, projectImageCounter, displayDownloadHelp } = this.state;
        const project = PROJECT_DATA[projectCounter];

        return(

            <Fragment>

                <Header />

                <div className="container projects">

                    <div className="projects">

                        <div className="project">

                            <section className="wallboard">

                                <img src={WALLBOARD_IMAGE_PROJECTS} alt="" />

                                <Project 
                                    project={project}
                                    isFirstProject={projectCounter === 0}
                                    isLastProject={projectCounter + 1 === PROJECT_DATA.length}
                                    handleNextProject = {this.handleNextProject}
                                    handlePreviousProject = {this.handlePreviousProject}
                                    displayDownloadHelp={displayDownloadHelp}
                                />

                            </section>

                            <section className="project-images">
                                <div className="project-image previous">
                                    <button className={`${projectImageCounter === 0 ? "first" : ""}`} onClick={this.handlePreviousProjectImage}></button>
                                    {displayDownloadHelp && <span className="download-help3"></span>}
                                </div>

                                <div style={this.getImageStyle()} className="project-image-carousel"></div>

                                <div className="project-image next">
                                    <button className={`${projectImageCounter + 1 === project.images.length ? "last" : ""}`} onClick={this.handleNextProjectImage}></button>
                                    {displayDownloadHelp && <span className="download-help4"></span>}
                                </div>
                            </section>

                        </div>            

                    </div>
                </div>

            </Fragment>
        )
    }
}