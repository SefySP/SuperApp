function showResults() 
{
    var q1 = document.quiz_form.Option1.value;
    var q2 = document.quiz_form.Option2.value;

    var c = 0;

    if (q1 == "OPT2") 
    {
        c++;
    }
    if (q2 == "OPT1") 
    {
        c++;
    }

    if(c == 2)
    {
        alert("Bravo");
    }
}