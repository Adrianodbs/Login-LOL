const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.login__button')

// Desestruturou o event, pegando apenas o target
const handleFocus = ({ target }) => {
  // O span está no mesmo nível do input, posicionado de forma anterior, ou seja, é o irmão anterior
  const span = target.previousElementSibling
  span.classList.add('span-active')
}

const handleFocusOut = ({ target }) => {
  if (target.value === '') {
    const span = target.previousElementSibling
    span.classList.remove('span-active')
  }
}

const handleChange = () => {
  const [username, password] = inputs

  if (username.value && password.value.length >= 8) {
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', '')
  }
}

inputs.forEach(input => input.addEventListener('focus', handleFocus))
inputs.forEach(input => input.addEventListener('focusout', handleFocusOut))
inputs.forEach(input => input.addEventListener('input', handleChange))
