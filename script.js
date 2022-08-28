const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: '؟ Sour وش معنى كلمة',
    answers: [
      { text: 'حامض', correct: true },
      { text: 'حالي', correct: false },
      { text: 'مالح', correct: false },
      { text: 'مر', correct: false },
    ],
  },
  {
    question: '؟ Restart وش معنى كلمة',
    answers: [
      { text: 'إعادة بدء', correct: true },
      { text: 'تشغيل', correct: false },
      { text: 'انهاء', correct: false },
      { text: 'جديد', correct: false },
    ],
  },
  {
    question: '؟ Liquid وش معنى كلمة',
    answers: [
      { text: 'متعدد الصفات', correct: false },
      { text: 'جماد', correct: false },
      { text: 'سائل', correct: true },
      { text: 'غاز', correct: false },
    ],
  },
  {
    question: '؟ Lecture وش معنى كلمة',
    answers: [
      { text: 'كهرباء', correct: false },
      { text: 'محاضرة', correct: true },
      { text: 'صورة', correct: false },
      { text: 'محفظة', correct: false },
    ],
  },
  {
    question: '؟ Grade وش معنى كلمة',
    answers: [
      { text: 'رمادي', correct: false },
      { text: 'درجة', correct: true },
      { text: 'غاز', correct: false },
      { text: 'مخلوط', correct: false },
    ],
  },
  {
    question: '؟ Snack وش معنى كلمة',
    answers: [
      { text: 'وجبة خفيفة', correct: true },
      { text: 'أفعى', correct: false },
      { text: 'بنفسجي', correct: false },
      { text: 'عشاء', correct: false },
    ],
  },
  {
    question: '؟ Word وش معنى كلمة',
    answers: [
      { text: 'كلمة', correct: true },
      { text: 'عالم', correct: false },
      { text: 'الكون', correct: false },
      { text: 'ماء', correct: false },
    ],
  },
  {
    question: '؟ Bottle وش معنى كلمة',
    answers: [
      { text: 'ماء', correct: false },
      { text: 'عصير', correct: false },
      { text: 'أسفل', correct: false },
      { text: 'غرشة', correct: true },
    ],
  },
  {
    question: '؟ Project وش معنى كلمة',
    answers: [
      { text: 'كشاف ضوئي', correct: false },
      { text: 'صاروخ', correct: false },
      { text: 'مشروع', correct: true },
      { text: 'واجب', correct: false },
    ],
  },
];
