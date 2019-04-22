import React, { Component, Fragment  } from 'react';

import Header from '../nav/header';
import Project from './project';

import { PROJECT_DATA, WALLBOARD_IMAGE_PROJECTS, PROJECT_LOAD_DELAY_MESSAGE } from '../../utilities/constants-projects';
import ConfirmationDialog from '../dialogs/confirmationDialog';

import './projects.scss';


export default class Projects extends Component {

    state = {
        projectCounter: 0,
        projectImageCounter: 0,
        displayDownloadHelp: true,
        dialogProjectLoadDelayIsOpen: false,
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
            this.setState(prevState => ({ projectImageCounter: prevState.projectImageCounter + 1 }));
        }
    }

    handleProjectLoadDelayClose = (appURL) => {
        // If the dialog displaying the load delay message is open, then close the dialog and open the app in a new window
        this.viewApp(appURL);
        this.setState({ dialogProjectLoadDelayIsOpen: false });
    }
    
    handleViewApp = (issueLoadDelayWarning, appURL) => {
        // If applicable issue a warning saying that it might take a bit of time to load the app
        if (issueLoadDelayWarning) {
            this.setState({ dialogProjectLoadDelayIsOpen: true });      // Open the dialog to display the load delay message
        } else {
            this.viewApp(appURL);
        }
    }

    viewApp = (appURL) => {
        window.open(appURL, "_blank");          // Open the app in a new browser window
    }
    
    getImageStyle() {
        return {
            backgroundImage: `url(${ PROJECT_DATA[this.state.projectCounter].images[this.state.projectImageCounter] })`,
        }
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
        debugger;

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
                                    projectLoadDelay={this.handleViewApp}
                                    issueLoadTimeWarning={project.issueLoadTimeWarning ? project.issueLoadTimeWarning : false }
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

                    <ConfirmationDialog message={PROJECT_LOAD_DELAY_MESSAGE} open={this.state.dialogProjectLoadDelayIsOpen} onClose={this.handleProjectLoadDelayClose.bind(this, project.app)} />

                </div>

            </Fragment>
        )
    }
}