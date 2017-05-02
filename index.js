
$('#signUpButton').on('click',function(event) {
  let email = $('#signUpEmail').val();
  let password = $('#signUpPassword').val();
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
});

// function loggedIn(event) {
//   let emailLogin = document.getElementById("loginEmail").value;
//   let passwordLogin = document.getElementById("loginPassword").value;
//   let loginButton = document.getElementById("loginButton");
// console.log(emailLogin);
// console.log(passwordLogin);
// }
// loginButton.addEventListener('click', loggedIn);
// console.log('submitting');


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBR7OqTRDv58UBgda_rbEZswdoJzJzHNOE",
    authDomain: "fir-auth-eefaa.firebaseapp.com",
    databaseURL: "https://fir-auth-eefaa.firebaseio.com",
    projectId: "fir-auth-eefaa",
    storageBucket: "fir-auth-eefaa.appspot.com",
    messagingSenderId: "289705455765"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

//Creating Users with Email and Password with
//an if/ else errorCode of auth/weak-password
$('loginButton').on('click', function(event) {
  let email = $('#loginEmail').val();
  let password = $('#loginPassword').val();
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    if (errorCode == 'auth/weak-password') {
      alert('The password is to weak');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
});


// Sign in a user with an email and password
$('#loginButton').on('click', function(event) {
  let email = $('#loginEmail').val();
  let password = $('#loginPassword').val();
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(response){
    console.log(response);
      $('#userInput').show(function() {
        $('#userButton').show();
        $('#display').show();
        $('#userButton').on('click', function(){
          let userInput = $('#userInput').val();
          userInput;
          console.log('#userButton');
        })

        // $('display').show(function() {
        //   $('#userInput').val();


    })
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error.code);
  });
})


  //sign out a Users
  $('#signOutButton').on('click',function() {
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    })
    .then(function(){
      $('#display').hide();
      $('#userInput').hide();
      $('#userButton').hide();
    })
    .catch(function(error) {
    // An error happened.
    console.log('#signOutButton')
  });
});
