import React from 'react';
import TopNav from './TopNav.jsx';
import MenuNav from './MenuNav.jsx';

class HeaderNav extends React.Component {
    render() {
        return (
            <header>
                <TopNav />
                <MenuNav />
            </header>
        );
    }
}

export default HeaderNav;