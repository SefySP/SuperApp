var userQuestion = {
        question: "",
        answers:{},
        correctAnswers:{},
        type: "",
        check: ""
    };

var toJSON;

function loadAddQuiz()
{
    var typeChoice = document.getElementById("quiz_type_id").value;
    var onChangeId = document.getElementById("form_add_q");
    console.log(typeChoice);

    onChangeId.innerHTML = '';

    onChangeId.innerHTML += "<input type='text' name='question' id='question_id' class='text_field' placeholder='Question'></input>";

    switch (typeChoice) 
    {
        case "T/F":
            onChangeId.innerHTML += "<br><input type='radio' name='t_f' id='t_id' style='margin:"+ '0px 3.5px 0px 0px' +"' value='True'>True</input><br>";
            onChangeId.innerHTML += "<input type='radio' name='t_f' id='f_id' value='False'>False</input><br>";
            onChangeId.innerHTML += "<input type='submit' value='Submit' onclick='convertToJSON()' id='submit_btn'></input>";
            break;
        case "Option":
            onChangeId.innerHTML += "<div style='margin:"+'0px 21px 0px 0px'+"'><input type='radio' name='option' id='option1_id'><input type='text' name='a1' id='a1' class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></input></div><br>";
            onChangeId.innerHTML += "<div style='margin:"+'0px 21px 0px 0px'+"'><input type='radio' name='option' id='option2_id'><input type='text' name='a2' id='a2'  class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></input></div><br>";
            onChangeId.innerHTML += "<div style='margin:"+'0px 21px 0px 0px'+"'><input type='radio' name='option' id='option4_id'><input type='text' name='a3' id='a3' class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></input></div><br>";
            onChangeId.innerHTML += "<div style='margin:"+'0px 21px 0px 0px'+"'><input type='radio' name='option' id='option4_id'><input type='text' name='a4' id='a4' class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></input></div>";
            onChangeId.innerHTML += "<div><input type='submit' onclick='convertToJSON()' value='Submit' id='submit_btn'></input>";
            break;
        case "Multiple_Option":
            onChangeId.innerHTML += "<div style='margin:"+'0px 21px 0px 0px'+"'><input type='checkbox' name='c1' id='c1_id'><input type='text' name='c1' id='c1' class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></input></div><br>";
            onChangeId.innerHTML += "<div style='margin:"+'0px 21px 0px 0px'+"'><input type='checkbox' name='c2' id='c2_id'><input type='text' name='c2' id='c2' class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></input></div><br>";
            onChangeId.innerHTML += "<div style='margin:"+'0px 21px 0px 0px'+"'><input type='checkbox' name='c3' id='c3_id'><input type='text' name='c3' id='c3' class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></input></div><br>";
            onChangeId.innerHTML += "<div style='margin:"+'0px 21px 0px 0px'+"'><input type='checkbox' name='c4' id='c4_id'><input type='text' name='c4' id='c4' class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></input></div>";
            onChangeId.innerHTML += "<input type='submit' value='Submit' onclick='convertToJSON()' id='submit_btn'></input>";
            break;
        case "FreeText":
            onChangeId.innerHTML += "<div><div><input type='text' name='free' id='free_id' class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></div>";
            onChangeId.innerHTML += "<input type='submit' value='Submit' onclick='convertToJSON()' id='submit_btn'></input>";
            break;
        case "Blanks":
            onChangeId.innerHTML += "<div><input type='text' name='blank1' id='blank1_id' class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></div>";
            onChangeId.innerHTML += "<div><input type='text' name='blank2' id='blank2_id' class='text_field' style='display:"+ 'inline' +"' placeholder='Ans'></input></div>";
            onChangeId.innerHTML += "<input type='submit' value='Submit' onclick='convertToJSON()' id='submit_btn'></input>";
            break;
        default:
            onChangeId.innerHTML = "";
            break;
    }
}

function convertToJSON() 
{
    var difficulty = document.getElementById("quiz_dif_id").value;
    var typeChoice = document.getElementById("quiz_type_id").value;
    userQuestion.question = document.getElementById("question_id").value;
    userQuestion.check = "False";


    switch (typeChoice) 
    {
        case "T/F":
            userQuestion.answers = {
                a : "True",
                b : "False"
            }
            correctAnswersList = document.getElementsByName("t_f");
            for (let i = 0; i < correctAnswersList.length; i++) 
            {
                if(correctAnswersList[i].checked)
                {
                    userQuestion.correctAnswers = correctAnswersList[i].value;
                }
            }
            userQuestion.type = "radio";
            toJSON = JSON.stringify(userQuestion);
            getJSON(difficulty);
            break;
        case "Option":
            
            break;
        case "Multiple_Option":
            
            break;
        case "FreeText":
            
            break;
        case "Blanks":
            break;
    }
    
    alert(userQuestion.question + " " + userQuestion.answers.a + " " + userQuestion.correctAnswers + " " + userQuestion.type + " " + userQuestion.check + " " + difficulty);
}

function getJSON(difficulty)
{
    var xmlhttp;
    var json = toJSON;
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
        // var questions = JSON.parse(xmlhttp.responseText);
        // console.log(questions);
        // console.log(toJSON);
        // var temp = JSON.parse(toJSON);
        // console.log(temp);
        
        // var test = [];

        // for(i = 0; i<questions.length; i++)
        // {
        //     test[i] = questions[i];
        // }
        // test[questions.length] = temp;

        // console.log(test);

        
        // var json = JSON.stringify(test);

        // sendToServer(json, difficulty);
        // questions += toJSON;

        // console.log(questions + "\n" + toJSON);
        // var temp = JSON.stringify(questions);
        // for(i = 0; i<temp.length; i++)
        // {
        //     console.log(temp[i]);
        // }
        // console.log(temp);
        var temp = xmlhttp.responseText;
        console.log(temp);
        return;
    };

    if(difficulty == "easy")
    {
        xmlhttp.open("POST", "Scripts/addquestion.php", true);
        xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //console.log(json);
        xmlhttp.send("json=" + json + "&difficulty=" + difficulty);
        // xmlhttp.open("GET", "../JSON/Easy.json", true);
        // xmlhttp.send();
        return;
    }
}

function sendToServer(json, difficulty) 
{
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
        console.log(xmlhttp.responseText);
    }
    xmlhttp.open("POST", "Scripts/addquestion.php", true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(json);
    xmlhttp.send("json=" + json + "&difficulty=" + difficulty);
}