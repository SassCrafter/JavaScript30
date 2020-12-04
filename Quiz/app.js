const quiz = [
    {
        question: 'Which company developed JavaScript?',
        a: 'Netscape',
        b: 'Samsung',
        c: 'Apple',
        correct: 'a'
    },
    {
        question: 'What is 32 + 64',
        a: '20',
        b: '69',
        c: 'NaN',
        correct: 'b'
    },
    {
        question: 'How was the 2020',
        a: 'Awesome',
        b: 'Fuck it',
        c: 'What??',
        correct: 'c'
    }
];


function loadQuiz() {
    console.log("Quiz");
    const currentQuiz = quiz[currentQuestion];
    qEl.innerHTML = currentQuiz.question;
    a_text.innerHTML = currentQuiz.a;
    b_text.innerHTML = currentQuiz.b;
    c_text.innerHTML = currentQuiz.c;
}

function checkNextQuiz() {
    let retValue = false;
    inputs.forEach(input => {
        if (input.checked) {
            console.log(input);
            retValue = true;
        } else {
            retValue = false;
        }
    })
    return retValue;
}

const addClassOnClick = (el,addClass) => el.forEach(x => { x.classList.add(addClass)});
const removeClassOnClick = (el,addClass) => el.forEach(x => { x.classList.remove(addClass)});

function addRemoveClassClick(arr) {
    arr.forEach(element => {
        element.addEventListener('click', () => {
            arr.forEach(el => {
                el.classList.remove('selected');
            })
            element.classList.add('selected');
        })
    });
}
function unselectInput() {
    const input = document.querySelector('input[type=radio]:checked');
    if (input) {
        input.checked = false;
        removeClassOnClick(answers,'selected');
    }
}

function countCorrect() {
    let correctCount = 0;
}


const qEl = document.querySelector('.question');
const a_text = document.getElementById('a-choice');
const b_text = document.getElementById('b-choice');
const c_text = document.getElementById('c-choice');
const inputs = document.querySelectorAll('input[type=radio]');
const answers = document.querySelectorAll('li');
const submitBtn = document.getElementById('submit-btn')



let currentQuestion = 0;

loadQuiz();
addRemoveClassClick(answers);

submitBtn.addEventListener('click', () => {
    if(checkNextQuiz) {
        console.log('Hello');
        currentQuestion++;
        loadQuiz();
        unselectInput();
    }
    //currentQuestion++;
    //loadQuiz();
});

