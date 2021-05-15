//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD_gFwiBlysz9iXKxHh1S4QaHJsaspnx0A",
    authDomain: "kwitter-d9070.firebaseapp.com",
    databaseURL: "https://kwitter-d9070-default-rtdb.firebaseio.com",
    projectId: "kwitter-d9070",
    storageBucket: "kwitter-d9070.appspot.com",
    messagingSenderId: "132110768017",
    appId: "1:132110768017:web:8b594fc1587fd1a7162c30"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function Addroom() {
    room_name = document.getElementById("room_name").value;
    console.log(room_name);
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - ", Room_names);
            row = "<div class='room_name' id='" + Room_names + "' onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function remove() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}