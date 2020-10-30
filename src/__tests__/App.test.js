import App from '../App';
import { shallow } from 'enzyme';

it('can render <StartScreen /> upon round start', function () {
  let wrapper = shallow(<App />);
  expect(wrapper.html()).toContain('Welcome to Triviar');
});

it('can render <EndScreen /> upon round completion', function () {
  let wrapper = shallow(<App />);
  wrapper.setState({ complete: true, score: 10 });
  expect(wrapper.html()).toContain('Your score is: 10');
});