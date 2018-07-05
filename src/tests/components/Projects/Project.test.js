import React from 'react';
import { shallow } from 'enzyme';
import { ProjectItem } from '@/components/Projects/ProjectItem';
import projects from '@/tests/fixtures/projects';

describe('<ProjectItem />', () => {
  it('should render ProjectItem component with proper data', () => {
    const wrapper = shallow(<ProjectItem data={projects[0]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
