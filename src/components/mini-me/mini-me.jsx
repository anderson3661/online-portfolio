import React, { Component } from 'react';

import { PROFILE_IMAGE_MINI_ME } from '../../utilities/constants';

import './mini-me.css';


export default class MiniMe extends Component {

    render() {
        
        return (
    
            <div className="container mini-me">
                <div className="image">
                    <img src={PROFILE_IMAGE_MINI_ME} alt="" />
                </div>
                <div className="details">
                    <div className="name">Martin Anderson</div>
                    <div className="job-title">Front-End Web Developer</div>
                </div>
            </div>
        )
    }
}