const firebaseConfig = {
    apiKey: "AIzaSyBuwVyzowRsdsvCqouZ5QAuJMgNG-5dOXg",
    authDomain: "webtech-6af42.firebaseapp.com",
    databaseURL: "https://webtech-6af42-default-rtdb.firebaseio.com",
    projectId: "webtech-6af42",
    storageBucket: "webtech-6af42.appspot.com",
    messagingSenderId: "401172554652",
    appId: "1:401172554652:web:12645b5af81f08b55d9e59"
  };

 firebase.initializeApp(FirebaseConfig);

// reference your database

var const contactFormDB = firebase.database().ref("webtech");

document.getElementbyId("webtech").addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventdefault();
    
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var msgContent = getElementVal('msgContent');
    
    
    saveMessages(name , emailid , msgContent);
    
//   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("webtech").reset();

}

cons saveMessages = (name , emailid , msgContent) => {

var newWebtech = webtechDB.push();

newwebtech.set({
name : name,
emailid : emailid,
msgContent : msgContent
})

};

cons getElementVal = (id) => {
     return.getElementById(id).value;

};
