import React, { Component, Fragment } from 'react';

import Header from '../nav/header';
import Skills from '../skills/skills';
import WorkExperience from '../work-experience/work-experience';
import Education from '../education/education';
import Training from '../training/training';

import { dataTextContent } from '../../utilities/constants-text-content';
import { CV_HREF_DOWNLOAD, CV_HREF_EMAIL, CV_HREF_LINKEDIN, CV_HREF_CV, CV_TEXT_EMAIL, CV_TEXT_LINKEDIN, CV_TEXT_CV, CV_IMAGE_EMAIL, CV_IMAGE_LINKEDIN, CV_IMAGE_GITHUB } from '../../utilities/constants';

import './cv.scss';


export default class CV extends Component {

    state = {
        displayDownloadHelp: true
    }

    componentDidMount() {
        this.interval = setTimeout(() => this.setState({displayDownloadHelp: false}), 2000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        
        return (

            <Fragment>

                <Header />

                <div className="container cv">
                    
                    <img className="full-screen-background-image" alt=""></img>

                    <section className="cv">

                        <div className="paper">
                        
                            <section className="header">
                                <div className="name-details">
                                    <h1 className="name">{dataTextContent.general.name}</h1>
                                    <h3>{dataTextContent.cv.jobTitle}</h3>
                                    <p>{dataTextContent.cv.description}</p>
                                </div>
                                <div className="contact-details">
                                    <a className="download-cv" href={CV_HREF_DOWNLOAD} target = "_blank" rel="noopener noreferrer">Download CV</a>
                                    {this.state.displayDownloadHelp && <span className="download-help"></span>}
                                    <div className="image">
                                        <img src={CV_IMAGE_EMAIL} alt="" />
                                        <a href={CV_HREF_EMAIL} target="_blank" rel="noopener noreferrer">{CV_TEXT_EMAIL}</a>
                                    </div>
                                    <div className="image">
                                        <img src={CV_IMAGE_LINKEDIN} alt="" />
                                        <a href={CV_HREF_LINKEDIN} target="_blank" rel="noopener noreferrer">{CV_TEXT_LINKEDIN}</a>
                                    </div>
                                    <div className="image">
                                        <img src={CV_IMAGE_GITHUB} alt="" />
                                        <a href={CV_HREF_CV} target="_blank" rel="noopener noreferrer">{CV_TEXT_CV}</a>
                                    </div>
                                </div>
                            </section>

                            <hr />

                            <section className="work-skills-education">
                                <WorkExperience cv={true} />
                                <div className="skills-education">
                                    <Skills cv={true} />
                                    <Education cv={true} />
                                </div>
                            </section>

                            <hr />

                            <section className="training">
                                <Training cv={true} />
                            </section>

                        </div>

                    </section>

                </div>

            </Fragment>
        )
    }
}