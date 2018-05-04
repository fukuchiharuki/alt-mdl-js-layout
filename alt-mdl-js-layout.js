/* is-small-screen */
(function() {
	const layoutElement = document.getElementsByClassName('mdl-layout')[0];
	let resizeTimer = undefined;
	window.addEventListener('resize', function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(observeScreenWidth, 100);
	});
	observeScreenWidth();
	function observeScreenWidth() {
		if (window.innerWidth > 1024) {
			layoutElement.classList.remove('is-small-screen');
		} else {
			layoutElement.classList.add('is-small-screen');
		}
	}
})();

/* mdl-layout--fixed-header */
(function() {
	const layoutElement = document.getElementsByClassName('mdl-layout')[0];
	const headerElement = document.getElementsByClassName('mdl-layout__header')[0];
	const topElement = document.querySelector('a[name=top]');
	if (!layoutElement.classList.contains('mdl-layout--fixed-header')) return;
	// padding
	headerElement.style.position = 'fixed';
	observeTopPadding();
	let resizeTimer = undefined;
	window.addEventListener('resize', function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(observeTopPadding, 100);
	});
	function observeTopPadding() {
		const height = getHeaderHeight();
		changeTopPadding(height);
	}
	function getHeaderHeight() {
		return headerElement.offsetHeight;
	}
	function changeTopPadding(height) {
		topElement.style.paddingTop = height + 'px';
		topElement.style.display = 'block';
	}
	// shadow
	observeWindowScroll();
	window.addEventListener('scroll', observeWindowScroll);
	function observeWindowScroll() {
		if (window.scrollY === 0) {
			headerElement.classList.remove('is-casting-shadow');
			headerElement.classList.remove('is-compact');
		} else {
			headerElement.classList.add('is-casting-shadow');
			headerElement.classList.add('is-compact');
		}
	}
})();
