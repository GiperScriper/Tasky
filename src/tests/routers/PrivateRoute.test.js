import React from 'react';
import { shallow } from 'enzyme';
import PrivateRoute from '@/routers/PrivateRoute';

describe('<PrivateRoute />', () => {
  it('should render PrivateRoute component correctly', () => {
    const wrapper = shallow(<PrivateRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
