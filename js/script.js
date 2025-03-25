document.getElementById("openSignup").onclick = function() {
    document.getElementById("signupModal").style.display = "block";
};

document.querySelector(".close").onclick = function() {
    document.getElementById("signupModal").style.display = "none";
};
