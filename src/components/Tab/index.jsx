import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class TabComponent extends Component {

    static propTypes = {
        className: PropTypes.string,
        data: PropTypes.shape({
            flightDetail: PropTypes.string,
            priceDetail: PropTypes.string,
        })
    };

    state = {
        isOpened: ''
    };

    handleToggleCollapse = name => {
        // Check the state first
        const { isOpened } = this.state;
        if (isOpened === '') {
            this.setState({ isOpened: name });
        } else if (name === isOpened) {
            // Handle Collapse
            this.setState({ isOpened: '' });
        } else {
            // Set isOpened to others
            this.setState({ isOpened: name });
        }
    };

    render = () => {
        const { isOpened } = this.state;
        const { className, data } = this.props;
        return (
            <nav className={`Tab ${className ? className : ''}`}>
                <div className="Tab__Section">
                    <div className={isOpened === 'flightDetail' ? 'selected' : ''} onClick={() => this.handleToggleCollapse('flightDetail')}>Flight Detail</div>
                    <div className={isOpened === 'priceDetail' ? 'selected' : ''} onClick={() => this.handleToggleCollapse('priceDetail')}>Price Detail</div>
                </div>

                <div className={`Tab__Content ${isOpened ? 'show' : ''}`}>
                    {isOpened === 'flightDetail' && <img src={data.flightDetail} alt="" />}
                    {isOpened === 'priceDetail' && <img src={data.priceDetail} alt="" />}
                </div>
            </nav>
        );
    };
}
export default TabComponent;