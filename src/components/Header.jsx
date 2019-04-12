import React from 'react';
import '../scss/blocks/Header.scss';
import logo from '../assets/images/logo.svg';

function Header(props) {
    return (
        <header className="App-header">
            <div className="container">
                <div className="App-header__wrap">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-header__title">{props.title}</h1>
                </div>
            </div>
        </header >
    )
}

export default Header;