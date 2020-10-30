import ResultModal from '../ResultModal';
import { Modal } from 'reactstrap';
import { mount } from 'enzyme';


it('renders corresponding header for correct answer', function () {
    let wrapper = mount(<ResultModal result="correct" correctAnswer="UC Berkeley" />);
    expect(wrapper.find(Modal).text()).toContain('Correct');
    expect(wrapper.find(Modal).text()).toContain('The correct answer is: UC Berkeley');
});

it('renders corresponding header for incorrect answer', function () {
    let wrapper = mount(<ResultModal result="correct" correctAnswer="UC Berkeley" />);
    expect(wrapper.find(Modal).text()).toContain('Correct');
    expect(wrapper.find(Modal).text()).toContain('The correct answer is: UC Berkeley');
});

it('displays correct answer', function () {
    let wrapper = mount(<ResultModal result="correct" correctAnswer="UC Berkeley" />);
    expect(wrapper.find(Modal).text()).toContain('The correct answer is: UC Berkeley');
});
