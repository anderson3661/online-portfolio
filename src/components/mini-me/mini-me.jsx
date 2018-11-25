import React, { Component } from 'react';

import { PROFILE_IMAGE_MINI_ME } from '../../utilities/constants';
import { dataTextContent } from '../../utilities/constants-text-content';

import './mini-me.css';


export default class MiniMe extends Component {

    render() {
        
        return (
    
            <div className="container mini-me">
                <div className="image">
                    <img src={PROFILE_IMAGE_MINI_ME} alt="" />
                </div>
                <div className="details">
                    <div className="name">{dataTextContent.general.name}</div>
                    <div className="job-title">{dataTextContent.general.jobTitle}</div>
                </div>
            </div>
        )
    }
}