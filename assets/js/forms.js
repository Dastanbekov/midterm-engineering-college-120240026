
// Registration form validation & UX
(function(){
  const form = document.getElementById('regForm');
  if (!form) return;
  const submitBtn = document.getElementById('regSubmit');
  const agree = document.getElementById('agree');
  const pw = document.getElementById('password');
  const cpw = document.getElementById('confirmPassword');
  const togglePw = document.getElementById('togglePw');
  const status = document.getElementById('regStatus');

  function validatePw(){
    const value = pw.value;
    const hasLen = value.length >= 8;
    const hasNum = /\d/.test(value);
    if (!hasLen || !hasNum){
      pw.setCustomValidity('Weak password');
    } else {
      pw.setCustomValidity('');
    }
  }
  function validateMatch(){
    if (cpw.value && cpw.value !== pw.value){
      cpw.setCustomValidity('Passwords do not match');
    } else {
      cpw.setCustomValidity('');
    }
  }

  pw.addEventListener('input', () => { validatePw(); validateMatch(); });
  cpw.addEventListener('input', validateMatch);

  togglePw?.addEventListener('click', () => {
    const type = pw.type === 'password' ? 'text' : 'password';
    pw.type = type;
    cpw.type = type;
    togglePw.textContent = type === 'password' ? 'Show' : 'Hide';
  });

  function updateSubmitState(){
    submitBtn.disabled = !(form.checkValidity() && agree.checked);
  }
  form.addEventListener('input', updateSubmitState);
  agree.addEventListener('change', updateSubmitState);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();

    validatePw(); validateMatch();
    form.classList.add('was-validated');

    if (form.checkValidity() && agree.checked){
      submitBtn.disabled = true;
      status.textContent = 'Account created! Check your email to continue.';
      status.className = 'small text-success';
      // Simulate a reset while keeping success visible
      setTimeout(() => {
        form.reset();
        form.classList.remove('was-validated');
        submitBtn.disabled = true;
      }, 500);
    } else {
      status.textContent = 'Please fix the errors highlighted below.';
      status.className = 'small text-danger';
    }
  });
})();

// Contact form validation with math challenge and honeypot
(function(){
  const form = document.getElementById('contactForm');
  if (!form) return;
  const status = document.getElementById('contactStatus');
  const chall = document.getElementById('challengeText');
  const input = document.getElementById('cChallenge');
  const honeypot = document.getElementById('cWebsite');

  // Simple random challenge
  const a = Math.floor(Math.random()*6)+2; // 2..7
  const b = Math.floor(Math.random()*6)+2; // 2..7
  chall.textContent = `What is ${a} + ${b}?`;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    form.classList.add('was-validated');

    const ok = form.checkValidity();
    const bot = honeypot.value.trim().length > 0;
    const solved = parseInt(input.value,10) === (a+b);

    if (!ok){
      status.textContent = 'Please fill all required fields.';
      status.className = 'small text-danger';
      return;
    }
    if (bot || !solved){
      status.textContent = 'Failed anti‑spam check.';
      status.className = 'small text-danger';
      return;
    }
    status.textContent = 'Your message has been sent! We will reply by email.';
    status.className = 'small text-success';
    setTimeout(() => {
      form.reset();
      form.classList.remove('was-validated');
    }, 500);
  });
})();
