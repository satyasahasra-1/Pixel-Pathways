(function(){
	function renderHome(root){
		const hero = UI.el(`<div class="p-4 mb-3 bg-white rounded border"><h3 class="mb-2">Welcome to Pixel Pathways</h3><p class="mb-0">Explore textbooks, take quizzes, chat with teachers, and track your progress.</p></div>`);
		root.appendChild(hero);
		const grid = UI.el('<div class="row g-3"></div>');
		DB.classes.forEach(c=>{
			const col = UI.el('<div class="col-12 col-md-6 col-xl-4"></div>');
			const body = `<div class="d-flex flex-wrap gap-2">
				<a class="btn btn-outline-primary btn-sm" href="#/library/${c.id}">Open Library</a>
				<a class="btn btn-outline-success btn-sm" href="#/quizzes">Quizzes</a>
			</div>`;
			col.appendChild(UI.card({ title: c.name, body }));
			grid.appendChild(col);
		});
		root.appendChild(grid);
	}
	function renderLibrary(root, params){
		const classId = parseInt(params?.[0] || '1', 10);
		const c = DB.classes.find(x=>x.id===classId);
		root.appendChild(UI.card({ title: `Library - ${c.name}`, body: '' }));
		const row = UI.el('<div class="row g-3 mt-1"></div>');
		c.subjects.forEach(s=>{
			const body = `
				<div class="mb-2"><a class="btn btn-sm btn-primary" href="${s.textbookPdf}" target="_blank" rel="noopener">Open Textbook PDF</a></div>
				<div class="d-flex flex-wrap gap-2">${s.lessons.map(l=>`<a class=\"btn btn-outline-secondary btn-sm\" href=\"${l.pdfUrl}\" target=\"_blank\">${l.title}</a>`).join('')}</div>`;
			const col = UI.el('<div class="col-12 col-md-6 col-xl-4"></div>');
			col.appendChild(UI.card({ title: s.name, body }));
			row.appendChild(col);
		});
		root.appendChild(row);
	}
	// Route registration
	Router.register('/home', renderHome);
	Router.register('/library', renderLibrary);
	Router.register('/quizzes', (root)=>Quizzes.renderQuizzesPage(root));
	Router.register('/notifications', (root)=>Notifications.renderPage(root));
	Router.register('/chat', (root)=>Chat.renderChat(root));
	Router.register('/analytics', (root)=>Analytics.renderAnalytics(root));
	Router.register('/admin', (root)=>Admin.renderAdminPanel(root));
	Router.register('/takequiz', (root, params)=>{
		const [classId, subjectId, scope, lessonId] = params;
		Quizzes.renderQuiz(root, { classId: parseInt(classId,10), subjectId, scope, scopeId: lessonId? parseInt(lessonId,10): undefined });
	});

	// Session timer and daily assessment
	let sessionStart = Date.now();
	let lastTick = Date.now();
	const timerEl = document.getElementById('sessionTimer');
	function tick(){
		const now = Date.now();
		const deltaMs = now - lastTick; lastTick = now;
		// consider active every tick
		Analytics.trackUsage(deltaMs / 60000);
		const totalMin = (now - sessionStart) / 60000;
		if(timerEl) timerEl.textContent = `Active time: ${UI.formatMinutes(totalMin)}`;
	}
	setInterval(tick, 60000);

	// Init
	document.getElementById('year').textContent = new Date().getFullYear();
	Notifications.seed();
	A11y.init();
	Router.navigate();
})();


