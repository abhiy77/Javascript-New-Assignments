

/**
*
* Assume we are fetching the data from a rest endpoint in the get data function.
* we can simulate the same by replacing the setTimeout with fetch api and executing the same in a browser.
*
*/


// How do you solve this problem. How can we wait for till the function execution is completed, so that we can have correct email at line 10?


function getData(uId) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, 4000);
    })
    .then(() => {
        console.log("Fetched the data!");
        return "skc@gmail.com";  
    });
}


console.log("start");
Promise.resolve(getData("skc")).then((email) => {
    console.log("Email id of the user id is: " + email);
    console.log("end");
});

/**
 * SOLUTION : We return a promise for the set Timeout() method and then fetch the data from the .then() method.
 *            Finally , we wait till the promise has been resolved and we then get our data in the .then() method
 *            which we access and finally print to the console.
 * 
 */








/**
 * 
 * ORIGINAL CODE
 * 
function getData(uId) {

    setTimeout(() => {
    console.log("Fetched the data!");
    return "skc@gmail.com";
    }, 4000);
}

console.log("start");
var email = getData("skc");
console.log("Email id of the user id is: " + email);
console.log("end");


 * 
 * 
 * 
 */