import React from 'react';
import Renderer from 'react-test-renderer';

import Layout from '../';

describe('Layout Spec', () => {
    it('Should render children without error', () => {
        // Assign
        const tree = Renderer.create(<Layout>Hello World</Layout>);

        // Assert
        expect(tree.toJSON()).toMatchSnapshot();
    });
});