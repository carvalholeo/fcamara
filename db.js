var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCCvXS9LoTK-JwsJV642ukwr4xl-Hc1vY8",
    authDomain: "pesquisa-satisfacao-hospital.firebaseapp.com",
    databaseURL: "https://pesquisa-satisfacao-hospital.firebaseio.com",
    projectId: "pesquisa-satisfacao-hospital",
    storageBucket: "pesquisa-satisfacao-hospital.appspot.com",
    messagingSenderId: "292576238730"
  };
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pesquisa-satisfacao-hospital.firebaseio.com"
});
firebase.initializeApp(config);

var db = firebase.database();

module.exports = "db";