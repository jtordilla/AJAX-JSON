//JSON - request - data - HTML
var person = document.getElementById("person-btn"); 
var hobby = document.getElementById("hobbies"); 
var academics = document.getElementById("academic"); 

function renderHTML(data){
    var htmlString = data[0].personality; 
    personality.insertAdjacentHTML("beforeend", htmlString); 
}

person.addEventListener("click", function(){
    var myRequest = new XMLHttpRequest(); 
    myRequest.open("GET", "https://raw.githubusercontent.com/jtordilla/VanillaJavascript/master/JSON_files/Profile.json"); 
    myRequest.onload = function(){
        var myData = JSON.parse(myRequest.responseText); 
        renderHTML(myData); 
    }
    myRequest.send(); 
}); 