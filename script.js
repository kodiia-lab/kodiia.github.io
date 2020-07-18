/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

var firebaseConfig = {
  apiKey: "AIzaSyBOkZky53FmG4Cs4NPd8vMgxIl3p7vZii4",
  authDomain: "kodiia-d1bc5.firebaseapp.com",
  databaseURL: "https://kodiia-d1bc5.firebaseio.com",
  projectId: "kodiia-d1bc5",
  storageBucket: "kodiia-d1bc5.appspot.com",
  messagingSenderId: "751592195738",
  appId: "1:751592195738:web:c2f086a6e2936136f4c123",
  measurementId: "G-8PGLGG4NGR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firestore = firebase.firestore();

const submitBtn = document.querySelector("#submit");
let userName = document.querySelector("#userName");
let userMail = document.querySelector("#userMail");
let userPhone = document.querySelector("#userPhone");
let userMessage = document.querySelector("#userMessage");

const db = firestore.collection("contactData");

submitBtn.addEventListener('click', function(){
  let userNameInput = userName.value;
  let userPhoneInput = userPhone.value;
  let userMailInput = userMail.value;
  let userMessageInput = userMessage.value;
  
  db.doc()
    .set({
    name: userNameInput,
    phone: userPhoneInput,
    mail: userMailInput,
    message: userMessageInput
  })
    .then(function(){
    console.log("Data Saved");
    // clear form
      alert("OK!")
    //document.getElementById("#form").reset();
  })
    .catch(function(error){
    console.log("Error");
    // alert("Error");
  })
});

let showKodiia = () => {
  document.getElementById("kodiia").style.display = "block";
  document.getElementById("courses").style.display = "none";
  document.getElementById("form").style.display = "none";
  document.getElementById("contacts").style.display = "none";  
}
let showCourses = () => {
  document.getElementById("kodiia").style.display = "none";
  document.getElementById("courses").style.display = "block";
  document.getElementById("form").style.display = "none";
  document.getElementById("contacts").style.display = "none";  
}
let showForm = () => {
  document.getElementById("kodiia").style.display = "none";
  document.getElementById("courses").style.display = "none";
  document.getElementById("form").style.display = "block";
  document.getElementById("contacts").style.display = "none";  
}
let showContacts = () => {
  document.getElementById("kodiia").style.display = "none";
  document.getElementById("courses").style.display = "none";
  document.getElementById("form").style.display = "none";
  document.getElementById("contacts").style.display = "block";  
}
