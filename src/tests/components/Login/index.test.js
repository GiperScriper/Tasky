import React from 'react';
import { shallow } from 'enzyme';
import { onSubmit } from '@/components/Login';

describe('Login Container', () => {
  it('should invoke onSubmit correctly', () => {
    const props = {
      login: data => Promise.resolve(data),
      history: { push: jest.fn() },
    };

    const data = {
      login: 'johndoe',
      password: 'secretpassword',
    };

    expect(onSubmit(props)(data)).toBe(undefined);
  });
});
