import React from 'react';
import Renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import flightData from '../../../data/flights.json';
import Tab from '../';

describe('Tab Spec', () => {
    let component = null;

    beforeEach(() => {
        component = (
            <Tab data={flightData[0]}/>
        );
    });

    it('Should render without error', () => {
        const tree = Renderer.create(component);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('Should have "data" props to pass to the detail', () => {
        const wrapper = mount(component);
        expect(wrapper.prop('data')).toBeDefined();
    });
    it('Should expand the tab detail if clicked on each section title and have "isOpened" is not same as previous state', () => {
        // Arrange
        const wrapper = shallow(component);

        // Act
        wrapper.find('.Tab__Section > div:first-child').simulate('click');

        // Assert
        expect(wrapper.find('.Tab__Content').hasClass('show')).toBe(true);
        expect(wrapper.instance().state.isOpened).toBe('flightDetail');
    });
    it('Should collapse the tab detail if clicked on each section title and have "isOpened" is same as previous state', () => {
        // Arrange
        const wrapper = shallow(component);

        // Act
        wrapper.find('.Tab__Section > div:first-child').simulate('click');
        wrapper.find('.Tab__Section > div:first-child').simulate('click');

        // Assert
        expect(wrapper.find('.Tab__Content').hasClass('show')).toBe(false);
        expect(wrapper.instance().state.isOpened).toBe('');
    });
});