(function(){
	const routes = {};
	function register(path, handler){ routes[path] = handler; }
	async function navigate(){
		const hash = location.hash || '#/home';
		const [_, path, ...rest] = hash.split('/');
		const key = `/${path}`;
		const params = rest;
		const root = document.getElementById('app-root');
		root.innerHTML = '';
		if(routes[key]){
			await routes[key](root, params);
			root.focus();
		} else {
			root.appendChild(UI.alert('danger', `Page not found: ${key}`));
		}
	}
	window.Router = { register, navigate };
	window.addEventListener('hashchange', navigate);
})();
