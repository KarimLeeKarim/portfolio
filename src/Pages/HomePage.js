import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Karimli Karim.</span>
                </h1>
                <p className="h-sub-text">
                I'm a Junior Web Developer with 1.5 year of experience. The projects that I have been working on are websites built from scratch and used modern libraries and frameworks such as React, jQuery.<br></br> Please, check my GitHub in down link.
                </p>
                <div className="icons">
                    <a href="https://github.com/KarimLeeKarim" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>

                </div>
            </header>
        </div>
    )
}

export default HomePage;
