function startQuiz() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
}

function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const formData = new FormData(quizForm);
    const answers = Object.fromEntries(formData.entries());
    
    const results = {
        'Germanic': 0,
        'Romance': 0,
        'Slavic': 0,
        'Baltic': 0,
        'Sino-Tibetan': 0,
        'Japonic': 0,
        'Uralic': 0,
    };

    const questionGroups = document.querySelectorAll('.question-group');
    questionGroups.forEach(group => {
        const family = group.getAttribute('data-family');
        group.querySelectorAll('input:checked').forEach(input => {
            if (input.value !== 'incorrect') {
                results[family]++;
            }
        });
    });

    const recommendedFamily = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);

    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result-text').innerText = `Based on your answers, you should learn a language from the ${recommendedFamily} family.`;
}

function restartQuiz() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
    document.getElementById('quiz-form').reset();
}
