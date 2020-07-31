let buttonTarget = document.querySelector('button');

function ping() {
	document.getElementById('main').src = 'pepeYes.png';
}

buttonTarget.addEventListener('click', ping);
