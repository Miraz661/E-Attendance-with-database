document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');
  const body = document.querySelector("#body");
  setInterval(loadPage, 3000);

  function loadPage() {
    body.classList.add("body");
  }

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.getElementById('signupUsername').value;
    let password = document.getElementById('signupPassword').value;
    let ConPassword = document.getElementById('ConfsignupPassword').value;

    // Send signup data to the server
    if (password === ConPassword) {
      fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => response.text())
        .then(data => {
          console.log(data);
          username="";
          password="";
          ConPassword="";
          // Handle success or error response
        })
        .catch(error => {
          console.error('Error:', error);
        });
    } else {
      console.log("Password and confirm password didn't match");
    }
  });

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    // Send login data to the server
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.text())
      .then(data => {
        localStorage.setItem("user",username);
        console.log(data);
        username="";
        password="";
        localStorage.setItem("isLogin",true);
        self.location = "../../index.html"
      })
      .catch(error => {
        console.error('Error:', error);

      });
  });
});
