function openSub(nb) {
	/* On déroule les articles */
	var cat = document.getElementsByClassName("category")[nb-1];
	cat.classList.add("art-opened");
	cat.classList.remove("art-closed");

	/* On propose de refermer l'article */
	btn1 = document.getElementsByClassName("open-sub")[nb-1];
	btn1.classList.remove("sub-btn-visible");
	btn1.classList.add("sub-btn-not-visible");

	btn2 = document.getElementsByClassName("close-sub")[nb-1];
	btn2.classList.remove("sub-btn-not-visible");
	btn2.classList.add("sub-btn-visible");
}
function closeSub(nb) {
	/* On ferme les articles */
	var cat = document.getElementsByClassName("category")[nb-1];
	cat.classList.add("art-closed");
	cat.classList.remove("art-opened");

	/* On propose de refermer l'article */
	btn1 = document.getElementsByClassName("close-sub")[nb-1];
	btn1.classList.remove("sub-btn-visible");
	btn1.classList.add("sub-btn-not-visible");

	btn2 = document.getElementsByClassName('open-sub')[nb-1];
	btn2.classList.remove("sub-btn-not-visible");
	btn2.classList.add("sub-btn-visible");
}