import React from 'react';

import './training.css';
import { dataTextContent } from '../../utilities/constants-text-content';


export default props => (

    <div className={`container training ${props.cv ? "cv" : ""}`}>
        <h1>{ dataTextContent.training.heading }</h1>
        <p>{ dataTextContent.training.description }</p>

        <div className="training-sections">

            { dataTextContent.training.categories.map((category, i) => {
                return (
                    <div key={i}>
                        <h3>{category.subHeading}</h3>
                        { category.courses.map((course, j) => <p key={j}>{course}</p>) }
                    </div>
                )
            })}

        </div>

    </div>
    
)