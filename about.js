console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert('form submitted successfully');
}

function compliment (event){
	window.alert("Dangggg you look gooooood today")
}


let form = document.querySelector('form#contact');
let pic = document.querySelector('img')
form.addEventListener('submit', handleSubmit);
pic.addEventListener('mouseover', compliment)