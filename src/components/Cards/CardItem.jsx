import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import dayjs from 'dayjs';

import './style.css';

const handleChooseFlight = item => alert(`Flight ${item.flightName} selected!`)

const CardItem = ({ data }) => (
    <div className="Card__Item">
        <h2>{data.flightName}</h2>
        <div className="Item">
            <div className="Item__Info">
                <div className="Left">
                    <div className="Left__Logo"><img src="https://static.tiket.photos/image/upload/v1534836229/string/2018/08/21/93102e79-7442-458e-a227-789bd08eddb0c4f3f430c09d1128f1f0019aaaec2679.png" alt=""/></div>
                    <div className="Left__Departure">
                        <div>{dayjs(data.departureTime).format('hh:mm')}</div>
                        <div>{data.departureCode}</div>
                    </div>

                    <div className="Left__Duration">
                        <div>{Math.floor(data.tripDuration / 3600)}h 0m</div>
                        <div>Direct</div>
                    </div>

                    <div className="Left__Arrival">
                        <div>{dayjs(data.arrivalTime).format('hh:mm')}</div>
                        <div>{data.arrivalCode}</div>
                    </div>
                </div>
                <div className="Right">
                    <div className="Right__Price">
                        <span>IDR {numeral(data.price).format('0,0')}</span>
                        <span>/pax</span>
                    </div>
                </div>
            </div>
            <div className="Item__Action">
                <button className="Button Button_Primary" type="button" onClick={() => handleChooseFlight(data)}>Choose Flight</button>
            </div>
        </div>
    </div>
);
CardItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string,
        flightName: PropTypes.string,
        departureCode: PropTypes.string,
        departureTime: PropTypes.number,
        arrivalCode: PropTypes.string,
        arrivalTime: PropTypes.number,
        tripDuration: PropTypes.number,
        price: PropTypes.number
    })
};
export default CardItem;