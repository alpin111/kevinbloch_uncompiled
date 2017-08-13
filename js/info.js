


var projectname = location.search;
// function you can use:
function getSecondPart(str) {
    return str.split('=')[2];
}

function getLanguage(str) {
    return str.split('=')[1];
}

// use the function:
var slice =getSecondPart(projectname);

var lang = getLanguage(projectname);





var client = slice + ".client"
document.write('<span class="client_span">' + eval(client) + '</span><br>');


var name = slice + ".name_" + lang
document.write('<span class="name_span">' + eval(name) + '</span><br><br>');


var project = slice + ".project_" + lang
document.write('<span class="description_span">' +  eval(project) + '<br>—<br>');


var special = slice + ".special_" + lang
document.write(eval(special) + '<br>' + '</span>');
