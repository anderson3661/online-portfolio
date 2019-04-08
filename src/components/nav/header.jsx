import React, { Component } from 'react';

import MiniMe from '../mini-me/mini-me';
import StickyNotes from '../sticky-notes/sticky-notes';

import './header.scss';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayBackground: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        debugger;
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        debugger;
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        debugger;
        if (window.pageYOffset > 50 & !this.state.displayBackground) {
            this.setState({displayBackground: true});
        } else if (window.pageYOffset <= 50 & this.state.displayBackground) {
            this.setState({displayBackground: false});
        }
    }

    render() {
        debugger;

        return(

            <nav className={`header ${this.state.displayBackground ? "displayBackground" : ""}`}>

                <div className="mini-me-container">
                    <MiniMe className="mini-me" />
                </div>

                <StickyNotes className="sticky-notes" />

            </nav>

        )
    }
}