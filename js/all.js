let popup = document.querySelector('.feedback-brightness');
let catalog = document.getElementById('site-navigation__catalog');

document.getElementById('site-navigation__item').addEventListener('mouseover', function () {
	catalog.classList.add('catalog-hover');
});
document.getElementById('site-navigation__item').addEventListener('mouseout', function () {
	catalog.classList.remove('catalog-hover');
});

document.querySelectorAll('.dropdown-menu a').forEach(function (e) {
	e.addEventListener('focus', function () {
		catalog.classList.add('catalog-hover');
	});
	e.addEventListener('blur', function () {
		catalog.classList.remove('catalog-hover');
	});
});

if(popup) {
	document.getElementById('popup').addEventListener('click', function (e) {
		e.preventDefault();
		document.getElementById('feedback-popup').classList.add('feedback-brightness-on');
		document.body.classList.add('hidden-overflow');
	}, false);

	document.getElementById('close-popup').addEventListener('click', function () {
		document.getElementById('feedback-popup').classList.remove('feedback-brightness-on');
		document.body.classList.remove('hidden-overflow');
	});

	document.getElementById('btn-feedback').addEventListener('click', function () {
		let name = document.getElementById('user-name');
		let email = document.getElementById('feedback-email');
		let text = document.getElementById('feedback-text');
		if (!name.checkValidity()) {
			document.getElementById('feedback-section').classList.add('feedback-alert');
			setTimeout(function () {
				document.getElementById('feedback-section').classList.remove('feedback-alert');
			},500);
		} else if (!email.checkValidity()) {
			document.getElementById('feedback-section').classList.add('feedback-alert');
			setTimeout(function () {
				document.getElementById('feedback-section').classList.remove('feedback-alert');
			},500);
		} else if (!text.checkValidity()) {
			document.getElementById('feedback-section').classList.add('feedback-alert');
			setTimeout(function () {
				document.getElementById('feedback-section').classList.remove('feedback-alert');
			},500);
		}
	});
}