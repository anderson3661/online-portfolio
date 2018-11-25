import React from 'react';

import { dataTextContent } from '../../utilities/constants-text-content';

import './education.scss';


export default props => (

    <div className={`container education ${props.cv ? "cv" : ""}`}>
        <h1>{dataTextContent.education.heading}</h1>
        { dataTextContent.education.details.map((detail, i) => <p key={i}>{detail}</p>) }
    </div>
)