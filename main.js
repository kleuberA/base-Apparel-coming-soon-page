const input = document.querySelector('.inputEmail')
const button = document.querySelector('.iconArrow')
const containerInput = document.querySelector('.containerInput')
let msgErro = document.createElement('h1')
const imageErro = document.querySelector('.iconErro')
button.addEventListener('click', () => {
	if((input.value == '') || (input.value == '@')){
		containerInput.appendChild(msgErro)
		imageErro.style.visibility = 'visible'
		msgErro.classList.add('msgErro')
		input.classList.add('inputErro')
		msgErro.textContent = 'Please provide a valid email'
	}else{
		msgErro.classList.remove('msgErro')
		msgErro.textContent = ''
		imageErro.style.visibility = 'hidden'
		input.classList.remove('inputErro')
	}
	
})