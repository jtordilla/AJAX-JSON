var pageCounter = 1; 

var friendContainer = document.getElementById("friends"); 
var btn = document.getElementById("clicker"); 
progress = document.querySelector("#progress-bar"); 

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest(); 
    ourRequest.open('GET', 'https://raw.githubusercontent.com/jtordilla/VanillaJavascript/master/JSON_files/friends-' + pageCounter + '.json'); 
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText); 
        renderHTML(ourData); 
    }; 
    ourRequest.send(); 
    pageCounter++; 
    if(pageCounter == 2){
        progress.value = "33"; 
    }else if(pageCounter == 3){
        progress.value = "66"; 
    }else if(pageCounter > 3){
        btn.style.display = "none"; 
        progress.value = "100"; 
    }
}); 

function renderHTML(data){
    var htmlString = ""; 
    for(var i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is " + data[i].age + ".</p>"; 
    }
    friendContainer.insertAdjacentHTML("beforeend", htmlString); 
}; 

// new XMLHttpRequest()
// request.open("GET", url)
// request.onload
// request.send(); 
// JSON.parse(request.responseText)
// renderHTML(data) - creates string and renders data as HTML
// container.insertAdjacentHTML("beforeend", htmlString)