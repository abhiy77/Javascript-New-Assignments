/**
 *
 *  Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.
 * 
 * ANSWER :  A callback function is a function passed into another function as an argument, 
 *           which is then invoked inside the outer function to complete some kind of routine or action.
 *           The callback can be used in many cases and also in conjunction with asynchronous tasks
 *           in javascript.
 *
 */

let userData = [
    {
       id : "1",
       name : "Ashish",
       email : "ashish@gmail.com",
       contact : "9876543121"
    },
    {
        id : "2",
        name : "Sumit",
        email : "sumit@gmail.com",
        contact : "9872234112"
    },
    {
        id : "3",
        name : "Harish",
        email : "harish@gmail.com",
        contact : "8763334112"
    },
    {
        id : "4",
        name : "Rishikesh",
        email : "rishikesh@gmail.com",
        contact : "9871812312"
    },
    {
        id : "5",
        name : "Harsha",
        email : "harsha@gmail.com",
        contact : "8856745342"
    }
]

function fetchData(displayUserData,userId) {
    let len = userData.length;
    for(let i = 0;i < len;i++){
        if(userData[i].id === userId){
            displayUserData(userData[i]);
            return true;
        }
    }
    return false;
}

function displayUserData(user=null){
    let uId = document.getElementById('uid');
    let uName = document.getElementById('uname');
    let uEmail = document.getElementById('uemail');
    let uContactNum = document.getElementById('ucontact');

    uId.innerHTML = user != null ? user.id : "";
    uName.innerHTML = user != null ? user.name : "";
    uEmail.innerHTML = user != null ? user.email : "";
    uContactNum.innerHTML = user != null ? user.contact : "";
}


let userForm = document.getElementById('userForm');

userForm.addEventListener('submit',(event) => {
    event.preventDefault();

    let userId = document.getElementById('userId').value.trim();

    let wrongIdAlert = document.getElementById('wrongIdAlert');

    if(!fetchData(displayUserData,userId)){
        wrongIdAlert.style.display = "";
        displayUserData();
        return false;
    }

    wrongIdAlert.style.display = "none";

});



/**
 *
 * Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents
 * the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
    Submit the github link to the code
 *
 */

let firstLetters = (firstName,lastName) => {    
    return firstName.charAt(0) + lastName.charAt(0);
}

let infoForm = document.getElementById('infoForm');

infoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let result = document.getElementById('result');

    result.innerHTML = "Result = " + firstLetters(firstName,lastName);
});




