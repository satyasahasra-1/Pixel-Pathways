(function(){
	function renderHome(root){
		const hero = UI.el(`<div class="p-4 mb-3 bg-white rounded border">
			<h3 class="mb-2">Welcome to Pixel Pathways</h3>
			<p class="mb-2">Explore PSEB (Punjab State Education Board) textbooks for Classes 6-10, take quizzes, chat with teachers, and track your progress.</p>
			<div class="alert alert-info alert-sm mb-0">
				<small><i class="bi bi-info-circle"></i> <strong>PSEB Textbooks:</strong> Official textbooks from Punjab State Education Board for Classes 6-10</small>
			</div>
		</div>`);
		root.appendChild(hero);
		
		const grid = UI.el('<div class="row g-3"></div>');
		DB.classes.forEach(c=>{
			const availableTextbooks = c.subjects.filter(s => s.textbookPdf !== '[PLACEHOLDER]').length;
			const totalTextbooks = c.subjects.length;
			
			const col = UI.el('<div class="col-12 col-md-6 col-xl-4"></div>');
			const body = `
				<div class="mb-3">
					<div class="d-flex justify-content-between align-items-center mb-2">
						<span class="badge bg-primary">${availableTextbooks}/${totalTextbooks} Textbooks Available</span>
						<span class="badge bg-secondary">PSEB</span>
					</div>
					<div class="d-flex flex-wrap gap-2">
						<a class="btn btn-outline-primary btn-sm" href="#/library/${c.id}">
							<i class="bi bi-book"></i> View Textbooks
						</a>
						<a class="btn btn-outline-success btn-sm" href="#/quizzes">
							<i class="bi bi-question-circle"></i> Quizzes
						</a>
					</div>
				</div>
				<div class="small text-muted">
					<strong>Subjects:</strong> ${c.subjects.map(s => s.name).join(', ')}
				</div>`;
			col.appendChild(UI.card({ 
				title: c.name, 
				body,
				classes: availableTextbooks > 0 ? 'border-success' : 'border-warning'
			}));
			grid.appendChild(col);
		});
		root.appendChild(grid);
	}
	function renderLibrary(root, params){
		const classId = parseInt(params?.[0] || '6', 10);
		const c = DB.classes.find(x=>x.id===classId);
		if (!c) {
			root.appendChild(UI.alert('warning', 'Class not found. Please select a valid class.'));
			return;
		}
		
		root.appendChild(UI.card({ 
			title: `PSEB Textbooks - ${c.name}`, 
			body: `<p class="text-muted mb-0">Official Punjab State Education Board textbooks for ${c.name}</p>` 
		}));
		
		const row = UI.el('<div class="row g-3 mt-1"></div>');
		c.subjects.forEach(s=>{
			const isPlaceholder = s.textbookPdf === '[PLACEHOLDER]';
			const body = `
				<div class="mb-3">
					${isPlaceholder ? 
						`<div class="alert alert-warning alert-sm mb-2">
							<small><i class="bi bi-exclamation-triangle"></i> Textbook not available yet</small>
						</div>` : 
						`<div class="d-flex gap-2 mb-2">
							<a class="btn btn-sm btn-primary" href="${s.textbookPdf}" target="_blank" rel="noopener">
								<i class="bi bi-eye"></i> View Textbook
							</a>
							<a class="btn btn-sm btn-outline-primary" href="${s.textbookPdf}" download>
								<i class="bi bi-download"></i> Download PDF
							</a>
						</div>`
					}
					<div class="small text-muted">
						<strong>Subject:</strong> ${s.name}<br>
						<strong>Class:</strong> ${c.name}<br>
						${isPlaceholder ? '<strong>Status:</strong> <span class="text-warning">Coming Soon</span>' : '<strong>Status:</strong> <span class="text-success">Available</span>'}
					</div>
				</div>
				<div class="text-center">
					<p class="text-muted mb-0">Click the button below to access the textbook PDF</p>
				</div>`;
			const col = UI.el('<div class="col-12 col-md-6 col-xl-4"></div>');
			col.appendChild(UI.card({ 
				title: s.name, 
				body,
				classes: isPlaceholder ? 'border-warning' : 'border-success'
			}));
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


