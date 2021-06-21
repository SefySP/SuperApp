var myQuestions;
var quizContainer = document.getElementById('quiz_form');
var resultsContainer = document.getElementById('results');
var difficulty;

function loadJson()
{
    var dif = document.getElementById("quiz_dif_id").value;
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onload = function()
    {
        myQuestions = JSON.parse(xmlhttp.responseText);
        console.log(myQuestions);
        document.getElementById("div_select").style.display="none";
        document.getElementById("submit_btn").style.display="inline";
        generateQuiz(myQuestions,quizContainer,resultsContainer);
    };
    if (dif == "easy")
    {
        difficulty = "easy";
        console.log("Easy");
        xmlhttp.open("GET", "../JSON/Easy.json", true);
        xmlhttp.send();
        return;
    }
    else if (dif == "medium")
    {
        difficulty = "medium";
        console.log("Medium");
        xmlhttp.open("GET", "../JSON/Medium.json", true);
        xmlhttp.send();
        return;
    }
    else if (dif == "hard")
    {
        difficulty = "hard";
        console.log("Hard");
        xmlhttp.open("GET", "../JSON/Hard.json", true);
        xmlhttp.send();
        return;
    }
    else
    {
        console.log("Default");
        xmlhttp.open("GET", "../JSON/Default.json", true);
        xmlhttp.send();
        return;
    }
}

function generateQuiz(questions,quizContainer)
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

function showResults(username){
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
            console.log(splitUserAnswer.length);
            console.log(splitCorrectAnswer.length);
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

    if(username != "")
    {
        var today = new Date();
        var date = today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var datetime = date +" "+ time;
    
        var xmlhttp2;
        if (window.XMLHttpRequest)
        {
            xmlhttp2 = new XMLHttpRequest();
        }
        else
        {
            xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp2.onload = function()
        {
            console.log(xmlhttp2.responseText);
            window.location = "../quiz_user.php";
            return;
        };
        xmlhttp2.open("POST","Scripts/insert_results.php",true);
        xmlhttp2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        xmlhttp2.send("username=" + username + "&datetime=" + datetime + "&difficulty=" + difficulty + "&results=" + numCorrect);
    }
    else
    {
        return;
    }
}