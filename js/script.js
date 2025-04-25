document.getElementById("openSignup").onclick = function() {
    document.getElementById("signupModal").style.display = "block";
};

document.querySelector(".close").onclick = function() {
    document.getElementById("signupModal").style.display = "none";
};
auth.onAuthStateChanged(user => {
    if (user) {
      document.getElementById("main-content").style.display = "block";
    }
  });
  