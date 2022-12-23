const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const studentScore = document.querySelector('#score');
const scoreboard = document.querySelector('#score-section');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, i) => {
        if(answer === correctAnswers[i]){
            score += 25;
        }
    });

    let index = 0;
    //show result
    scrollTo(0,0);
    scoreboard.classList.add('done');
    if(score === 0){
        studentScore.innerHTML = `${index}%`;
    } else{
        timer = setInterval(() => {
            index++;
            studentScore.innerHTML = `${index}%`;
            if(index === score){
                clearInterval(timer);
            }
            
        }, 40)
    }
});

setTimeout(() => {
 //do something
}, 2000);