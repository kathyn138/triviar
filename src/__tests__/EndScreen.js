import EndScreen from '../EndScreen';
import { shallow, mount } from 'enzyme';

it('displays correct score', function () {
    let wrapper = shallow(<EndScreen score={7} />);
    expect(wrapper.html()).toContain(7);
});

it('calls mock function on reset button click', function () {
    let mockFn = jest.fn();
    let wrapper = mount(<EndScreen score={7} resetQuiz={mockFn} />);
    wrapper.find('#restart-btn').simulate('click');
    expect(mockFn).toHaveBeenCalled();
});