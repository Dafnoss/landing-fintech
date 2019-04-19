'use strict';

//grab a form
const form = document.querySelector('#contact-form');

//grab an input
const inputName = form.querySelector('#first-name');
const inputEmail = form.querySelector('#email');
const inputMessage = form.querySelector('#description');
const inputPhone = form.querySelector('#phone-number');

//config your firebase push
var config = {
    apiKey: "AIzaSyAj39pe8w7pB96gJ9ntNkyeoKIIgNAEfJE",
    authDomain: "landing-fintech-8290a.firebaseapp.com",
    databaseURL: "https://landing-fintech-8290a.firebaseio.com",
    projectId: "landing-fintech-8290a",
    storageBucket: "landing-fintech-8290a.appspot.com",
    messagingSenderId: "812826296865"
};

//create a functions to push
function firebasePush(name, email, phone, message) {

    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    //push itself
    var mailsRef = firebase.database().ref('leads').push().set(
        {
            name: name.value,
            mail: email.value,
            phone: phone.value,
            message: message.value
        }
    );
}

//push on form submit
if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        //email Validation
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailValid = emailReg.test(jQuery.trim($(inputEmail).val()));

        if(inputName.value && emailValid) {
        firebasePush(inputName, inputEmail, inputPhone, inputMessage);

        //shows alert if everything went well.
        //return alert('Data Successfully Sent to Realtime Database');
        }
    })
}