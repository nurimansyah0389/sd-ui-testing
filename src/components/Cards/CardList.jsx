import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './style.css';

const CardList = ({ data, children }) => <div className="Card">{data.map((item, index) => <Fragment key={index}>{children(item)}</Fragment>)}</div>;
CardList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        flightName: PropTypes.string,
        departureCode: PropTypes.string,
        departureTime: PropTypes.number,
        arrivalCode: PropTypes.string,
        arrivalTime: PropTypes.number,
        tripDuration: PropTypes.number,
        price: PropTypes.number
    })),
    children: PropTypes.func
};
export default CardList;