import React from 'react';
import Renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import flightData from '../../../data/flights.json';
import CardItem from '../CardItem';

describe('Card Item Spec', () => {
    it('Should render without any error', () => {
        const tree = Renderer.create(<CardItem data={flightData[0]} />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Should have "data" props', () => {
        const wrapper = mount(<CardItem data={flightData[0]}/>);
        expect(wrapper.prop('data')).toBeDefined();
    });
});