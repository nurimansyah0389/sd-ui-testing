import React from 'react';
import Renderer from 'react-test-renderer';

import CardList from '../CardList';

describe('Card List Spec', () => {
    it('Should render children without error', () => {
        const tree = Renderer.create(<CardList data={[]}>{() => <div>CHILDREN</div>}</CardList>);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});