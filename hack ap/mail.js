const firebaseConfig = {
  apiKey: "AIzaSyAF7_2aAl2QuopZ3wNGV2-yzWIc0Is8rXI",
  authDomain: "hack-ap-c0d7c.firebaseapp.com",
  databaseURL: "https://hack-ap-c0d7c-default-rtdb.firebaseio.com",
  projectId: "hack-ap-c0d7c",
  storageBucket: "hack-ap-c0d7c.appspot.com",
  messagingSenderId: "628780210600",
  appId: "1:628780210600:web:20f04c6d8266a1b038259d",
  measurementId: "G-SM3EV176MC"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
