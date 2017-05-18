// Initialize Firebase
var config = {
    apiKey: "AIzaSyCVDYFhHO7hCFhU01pZucR3pStju5aF48Y",
    authDomain: "sculptor-app.firebaseapp.com",
    databaseURL: "https://sculptor-app.firebaseio.com",
    projectId: "sculptor-app",
    storageBucket: "sculptor-app.appspot.com",
    messagingSenderId: "170561350801"
};
var app = firebase.initializeApp(config);
String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

var form = document.getElementById('myform');

form.addEventListener('submit', function(e){
    var email = document.getElementById('myemail').value;
    app.database().ref('s2newsletter/').push({
        email: email,
        datatime: new Date().toUTCString()
    });

    document.getElementById('myemail').value = "";
    document.getElementById('tanks').classList.add('show');
    setTimeout(function(){
        document.getElementById('tanks').classList.remove('show');
    }, 3000);
    e.preventDefault();
    return false;
});
