import Question from '../Question';
import { shallow, mount } from 'enzyme';

let testData = {
  "question": "What school does 'Go Bears' come from?",
  "choices": ["Stanford", "UC Berkeley", "UCLA", "MIT"],
  "correct": "UC Berkeley"
};

it('can render the correct component', function () {
  let wrapper = shallow(<Question data={testData} />);
  expect(wrapper.html()).toContain('UC Berkeley');
});

it('has 4 possible choices', function () {
  let wrapper = shallow(<Question data={testData} />);
  let answerButtons = wrapper.find('.answer-btn')
  expect(answerButtons.length).toBe(4);
});

it('calls addScore() prop with correct answer', function() {
  let mockFn = jest.fn();
  let wrapper = mount(<Question data={testData} addScore={mockFn} />);
  let incorrectAnswer = wrapper.find('.answer-btn').at(1);
  incorrectAnswer.simulate('click');
  expect(mockFn).toHaveBeenCalled();
})

it('does not call addScore() prop with incorrect answer', function() {
  let mockFn = jest.fn();
  let wrapper = mount(<Question data={testData} addScore={mockFn} />);
  let incorrectAnswer = wrapper.find('.answer-btn').at(0);
  incorrectAnswer.simulate('click');
  expect(mockFn).toHaveBeenCalledTimes(0);
})