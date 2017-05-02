$('#display').hide();
$('#userInput').hide();
$('#userButton').hide();

$('#signUpButton').on('click',function(event) {
  let email = $('#signUpEmail').val();
  let password = $('#signUpPassword').val();
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function(user) {
    if (user){
      $('#userInput').show();
      $('#userButton').show();
      $('#display').show();
    // .then(user => user.getToken(response.uid)
      console.log(user.uid);
    }
  })
  .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
});


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


// Sign in a user with an email and password
$('#loginButton').on('click', function(event) {
  let email = $('#loginEmail').val();
  let password = $('#loginPassword').val();
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => user.getToken())
  .then(JWT => console.log(JWT))
  .then(function(response){
    console.log(response);
      $('#userInput').show();
      $('#display').show();
      $('#userButton').show();



      $('#userButton').on('click', function(){
          let userInput = $('#userInput').val();
          $('#display').append('<li>' + userInput +'</li>');
          console.log(userInput);
        firebase.database().ref('message/').push({
        email: email,
        userInput : userInput
      })

          });
        })

    })

    // .catch(function(error) {
    // // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // console.log(error.code);
    // });



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
