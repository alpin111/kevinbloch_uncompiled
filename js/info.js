


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





document.write('<span class="client_span">' + window[slice]['client'] + '</span><br>');

document.write('<span class="name_span">' + window[slice]["name_" + lang] + '</span><br><br>');

document.write('<span class="description_span">' +  window[slice]["project_" + lang] + '<br>—<br>');

document.write( window[slice]["special_" + lang]  + '<br>' + '</span>');
