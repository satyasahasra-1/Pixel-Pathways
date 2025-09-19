(function(){
	const subjects = ['Math', 'Science', 'English', 'Social Studies', 'Computer'];
	const classes = Array.from({length:10}, (_,i)=>({
		id: i+1,
		name: `Class ${i+1}`,
		subjects: subjects.map(s=>({
			id: s.toLowerCase().replace(/\s+/g,'-'),
			name: s,
			teachers: [
				{name:`${s} Teacher A`, email:`${s.toLowerCase().replace(/\s+/g,'')}a@class${i+1}.school`},
				{name:`${s} Teacher B`, email:`${s.toLowerCase().replace(/\s+/g,'')}b@class${i+1}.school`}
			],
			lessons: Array.from({length:6}, (_,l)=>({
				id: l+1,
				title: `${s} Lesson ${l+1}`,
				pdfUrl: `https://example.com/class${i+1}/${s.toLowerCase()}/lesson${l+1}.pdf`
			})),
			textbookPdf: `https://example.com/class${i+1}/${s.toLowerCase()}/textbook.pdf`
		}))
	}));

	function buildSampleQuiz(title){
		return {
			title,
			questions: [
				{ q: 'What is 2 + 2?', options: ['3','4','5','6'], answer: 1 },
				{ q: 'Choose the vowel', options: ['b','c','a','d'], answer: 2 },
				{ q: 'Earth is a ...', options: ['Star','Planet','Comet','Galaxy'], answer: 1 }
			]
		};
	}

	const quizzes = {};
	classes.forEach(c=>{
		quizzes[c.id] = {};
		c.subjects.forEach(s=>{
			quizzes[c.id][s.id] = {
				textbook: buildSampleQuiz(`${c.name} - ${s.name} Textbook Quiz`),
				lessons: Object.fromEntries(s.lessons.map(l=>[l.id, buildSampleQuiz(`${s.name} Lesson ${l.id}`)]))
			};
		});
	});

	window.DB = { classes, quizzes };
})();
