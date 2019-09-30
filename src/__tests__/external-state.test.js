import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../Components/App.jsx';
import Form from '../Components/Form.jsx';

Enzyme.configure({ adapter: new Adapter() });
global.shallow = shallow;
global.mount = mount;


describe('Testing Counter', () => {
  it('is alive at application start', () => {
    const app = shallow(<App />);
    expect(app.find('div').exists()).toBeTruthy();
  });
});

it('should render correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should increment the count', () => {
  const form = shallow(<Form />);
  const app = shallow(<App />);
  const incrementButton = form.find('button');
  incrementButton.simulate('click');
  const text = app.find('.name').text();
  expect(text).toEqual('# of Updates:  0 ');
});

describe('Testing App ', () => {
  it('should should render correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('Testing Form ', () => {
    it('should should render correctly', () => {
      const tree = renderer.create(<Form />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
