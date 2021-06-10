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
    correctAnswers: 'Java C++ Python',
    type: 'text_free'  
}
]


var quizContainer=document.getElementById('quiz_form');
var resultsContainer=document.getElementById('results');

generateQuiz(myQuestions,quizContainer,resultsContainer);

function generateQuiz(questions,quizContainer,resultsContainer)
{
    function showQuestions(questions,quizContainer)
    {
        var output=[];
        var answers;
        output.push('<ol>');
        for(var i=0; i<questions.length; i++)
        {
            answers=[];
            if(questions[i].type=='radio')
            {
                answers.push('<div class="display_down"> <ul class="no_decor">');
                for(letter in questions[i].answers)
                {
                    answers.push('<li> <input type="radio" name="answers_'+ 
                    i +'" ' + 'value="' + letter + '" > ' + questions[i].answers[letter] 
                    + '</li>');
                }
                answers.push('</ul> </div>');
            }
            else if(questions[i].type=='checkbox')
            {
                answers.push('<div class="display_down"> <ul class="no_decor">');
                for(letter in questions[i].answers)
                {
                    answers.push('<li> <input type="checkbox" name="answers_' +
                    i + '" ' + 'value="' + letter + '" > '+ questions[i].answers[letter] + '</li>');
                }
                answers.push('</ul> </div>');
            }
            else
            {
                answers.push('<input type="text" name="answers_'+ 
                i +'" '+ ' class="text_field" style="display: inline;" autocomplete="off"> ');
            }
            output.push('<li class="answers">'+ questions[i].question + answers.join('') +'</li>'+'<br>');
        }
        output.push('</ol>');
        quizContainer.innerHTML = output.join('');
    }
    showQuestions(questions,quizContainer);
}
function showResults(){
    var answersContainer = quizContainer.querySelectorAll(".answers");
    var userAnswers = "";
    var numCorrect = 0;
    for(var i=0; i<myQuestions.length; i++)
    {
        if(myQuestions[i].type =='radio')
        {
            userAnswers = (answersContainer[i].querySelector("input[name='answers_"+ i +"']:checked") || {}).value;
            if(userAnswers === myQuestions[i].correctAnswers)
            {
                numCorrect++;
                answersContainer[i].style.color = "lightgreen";
            }
            else
            {
                answersContainer[i].style.color = "red";
            }
        }
        else if(myQuestions[i].type =='checkbox')
        {
            userAnswers = answersContainer[i].querySelectorAll("input[name='answers_"+ i +"']:checked");
            if(userAnswers.length == myQuestions[i].correctAnswers.length)
            {
                var j = 0;
                var count = 0;
                for(j=0; j<userAnswers.length; j++)
                {
                    if(userAnswers[j].value === myQuestions[i].correctAnswers[j])
                    {
                        count++;
                        
                    }
                }
                if(count == myQuestions[i].correctAnswers.length)
                {
                    numCorrect++;
                    answersContainer[i].style.color = "lightgreen";
                }
                else
                {
                    answersContainer[i].style.color="red";
                }
            }
            else
            {
                answersContainer[i].style.color="red";
            }
        }
        else
        {
            userAnswers = answersContainer[i].querySelector("input[name='answers_"+ i +"']").value;
            var splitCorrectAnswer = myQuestions[i].correctAnswers.split(" ");
            var splitUserAnswer = userAnswers.split(" ");
            alert(splitUserAnswer.length);
            alert(splitCorrectAnswer.length);
            if(myQuestions[i].type == "text_free")
            {
                var isCorrect = false;
                for(var j=0; j<splitUserAnswer.length; j++)
                {
                    for(var k=0; k<splitCorrectAnswer.length; k++)
                    {
                        if(splitUserAnswer[j] === splitCorrectAnswer[k])
                        {
                            isCorrect = true;
                            break;
                        }
                        else
                        {
                            isCorrect = false;
                        }
                    }
                    if(!isCorrect)
                    {
                        break;
                    }
                }
                if(isCorrect)
                {
                    numCorrect++;
                    answersContainer[i].style.color = "lightgreen";
                }
                else
                {
                    answersContainer[i].style.color = "red";
                }
            }
            else
            {
                if(splitUserAnswer.length === splitCorrectAnswer.length)
                {
                    var j = 0;
                    var count = 0;
                    for(j=0; j<splitCorrectAnswer.length; j++)
                    {
                        if(splitUserAnswer[j] === splitCorrectAnswer[j])
                        {
                            count++;
                        }
                    }
                    if(count == splitCorrectAnswer.length)
                    {
                        numCorrect++;
                        answersContainer[i].style.color = "lightgreen";
                    }
                    else
                    {
                        answersContainer[i].style.color="red";
                    }
                }
                else
                {
                    answersContainer[i].style.color="red";
                }
            }
        }
    }
    resultsContainer.innerHTML = numCorrect + " out of " + myQuestions.length;
}