const email = document.querySelector("#email");
const btn = document.querySelector(".btn");


// Mostrar o erro
const showError = (input => {
   input.style.removeProperty('border');
   input.classList.add('error--hide');
   document.querySelector('.container__icon').classList.add('error--hide');
   document.querySelector('.container__input__error').classList.add('error--hide');
})

// Mostrar sucesso
const showSuccess = (input => {
   input.classList.remove('error--hide');
   input.style.border = "5px solid #4C7BF3";
   document.querySelector('.container__icon').classList.remove('error--hide');
   document.querySelector('.container__input__error').classList.remove('error--hide');
})

// checa se os campos estão vazios
const isEmpty = (input => {
   input.value.length <= 1 ? showError(input) : showSuccess(input);
})

// Verificar o email
const checkEmail = (email => {
   let emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
   if (isEmpty(email) || !emailPattern.test(email.value.trim())) {
      showError(email)
   } else { showSuccess(email) }
})

// Verifica os campos quando usuário envia o formulário
btn.addEventListener('click', (e) => {
   e.preventDefault();
   checkEmail(email)
})