/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Добро пожаловать на страницу Кодии! Welcome to Kodiia page!");

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


function formSend(){
  let userNameTestInput = userName.value;
  let userPhoneTestInput = userPhone.value;
  let userMailTestInput = userMail.value;
  let userMessageTestInput = userMessage.value;
  
  db.doc(userMailTestInput)
    .set({
    name: userNameTestInput,
    phone: userPhoneTestInput,
    mail: userMailTestInput,
    message: userMessageTestInput
  })
    .then(function(){
    console.log("Contact Form Ready");
    // clear form
     // alert("OK!")
    //document.getElementById("#form").reset();
  })
    .catch(function(error){
    console.log("Error");
    // alert("Error");
  })
};

function formTest(){
  let userNameTestInput = userName.value;
  let userPhoneTestInput = userPhone.value;
  let userMailTestInput = userMail.value;
  let userMessageTestInput = userMessage.value;
  
  db.doc()
    .set({})
    .then(function(){
    console.log("Contact Form Ready");
      })
    .catch(function(error){
    console.log("Error");
  })
};


formTest();

let hcR = Math.floor(Math.random()*50+150);
let hcG = Math.floor(Math.random()*50+150);
let hcB = Math.floor(Math.random()*50+200);
let acR = Math.floor(Math.random()*50+200);
let acG = Math.floor(Math.random()*50+150);
let acB = Math.floor(Math.random()*50+200);
let ccR = Math.floor(Math.random()*50+150);
let ccG = Math.floor(Math.random()*50+200);
let ccB = Math.floor(Math.random()*50+200);
let scR = Math.floor(Math.random()*50+200);
let scG = Math.floor(Math.random()*50+200);
let scB = Math.floor(Math.random()*50+150);
let cfcR = Math.floor(Math.random()*50+200);
let cfcG = Math.floor(Math.random()*50+200);
let cfcB = Math.floor(Math.random()*50+200);
let fcR = Math.floor(Math.random()*50+200);
let fcG = Math.floor(Math.random()*50+200);
let fcB = Math.floor(Math.random()*50+200);


let sA = 0;
let showAbout = () => {
  sA++;
  if (sA > 1){
    sA=0;
  }
  if (sA == 1){
  document.getElementById("aboutText").style.display = "block";
} else if (sA == 0) {
  document.getElementById("aboutText").style.display = "none";
}
  };

let sC = 0;
let showCourse = () => {
  sC++;
  if (sC > 1){
    sC=0;
  }
  if (sC == 1){
  document.getElementById("courseText").style.display = "block";
} else if (sC == 0) {
  document.getElementById("courseText").style.display = "none";
}
  };

let sS = 0;
let showStudy = () => {
  sS++;
  if (sS > 1){
    sS=0;
  }
  if (sS == 1){
  document.getElementById("studyText").style.display = "block";
} else if (sS == 0) {
  document.getElementById("studyText").style.display = "none";
}
  };

let sCont = 0;
let showContact = () => {
  sCont++;
  if (sCont > 1){
    sCont=0;
  }
  if (sCont == 1){
  document.getElementById("contactText").style.display = "block";
} else if (sCont == 0) {
  document.getElementById("contactText").style.display = "none";
}
  };


document.getElementById("header").style.backgroundColor = "rgb(" + hcR +"," + hcG + "," +  hcB + ")";
document.getElementById("about").style.backgroundColor = "rgb(" + acR +"," + acG + "," +  acB + ")";
document.getElementById("course").style.backgroundColor = "rgb(" + ccR +"," + ccG + "," +  ccB + ")";
document.getElementById("study").style.backgroundColor = "rgb(" + scR +"," + scG + "," +  scB + ")";
document.getElementById("contact").style.backgroundColor = "rgb(" + cfcR +"," + cfcG + "," +  cfcB + ")";
document.getElementById("footer").style.backgroundColor = "rgb(" + fcR +"," + fcG + "," +  fcB + ")";
