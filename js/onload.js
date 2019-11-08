window.addEventListener('load', (event) => {
    document.getElementById('thanks-personalised').innerHTML = "Thanks for signing up, "+ localStorage.usersName + "!";
    document.getElementById('email-personalised').innerHTML = "We've sent you an email to "+ localStorage.usersEmail + " with your login details.";
  });