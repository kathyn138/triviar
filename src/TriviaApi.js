const triviaData = require('./Apprentice_TandemFor400_Data.json');

class TriviaApi {
  // Fisher-Yates shuffle
  static shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  /*
    Reformat questions into new structure: 
      { question: "What was Tandem previous name?", 
        correct: "Devmynd", 
        choices: ["Extraordinary Humans", "Devmynd", "Tandem", "Burger Shack"]}
  */
  static reformatQuestion(question) {
    let reformattedQuestion = {};

    reformattedQuestion['question'] = question['question'];
    reformattedQuestion['correct'] = question['correct'];

    let answers = [...question['incorrect']];

    answers.push(question['correct']);
    this.shuffle(answers);

    reformattedQuestion['choices'] = answers;

    return reformattedQuestion;
  }

  static getQuestions() {
    let reformattedData = {};
    this.shuffle(triviaData)

    for (let i = 0; i < 10; i++) {
      let currQuestion = this.reformatQuestion(triviaData[i]);

      reformattedData[i] = currQuestion;
    }

    return reformattedData;
  }
}

export default TriviaApi;
