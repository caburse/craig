import React from 'react';
import { Navbar } from 'react-bootstrap';
import './style/FooterNav.css';

class FooterNav extends React.Component {
    render() {
        return (
            <Navbar className="nav_zero_bottom">
                <Navbar.Text className="nav_center">
                    Stay Sucka Free...
                </Navbar.Text>
            </Navbar>
        );
    }
}

export default FooterNav;