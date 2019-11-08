window.addEventListener('load', (event) => {
    document.getElementById('thanks-personalised').innerHTML = "Thanks for signing up, "+ localStorage.usersName + "!";
    document.getElementById('email-personalised').innerHTML = "Once we've verified your ID we'll send you an email to "+ localStorage.usersEmail + " with your login details.";
  });