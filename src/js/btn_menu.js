/* Rotacion del menu hamburguesa a x */
function toogleMenu() {
	const menuBtn = document.querySelector('.menu-btn');
	let showMenu = false;

	menuBtn.addEventListener('click', function () {
		if (!showMenu) {
			menuBtn.classList.add('close');
			showMenu = true;
		} else {
			menuBtn.classList.remove('close');

			// Reset the menu state
			showMenu = false;
		}
	});
}

toogleMenu();
/* document.addEventListener('DOMContentLoaded', function () {
	toogleMenu();
}); */
