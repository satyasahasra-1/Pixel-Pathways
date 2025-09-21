(function(){
	const KEY = 'notifications';
	function seed(){
		const seeded = Store.get(KEY);
		if(!seeded){
			Store.set(KEY, [
				{ id: 1, text: 'Welcome to Pixel Pathways!', ts: Date.now(), read: false },
				{ id: 2, text: 'New Math quizzes available for Class 5.', ts: Date.now(), read: false }
			]);
		}
	}
	function list(){ return Store.get(KEY, []); }
	function markRead(id){ const arr = list().map(n=>n.id===id?{...n, read:true}:n); Store.set(KEY, arr); }
	function add(text){
		const arr = list();
		const id = (arr.at(-1)?.id || 0) + 1;
		arr.push({ id, text, ts: Date.now(), read: false });
		Store.set(KEY, arr);
	}
	function renderPage(root){
		const items = list();
		root.appendChild(UI.card({ title: 'Notifications', body: '' }));
		const ul = document.createElement('ul'); ul.className='list-group my-3';
		items.forEach(n=>{
			const li = document.createElement('li');
			li.className = `list-group-item d-flex justify-content-between align-items-center ${n.read?'opacity-75':''}`;
			li.innerHTML = `<span>${n.text}</span><div class="btn-group btn-group-sm"><button class="btn btn-outline-primary">Open</button><button class="btn btn-outline-secondary">Dismiss</button></div>`;
			li.querySelectorAll('button')[0].addEventListener('click', ()=>{ markRead(n.id); Router.navigate(); });
			li.querySelectorAll('button')[1].addEventListener('click', ()=>{ markRead(n.id); Router.navigate(); });
			ul.appendChild(li);
		});
		root.appendChild(ul);
	}
	window.Notifications = { seed, list, markRead, add, renderPage };
})();


