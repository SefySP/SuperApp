function getJSON(difficulty) 
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
        var json = JSON.parse(xmlhttp.responseText);
    
        createTable(json);
    };
    xmlhttp.open("GET", "JSON/" + difficulty + ".json", true);
    xmlhttp.send();
}

function createTable(json)
{
    var table_q = document.getElementById("questions_id");
    table_q.innerHTML = "<table class='questions_tb' id='question_table_id'><tr><th>Question</th><th>Answers</th><th>Correct Answers</th><th>Type</th><th>Checked</th></tr>";
    console.log(json.length);
    for (let i = 0; i < json.length; i++) 
    {
        document.getElementById("question_table_id").innerHTML += "<tr><td>" + json[i].question + "</td><td>" + json[i].answers + "</td><td>" + json[i].correctAnswers + "</td><td>" + json[i].type + "</td><td>" + json[i].check +"</td></tr>";
    }
    table_q.innerHTML += "</table>";
}

function loadQuestions() 
{
    var difficulty = document.getElementById("quiz_dif_id").value;
    if(difficulty == "select")
    {
    }
    else if(difficulty == "easy")
    {
        json = getJSON("Easy");
    }
    else if(difficulty == "medium")
    {
        getJSON("Medium");
    }
    else
    {
        json = getJSON("Hard");
    }
}

