var myQuestions=[
{
    question:"Η γλώσσα ονομάστηκε 'C' λόγω του ότι πολλά από τα χαρακτηριστικά της προήλθαν από μια παλαιότερη γλώσσα, η οποία ονομαζόταν 'B'. :",
    answers:{
        a: 'True',
        b: 'False'
    },
    correctAnswers: 'a',
    type: 'radio' 
},

{
    question:"Επέλεξε τον λάθος διατυπωμένο τελεστή :",
    answers:{
        a: '+=',
        b: '++',
        c: '!&',
        d: '!=',
    },
    correctAnswers: 'c',
    type: 'radio' 
},

{
    question:"Επέλεξε τους λάθους ισχυρισμούς :",
    answers:{
        a: 'Η C δεν διαθέτει garbage collection.',
        b: 'Η C++ ξεκίνησε σαν προεπεξεργαστής της C.',
        c: 'Mπορούν να οριστούν συναρτήσεις μέσα σε άλλες συναρτήσεις.',
        d: 'Σε μία εντολή μπορεί να γίνουν παραπάνω από μια εκχωρήσεις τιμών.',
    },
    correctAnswers: ['a','b','c'],
    type: 'checkbox'  
},

{
    question:"Ανέφερε μερικές γλώσσες που έχουν επηρεαστεί άμεσα ή έμμεσα από την C:",
    answers:{ },
    correctAnswers: ['Java','C++','Python'],
    type: 'text'  
}
]


var quizContainer=document.getElementById('quiz_form');
var resultsContainer=document.getElementById('results');

generateQuiz(myQuestions,quizContainer);

function generateQuiz(questions,quizContainer){
    function showQuestions(questions,quizContainer){
        var output=[];
        var answers;
        output.push('<ol>');
        for(var i=0;i<questions.length;i++)
        {
            answers=[];
            if(questions[i].type=='radio'){
                answers.push('<div class="display_down"> <ul class="no_decor">');
                for(letter in questions[i].answers){
                    answers.push('<li> <input type="radio" name="answers_'+ 
                    i +'" ' + 'value="' + letter + '" > ' + questions[i].answers[letter] 
                    + '</li>');
                }
                answers.push('</ul> </div>');
            }
            else if(questions[i].type=='checkbox')
            {
                answers.push('<div class="display_down"> <ul class="no_decor">');
                for(letter in questions[i].answers){
                    answers.push('<li> <input type="checkbox" name="answers_' +
                    i + '" ' + 'value="' + letter + '" > '+ questions[i].answers[letter] + '</li>');
                }
                answers.push('</ul> </div>');
            }
            else{
                answers.push('<input type="text" name="answers_'+ 
                i +'" '+'value="' + letter 
                + '" class="text_field" style="display: inline;" autocomplete="off"> ');
            }
            output.push('<li>'+ questions[i].question + answers.join('') +'</li>');
        }
        output.push('</ol>');
        quizContainer.innerHTML = output.join('');
    }
    showQuestions(questions,quizContainer);
}