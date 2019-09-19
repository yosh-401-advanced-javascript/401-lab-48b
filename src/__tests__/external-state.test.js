import React from 'react';
import renderer from 'react-test-renderer';
import App from '../Components/App'
import Form from '../Components/Form'

describe('Testing Counter', () => {
  it('is alive at application start', function() {
    let app = shallow(<App />);
    expect(app.find('div').exists()).toBeTruthy();
  });
});

it('should render correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should increment the count', () => {
  let form = shallow(<Form />);
  let app = shallow(<App />);
  let incrementButton = form.find('button');
  incrementButton.simulate('click');
  let text = app.find(".name").text();
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

