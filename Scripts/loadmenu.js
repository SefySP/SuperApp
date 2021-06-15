function loadMenu(usrRole)
{
    console.log(usrRole);
    var xmlhttp;
    if (window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onload = function(){
        document.getElementById("navbar").innerHTML = xmlhttp.responseText;
        console.log(xmlhttp.responseText);
    };
    // xmlhttp.onreadystatechange = function(){
    //     if ((this.readyState == 4) && (this.status == 200))
    //     {
    //         document.getElementById("navbar").innerHTML = xmlhttp.responseText;
    //         console.log(xmlhttp.responseText);
    //     }
    // // };
    if (usrRole == "user")
    {
        console.log("user");
        xmlhttp.open("GET", "../menu.html", true);
        xmlhttp.send();
        return;
    }
    else if(usrRole == "");
    {
        console.log("visitor");
        xmlhttp.open("GET", "../visitormenu.html", true);
        xmlhttp.send();
        return;
    }
    // xmlhttp.open("GET", "../visitormenu.html", true);
    
}