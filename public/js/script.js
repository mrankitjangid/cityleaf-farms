const showQuestion = (n) => {
    const questionList = document.querySelectorAll('.question-container .question');
    const answerList = document.querySelectorAll('.question-container .answer');
    n = Number(n);
    for (let i = 0; i < questionList.length; i++) {
        if (i === n) {
            answerList[i].classList.toggle('hidden');
            questionList[i].classList.toggle('mb-2');
        } else if (!(answerList[i].classList.contains('hidden'))) {
            answerList[i].classList.add('hidden');
        }
        if ( i != n && !(questionList[i].classList.contains('mb-2')) ) questionList[i].classList.add('mb-2');
    }
}

let cart = [];

const addItem = (objectId) => {
    cart.push(objectId);
};

const getcart = () => {
    fetch('/getcart', {
        method: "POST",
        body: JSON.stringify({
            cart: cart
        }),
        headers: {
            "Content-type": "application/json",
    }})
    .then(res => res.json())
    .then(res => console.log(res));
};