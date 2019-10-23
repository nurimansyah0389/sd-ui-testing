import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Layout = ({ children }) => <main className="Main">
    <div className="Main__Logo">
        <img src="/assets/images/logo.png" alt=""/>
    </div>
    <div className="Main__Header">
        <h1>UI Testing Showcase</h1>
    </div>
    <div className="Main__Container">{children}</div>
</main>;
Layout.propTypes = {
    children: PropTypes.node
};
export default Layout;