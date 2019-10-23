import React from 'react';
import Renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import flightData from '../../../data/flights.json';
import CardList from '../CardList';

describe('Card List Spec', () => {
    it('Should render children without error', () => {
        const tree = Renderer.create(<CardList data={[]}>{() => <div>CHILDREN</div>}</CardList>);
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('Should has a "data" props', () => {
        const wrapper = mount(<CardList data={[]}>{() => <div>CHILDREN</div>}</CardList>);
        expect(wrapper.prop('data')).toBeDefined();
    });
    it('Should render "children" as function to pass flight item', () => {
        const wrapper = mount(<CardList data={flightData}>{item => <div>{item.flightName}</div>}</CardList>);
        expect(wrapper.text()).toContain('Garuda Indonesia');
    })
});