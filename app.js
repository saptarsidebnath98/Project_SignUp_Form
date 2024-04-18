const passwordInput = document.querySelector('input[type="password"]');

passwordInput.addEventListener('input', function() {
    this.classList.add('interacted');
});


