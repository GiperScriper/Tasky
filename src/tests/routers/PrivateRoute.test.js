import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import PrivateRoute from '@/routers/PrivateRoute';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<PrivateRoute />', () => {
  it('should render PrivateRoute component correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <PrivateRoute />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
