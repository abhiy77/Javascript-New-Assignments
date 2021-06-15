/**
 * 
 * Create a simple application which displays two counts:Local Score, Session Score and a button to increment these counts. 
 * Local score must persist in Local Storage and Session score must persist in Session Storage and must reset on closing the session.
 *  
 * 
 */

if(localStorage.getItem("count") == null){
    localStorage.setItem("count",0);
}

if(sessionStorage.getItem("count") == null){
    sessionStorage.setItem("count",0);
}


let localCount = localStorage.getItem("count");
let sessionCount = sessionStorage.getItem("count");


$(document).ready(() => {
    $("#localCount").html(localCount);
    $("#sessionCount").html(sessionCount); 
});

$("#incrementBtn").click( () => {
    localCount = parseInt(localStorage.getItem("count"),10);
    localCount += 1;
    localStorage.setItem("count",localCount);

    sessionCount = parseInt(sessionStorage.getItem("count"),10);
    sessionCount += 1;
    sessionStorage.setItem("count",sessionCount);

    $("#localCount").html(localCount);
    $("#sessionCount").html(sessionCount);
});

