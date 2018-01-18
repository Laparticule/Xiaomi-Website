function openMenu() {
	// On affiche la liste
	document.getElementById('nav1').classList.add('nav1-opened');
	document.getElementById('nav1-minimal').classList.add('nav1-minimal-opened');
	document.getElementById('nav1-ul').classList.add('nav1-ul-opened');
	// On remplace l'icone 'ouvrir menu' par 'fermer menu'
	document.getElementById('nav-open').className = 'resp-btn-no-display';
	document.getElementById('nav-close').className = 'resp-btn-display';
	}
function closeMenu() {
	// On ferme la liste
	document.getElementById('nav1').classList.remove('nav1-opened');
	document.getElementById('nav1-minimal').classList.remove('nav1-minimal-opened');
	document.getElementById('nav1-ul').classList.remove('nav1-ul-opened');
	// On remplace l'icone 'fermer menu' par 'ouvrir menu'
	document.getElementById('nav-open').className = 'resp-btn-display';
	document.getElementById('nav-close').className = 'resp-btn-no-display';
}
