const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById("googleSignIn").addEventListener("click", (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then(result => {
        alert("Signed in with Google: " + result.user.email);
        window.location.href = "knowledge.html";
      })
      .catch(error => {
        alert("Google Sign-In Error: " + error.message);
      });
  });
  