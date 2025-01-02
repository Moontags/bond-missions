
document.getElementById('agent').textContent = 'Good to see you again sir';

// get elenments
const loginModal = document.getElementById('login-modal');
const loginButton = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const jobButton = document.getElementById('job');

// add event listener to login button
loginButton.addEventListener('click', () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === 'James Bond' && password === '007') {
    // hide login modal
    loginModal.style.display = 'none';
    jobButton.disabled = false;

   // show success message
    Swal.fire({
      title: 'Welcome back 007',
      text: 'we have been expecting you',
      icon: 'success',
      showClass: {
        popup: 'animate__animated animate__fadeInUp animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown animate__faster'
      }
    });
  } else {
  // shoe error message
    errorMessage.textContent = 'Invalid username or password. Please try again.';
  }
});

// add event listener to job button
jobButton.addEventListener('click', () => {
  window.location.href = 'missions.html';
});
