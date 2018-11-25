import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { STICKY_NOTE_ABOUT_ME, STICKY_NOTE_PROJECTS, STICKY_NOTE_SKILLS, STICKY_NOTE_CONSTANTS, STICKY_NOTE_CV } from '../../utilities/constants';

import './sticky-notes.scss';

export default class StickyNotes extends Component {

    render() {

        return (

            <section className="sticky-notes">

                <NavLink to="/aboutme" className="nav-link aboutme" activeClassName="active-link">
                    <div className="image">
                        <img src={STICKY_NOTE_ABOUT_ME} alt="" />
                    </div>
                </NavLink>

                <NavLink to="/projects" className="nav-link projects" activeClassName="active-link">
                    <div className="image">
                        <img src={STICKY_NOTE_PROJECTS} alt="" />
                    </div>
                </NavLink>

                <NavLink to="/skills" className="nav-link skills" activeClassName="active-link">
                    <div className="image">
                        <img src={STICKY_NOTE_SKILLS} alt="" />
                    </div>
                </NavLink>

                <NavLink to="/workexperience" className="nav-link workexperience" activeClassName="active-link">
                    <div className="image">
                        <img src={STICKY_NOTE_CONSTANTS} alt="" />
                    </div>
                </NavLink>

                <NavLink to="/cv" className="nav-link cv" activeClassName="active-link">
                    <div className="image">
                        <img src={STICKY_NOTE_CV} alt="" />
                    </div>
                </NavLink>

            </section>

        )
    }
}