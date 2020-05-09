import React from 'react';
import { shallow } from 'enzyme';
import { 111 } from '../../../src/features/common/111';

describe('common/111', () => {
  it('renders node with correct class name', () => {
    const props = {
      common: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <111 {...props} />
    );

    expect(
      renderedComponent.find('.common-111').length
    ).toBe(1);
  });
});
