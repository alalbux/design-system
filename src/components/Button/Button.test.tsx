import * as React from 'react';

import themed from '../../utils/themed';
import Button from './Button';

describe('Button', () => {
  it.skip('should render correctly', () => {
    const component = themed(
      <Button onClick={jest.fn}>
        Test
      </Button>,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
