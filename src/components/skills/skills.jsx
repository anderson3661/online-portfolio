import React, { Component, Fragment  } from 'react';

import Header from '../nav/header';
import { dataTextContent } from '../../utilities/constants-text-content';

import './skills.scss';


export default class Skills extends Component {

    render() {

        return (

            this.props.cv ?

                <div className="container skills cv">

                    <div className="technical-skills">
                        <h1>{dataTextContent.skillsForCV.technical.title}</h1>
                        {dataTextContent.skillsForCV.technical.items.map((item, i) => {
                            return (
                                <Fragment key={i}>
                                    <h3>{item.category}</h3>
                                    <p>{item.detail}</p>
                                </Fragment>
                            )
                        })}
                    </div>

                    <div className="soft-skills">
                        <h1>{dataTextContent.skillsForCV.soft.title}</h1>
                        {dataTextContent.skillsForCV.soft.items.map((item, i) => <p key={i}>{item}</p>)}
                    </div>

                </div>

            :

                <Fragment>

                    <Header />
        
                    <div className="container skills">

                        <section className="skills">

                            {dataTextContent.skills.technical.map((skill, indexSkill) => {
                                return (
                                    <div key={indexSkill} className={`details ${skill.cssClassName}`}>
                                        <h1>{skill.title}</h1>
                                        <ul>
                                            {skill.items.map((content, i) => <li key={i}>{content}</li>)}
                                        </ul>
                                    </div>
                                )
                            })}

                            {dataTextContent.skills.soft.map((skill, indexSkill) => {
                                return (
                                    <div key={indexSkill} className={`details ${skill.cssClassName}`}>
                                        <h1>{skill.title}</h1>
                                        <ul>
                                            {skill.items.map((content, i) => <li key={i}>{content}</li>)}
                                        </ul>
                                    </div>
                                )
                            })}

                        </section>

                    </div>

                </Fragment>

        )
    }
}