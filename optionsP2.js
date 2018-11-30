function loadScript(){
    var script = document.createElement("script");
    script.src = "api.js";
    script.async = true;
    script.defer = true;
    script.onload = thenLoad(); 
    script.onreadystatechange = readyOrNot(this);
    document.body.appendChild(script);

}

function readyOrNot(element) {
    console.log("SOMETHING WORKS - readyOrNot");
    console.log(JSON.stringify(element));

}