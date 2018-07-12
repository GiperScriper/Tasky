import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '@/routers/AppRouter';

describe('<AppRouter />', () => {
  it('should render AppRouter component correctly', () => {
    const wrapper = shallow(<AppRouter />);
    expect(wrapper).toMatchSnapshot();
  });
});
