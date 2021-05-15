function AddUser() {
    u1 = document.getElementById("user_name").value;
    localStorage.setItem("user_name", u1);
    window.location = "kwitter_room.html";
}