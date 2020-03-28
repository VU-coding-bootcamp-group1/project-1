console.log("loading..")
   // Initialize Firebase
   var config = {
    apiKey: "AIzaSyDnDiS9AA503gtq22txINtzdlnVYGsDQhw",
    authDomain: "project1-9d03a.firebaseapp.com",
    databaseURL: "https://project1-9d03a.firebaseio.com",
    projectId: "project1-9d03a",
    storageBucket: "project1-9d03a.appspot.com",
    messagingSenderId: "956263888656",
    appId: "1:956263888656:web:ff5ec9e40ab67567d4d795",
    measurementId: "G-KEW11MY143"
  };
  
  firebase.initializeApp(config);

// reference messages collection
var database = firebase.database();

var messagesRef = firebase.database().ref('messages');


document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();



//get value

var name = getInputVal('name');
var message = getInputVal('message');
var age = getInputVal('age');
var testResults = getInputVal('testResults');
var gender = getInputVal('gender');

saveMessage(name, message, age, testResults, gender)

}

// Function to get form vals



function getInputVal(id){
    return document.getElementById(id).value;

}

// save message to firebase

function saveMessage(name, message, age, testresults, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        message: message,
        age: age,
        testResults: testResults,
        gender:gender,
    });
}