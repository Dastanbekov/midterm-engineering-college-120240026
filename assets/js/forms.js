document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regForm");
  const status = document.getElementById("regStatus");
  const pw = document.getElementById("password");
  const cpw = document.getElementById("confirmPassword");
  const togglePw = document.getElementById("togglePw");

  // Показывать / скрывать пароль
  togglePw.addEventListener("click", () => {
    const type = pw.type === "password" ? "text" : "password";
    pw.type = cpw.type = type;
    togglePw.textContent = type === "password" ? "Show" : "Hide";
  });

  // Разрешаем кнопку всегда
  const submitBtn = document.getElementById("regSubmit");
  submitBtn.disabled = false;

  // Проверка при отправке
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Проверка совпадения паролей
    if (pw.value !== cpw.value) {
      cpw.classList.add("is-invalid");
      document.getElementById("cpwErr").style.display = "block";
      status.textContent = "";
      return;
    } else {
      cpw.classList.remove("is-invalid");
      document.getElementById("cpwErr").style.display = "none";
    }

    // Проверка встроенной валидации HTML5
    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      status.innerHTML = `<span class="text-danger">Please correct the highlighted errors.</span>`;
      return;
    }

    // Если всё корректно
    form.classList.remove("was-validated");
    status.innerHTML = `<span class="text-success">✅ Account created successfully!</span>`;
    form.reset();
  });
});
