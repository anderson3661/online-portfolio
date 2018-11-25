import React, { Component, Fragment  } from 'react';

import Header from '../nav/header';
import Project from './project';

import { PROJECT_DATA, WALLBOARD_IMAGE_PROJECTS } from '../../utilities/constants';

import './projects.scss';


export default class Projects extends Component {

    state = {
        projectCounter: 0,
        projectImageCounter: 0,
        displayDownloadHelp: true
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
        // console.log("height", window.screen.height);
        // console.log("width", window.screen.width);
        this.interval = setTimeout(() => this.setState({displayDownloadHelp: false}), 2000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {

        const { projectCounter, projectImageCounter } = this.state;
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
                                />

                            </section>

                            <section className="project-images">
                                <button className={`project-image previous ${projectImageCounter === 0 ? "first" : ""}`} onClick={this.handlePreviousProjectImage}></button>
                                <div className="project-image-background"></div>
                                <div style={this.getImageStyle()} className="project-image-carousel"></div>
                                <button className={`project-image next ${projectImageCounter + 1 === project.images.length ? "last" : ""}`} onClick={this.handleNextProjectImage}></button>
                            </section>

                            {this.state.displayDownloadHelp && <span className="download-help1"></span>}
                            {this.state.displayDownloadHelp && <span className="download-help2"></span>}
                            {this.state.displayDownloadHelp && <span className="download-help3"></span>}
                            {this.state.displayDownloadHelp && <span className="download-help4"></span>}

                        </div>            

                    </div>
                </div>

            </Fragment>
        )
    }
}