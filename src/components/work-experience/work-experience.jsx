import React, { Fragment } from 'react';
import ReactHtmlParser from 'react-html-parser';

import Header from '../nav/header';
import { dataTextContent } from '../../utilities/constants-text-content';

import './work-experience.css';


export default props => (

    props.cv ?

        <div className="container work-experience-cv">

            <h1>{dataTextContent.workExperience.title}</h1>

            { dataTextContent.workExperience.roles.map((workAssignment, i) => {
                return (
                    <Fragment key={i}>
                        {!workAssignment.hideCompanyOnCV && <p className="companyOnCV">{workAssignment.company}</p>}
                        <div className="role-and-dates">
                            <p className={`role ${workAssignment.hideCompanyOnCV ? "highlightAsCompanyOnCV" : ""}`}>{workAssignment.role}</p>
                            <p className="dates">{workAssignment.dates}</p>
                        </div>
                        { workAssignment.activities && workAssignment.activities.map((topic, j) => <p key={j} className="first-paragraph">{topic}</p>) }
                        { workAssignment.activitiesHTML && ReactHtmlParser(workAssignment.activitiesHTML) }
                    </Fragment>
                )
            })}

        </div>

    :

        <Fragment>

            <Header />
            
            <div className="container work-experience">

                <img className="full-screen-background-image" alt=""></img>

                <section className="work-experience">

                    <div className="paper">

                        <h1>{dataTextContent.workExperience.title}</h1>

                        <ul>
                            { dataTextContent.workExperience.roles.map((workAssignment, i) => {
                                return (
                                    <li key={i}>
                                        <span></span>
                                        <div className="job">
                                            <div className="role">{workAssignment.role}</div>
                                            <div className="company">{workAssignment.company}</div>
                                            <div className="info">
                                                { workAssignment.activities && workAssignment.activities.map((topic, j) => <p key={j}>{topic}</p>) }
                                                { workAssignment.activitiesHTML && ReactHtmlParser(workAssignment.activitiesHTML) }
                                            </div>
                                        </div>
                                        <div className="dates">
                                            <span>{workAssignment.dates}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </section>
            </div>
        </Fragment>
   
)