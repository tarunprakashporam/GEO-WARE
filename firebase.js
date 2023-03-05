// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCqSu1H-iP7ftLvyhHxc6P71bXQTOdB3J4",
  authDomain: "ware-house-tracking.firebaseapp.com",
  projectId: "ware-house-tracking",
  storageBucket: "ware-house-tracking.appspot.com",
  messagingSenderId: "105846543983",
  appId: "1:105846543983:web:42fadf07c6e9bc0f321f9a",
  measurementId: "G-G5FPCVEN25"
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase authentication service
var auth = firebase.auth();

// Registration process
document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(userCredential) {
    // User registered successfully
    var user = userCredential.user;
    var message = "You are registered! Now try logging in.";
    document.getElementById("registration-message").innerHTML = message;
    console.log(message);
  })
  .catch(function(error) {
    // Handle registration errors
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(error);
  });
});

// Login process
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(userCredential) {
    // User logged in successfully
    var user = userCredential.user;
    console.log(user);
    window.location.href = "dashboard.html"; // Redirect to dashboard page
  })
  .catch(function(error) {
    // Handle login errors
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(error);
  });
});
