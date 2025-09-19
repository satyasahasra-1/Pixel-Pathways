(function(){
	const PREF_KEY = 'a11y_prefs';
	function applyPrefs(p){
		document.body.dataset.theme = p.highContrast ? 'high-contrast' : 'default';
		document.documentElement.style.setProperty('--base-font-size', `${p.fontSize}px`);
		const range = document.getElementById('fontSizeRange');
		const contrast = document.getElementById('contrastToggle');
		if(range) range.value = p.fontSize;
		if(contrast) contrast.checked = p.highContrast;
	}
	function init(){
		const prefs = Store.get(PREF_KEY, { fontSize: 16, highContrast: false });
		applyPrefs(prefs);
		document.getElementById('fontSizeRange').addEventListener('input', (e)=>{
			const p = {...prefs, fontSize: parseInt(e.target.value, 10)};
			Store.set(PREF_KEY, p); applyPrefs(p);
		});
		document.getElementById('contrastToggle').addEventListener('change', (e)=>{
			const p = {...prefs, highContrast: e.target.checked};
			Store.set(PREF_KEY, p); applyPrefs(p);
		});
	}
	window.A11y = { init };
})();
