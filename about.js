console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been submit successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('img').addEventListener('mouseover', () => {
	return alert('Never stop being you, because you are amazing!')
})