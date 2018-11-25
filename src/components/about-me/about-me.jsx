import React, { Fragment } from 'react';

import Header from '../nav/header';

import { PROFILE_IMAGE } from '../../utilities/constants';
import { dataTextContent } from '../../utilities/constants-text-content';

import './about-me.scss';


export default props => (

    <Fragment>

        <Header />

        <div className="container about-me">

            <section className="about-me">
                <div className="inner-container">
                    <div className="image-container">
                        <div className="image">
                            <img src={PROFILE_IMAGE} alt="" />
                        </div>
                    </div>
                    <div className="description">
                        <h1 className="name">{dataTextContent.general.name}</h1>
                        <span>&nbsp;-&nbsp;</span>
                        <h3 className="jobTitle">{dataTextContent.general.jobTitle}</h3>
                        {dataTextContent.aboutme.description.map((content, i) => <p key={i}>{content}</p>)}
                    </div>
                </div>
            </section>

            {/* Pre-load background images, which are then hidden in the css */}
            <img className="background-image-preload-projects" alt=""></img>
            <img className="background-image-preload-skills" alt=""></img>
            <img className="background-image-preload-work-experience" alt=""></img>
            <img className="background-image-preload-cv" alt=""></img>

        </div>

    </Fragment>
)