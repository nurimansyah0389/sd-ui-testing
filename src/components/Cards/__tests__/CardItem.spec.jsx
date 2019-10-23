import React from 'react';
import Renderer from 'react-test-renderer';

import CardItem from '../CardItem';

describe('Card Item Spec', () => {
    it('Should render without any error', () => {
        const item = {
            flightName: 'Garuda Indonesia',
            departureTime: Math.round(new Date().getTime() / 1000),
            arrivalTime: Math.round(new Date().getTime() / 1000) + 3600,
            departureCode: 'CGK',
            arrivalCode: 'SIN',
            tripDuration: 3600,
            price: 360000
        };
        const tree = Renderer.create(<CardItem data={item} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});