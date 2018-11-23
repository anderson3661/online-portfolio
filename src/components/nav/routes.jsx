import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutMe from '../about-me/about-me';
import Skills from '../skills/skills';
import Projects from '../projects/projects';
import WorkExperience from '../work-experience/work-experience';
import CV from '../cv/cv';

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/workexperience" component={WorkExperience} />
            <Route path="/cv" component={CV} />
            <Route path="*" render={(props) => <AboutMe {...props} />} />
        </Switch>
    );
};

export default Routes;