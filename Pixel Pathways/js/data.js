(function(){
	// PSEB Textbook Data for Classes 6-10
	const classes = [
		// Class 6
		{
			id: 6,
			name: 'Class 6',
			subjects: [
				{
					id: 'science',
					name: 'Science',
					teachers: [
						{name: 'Science Teacher A', email: 'sciencea@class6.school'},
						{name: 'Science Teacher B', email: 'scienceb@class6.school'}
					],
					lessons: [],
					textbookPdf: 'https://cdn1.byjus.com/wp-content/uploads/2021/09/PSEB-Class-6-Science-Textbook-2021-22.pdf'
				},
				{
					id: 'computer-science',
					name: 'Computer Science',
					teachers: [
						{name: 'Computer Teacher A', email: 'computera@class6.school'},
						{name: 'Computer Teacher B', email: 'computerb@class6.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Computer Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class6/computer/lesson${l+1}.pdf`
					})),
					textbookPdf: 'https://psebfiles.s3.ap-south-1.amazonaws.com/media/1687846188_Computer%20Science-6%28English%29.pdf'
				},
				{
					id: 'english',
					name: 'English',
					teachers: [
						{name: 'English Teacher A', email: 'englisha@class6.school'},
						{name: 'English Teacher B', email: 'englishb@class6.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `English Lesson ${l+1}`,
						pdfUrl: `https://example.com/class6/english/lesson${l+1}.pdf`
					})),
					textbookPdf: 'https://psebfiles.s3.ap-south-1.amazonaws.com/media/1709112955_Welcome%20LIFE-6%20English_compressed.pdf'
				},
				{
					id: 'mathematics',
					name: 'Mathematics',
					teachers: [
						{name: 'Math Teacher A', email: 'matha@class6.school'},
						{name: 'Math Teacher B', email: 'mathb@class6.school'}
					],
					lessons: [],
					textbookPdf: 'https://www.selfstudys.com/books/punjab/state-books/class-6th/mathematics/6713'
				},
				{
					id: 'punjabi',
					name: 'Punjabi',
					teachers: [
						{name: 'Punjabi Teacher A', email: 'punjabia@class6.school'},
						{name: 'Punjabi Teacher B', email: 'punjabib@class6.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Punjabi Lesson ${l+1}`,
						pdfUrl: `https://example.com/class6/punjabi/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'hindi',
					name: 'Hindi',
					teachers: [
						{name: 'Hindi Teacher A', email: 'hindia@class6.school'},
						{name: 'Hindi Teacher B', email: 'hindib@class6.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Hindi Lesson ${l+1}`,
						pdfUrl: `https://example.com/class6/hindi/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'social-science',
					name: 'Social Science',
					teachers: [
						{name: 'Social Science Teacher A', email: 'sociala@class6.school'},
						{name: 'Social Science Teacher B', email: 'socialb@class6.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Social Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class6/social/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'health-physical-education',
					name: 'Health & Physical Education',
					teachers: [
						{name: 'PE Teacher A', email: 'pea@class6.school'},
						{name: 'PE Teacher B', email: 'peb@class6.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Health & PE Lesson ${l+1}`,
						pdfUrl: `https://example.com/class6/pe/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				}
			]
		},
		// Class 7
		{
			id: 7,
			name: 'Class 7',
			subjects: [
				{
					id: 'mathematics',
					name: 'Mathematics',
					teachers: [
						{name: 'Math Teacher A', email: 'matha@class7.school'},
						{name: 'Math Teacher B', email: 'mathb@class7.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Mathematics Lesson ${l+1}`,
						pdfUrl: `https://example.com/class7/math/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'science',
					name: 'Science',
					teachers: [
						{name: 'Science Teacher A', email: 'sciencea@class7.school'},
						{name: 'Science Teacher B', email: 'scienceb@class7.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class7/science/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'english',
					name: 'English',
					teachers: [
						{name: 'English Teacher A', email: 'englisha@class7.school'},
						{name: 'English Teacher B', email: 'englishb@class7.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `English Lesson ${l+1}`,
						pdfUrl: `https://example.com/class7/english/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'punjabi',
					name: 'Punjabi',
					teachers: [
						{name: 'Punjabi Teacher A', email: 'punjabia@class7.school'},
						{name: 'Punjabi Teacher B', email: 'punjabib@class7.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Punjabi Lesson ${l+1}`,
						pdfUrl: `https://example.com/class7/punjabi/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'hindi',
					name: 'Hindi',
					teachers: [
						{name: 'Hindi Teacher A', email: 'hindia@class7.school'},
						{name: 'Hindi Teacher B', email: 'hindib@class7.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Hindi Lesson ${l+1}`,
						pdfUrl: `https://example.com/class7/hindi/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'social-science',
					name: 'Social Science',
					teachers: [
						{name: 'Social Science Teacher A', email: 'sociala@class7.school'},
						{name: 'Social Science Teacher B', email: 'socialb@class7.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Social Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class7/social/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'health-physical-education',
					name: 'Health & Physical Education',
					teachers: [
						{name: 'PE Teacher A', email: 'pea@class7.school'},
						{name: 'PE Teacher B', email: 'peb@class7.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Health & PE Lesson ${l+1}`,
						pdfUrl: `https://example.com/class7/pe/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'computer-science',
					name: 'Computer Science',
					teachers: [
						{name: 'Computer Teacher A', email: 'computera@class7.school'},
						{name: 'Computer Teacher B', email: 'computerb@class7.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Computer Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class7/computer/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				}
			]
		},
		// Class 8
		{
			id: 8,
			name: 'Class 8',
			subjects: [
				{
					id: 'mathematics',
					name: 'Mathematics',
					teachers: [
						{name: 'Math Teacher A', email: 'matha@class8.school'},
						{name: 'Math Teacher B', email: 'mathb@class8.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Mathematics Lesson ${l+1}`,
						pdfUrl: `https://example.com/class8/math/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'science',
					name: 'Science',
					teachers: [
						{name: 'Science Teacher A', email: 'sciencea@class8.school'},
						{name: 'Science Teacher B', email: 'scienceb@class8.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class8/science/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'english',
					name: 'English',
					teachers: [
						{name: 'English Teacher A', email: 'englisha@class8.school'},
						{name: 'English Teacher B', email: 'englishb@class8.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `English Lesson ${l+1}`,
						pdfUrl: `https://example.com/class8/english/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'punjabi',
					name: 'Punjabi',
					teachers: [
						{name: 'Punjabi Teacher A', email: 'punjabia@class8.school'},
						{name: 'Punjabi Teacher B', email: 'punjabib@class8.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Punjabi Lesson ${l+1}`,
						pdfUrl: `https://example.com/class8/punjabi/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'hindi',
					name: 'Hindi',
					teachers: [
						{name: 'Hindi Teacher A', email: 'hindia@class8.school'},
						{name: 'Hindi Teacher B', email: 'hindib@class8.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Hindi Lesson ${l+1}`,
						pdfUrl: `https://example.com/class8/hindi/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'social-science',
					name: 'Social Science',
					teachers: [
						{name: 'Social Science Teacher A', email: 'sociala@class8.school'},
						{name: 'Social Science Teacher B', email: 'socialb@class8.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Social Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class8/social/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'health-physical-education',
					name: 'Health & Physical Education',
					teachers: [
						{name: 'PE Teacher A', email: 'pea@class8.school'},
						{name: 'PE Teacher B', email: 'peb@class8.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Health & PE Lesson ${l+1}`,
						pdfUrl: `https://example.com/class8/pe/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'computer-science',
					name: 'Computer Science',
					teachers: [
						{name: 'Computer Teacher A', email: 'computera@class8.school'},
						{name: 'Computer Teacher B', email: 'computerb@class8.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Computer Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class8/computer/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				}
			]
		},
		// Class 9
		{
			id: 9,
			name: 'Class 9',
			subjects: [
				{
					id: 'mathematics',
					name: 'Mathematics',
					teachers: [
						{name: 'Math Teacher A', email: 'matha@class9.school'},
						{name: 'Math Teacher B', email: 'mathb@class9.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Mathematics Lesson ${l+1}`,
						pdfUrl: `https://example.com/class9/math/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'science',
					name: 'Science',
					teachers: [
						{name: 'Science Teacher A', email: 'sciencea@class9.school'},
						{name: 'Science Teacher B', email: 'scienceb@class9.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class9/science/lesson${l+1}.pdf`
					})),
					textbookPdf: 'https://www.selfstudys.com/books/punjab/state-books/class-9th/science/6587'
				},
				{
					id: 'english',
					name: 'English',
					teachers: [
						{name: 'English Teacher A', email: 'englisha@class9.school'},
						{name: 'English Teacher B', email: 'englishb@class9.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `English Lesson ${l+1}`,
						pdfUrl: `https://example.com/class9/english/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'punjabi',
					name: 'Punjabi',
					teachers: [
						{name: 'Punjabi Teacher A', email: 'punjabia@class9.school'},
						{name: 'Punjabi Teacher B', email: 'punjabib@class9.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Punjabi Lesson ${l+1}`,
						pdfUrl: `https://example.com/class9/punjabi/lesson${l+1}.pdf`
					})),
					textbookPdf: 'https://selfstudys.com/books/punjab/state-books/class-9th/punjabi-%E0%A8%AA%E0%A9%B0%E0%A8%9C%E0%A8%BE%E0%A8%AC%E0%A9%80/19300'
				},
				{
					id: 'hindi',
					name: 'Hindi',
					teachers: [
						{name: 'Hindi Teacher A', email: 'hindia@class9.school'},
						{name: 'Hindi Teacher B', email: 'hindib@class9.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Hindi Lesson ${l+1}`,
						pdfUrl: `https://example.com/class9/hindi/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'social-science',
					name: 'Social Science',
					teachers: [
						{name: 'Social Science Teacher A', email: 'sociala@class9.school'},
						{name: 'Social Science Teacher B', email: 'socialb@class9.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Social Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class9/social/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'health-physical-education',
					name: 'Health & Physical Education',
					teachers: [
						{name: 'PE Teacher A', email: 'pea@class9.school'},
						{name: 'PE Teacher B', email: 'peb@class9.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Health & PE Lesson ${l+1}`,
						pdfUrl: `https://example.com/class9/pe/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'computer-science',
					name: 'Computer Science',
					teachers: [
						{name: 'Computer Teacher A', email: 'computera@class9.school'},
						{name: 'Computer Teacher B', email: 'computerb@class9.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Computer Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class9/computer/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				}
			]
		},
		// Class 10
		{
			id: 10,
			name: 'Class 10',
			subjects: [
				{
					id: 'mathematics',
					name: 'Mathematics',
					teachers: [
						{name: 'Math Teacher A', email: 'matha@class10.school'},
						{name: 'Math Teacher B', email: 'mathb@class10.school'}
					],
					lessons: [],
					textbookPdf: 'https://psebfiles.s3.ap-south-1.amazonaws.com/media/1697190885_Mathematics-10%28English%29.pdf'
				},
				{
					id: 'english',
					name: 'English',
					teachers: [
						{name: 'English Teacher A', email: 'englisha@class10.school'},
						{name: 'English Teacher B', email: 'englishb@class10.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `English Lesson ${l+1}`,
						pdfUrl: `https://example.com/class10/english/lesson${l+1}.pdf`
					})),
					textbookPdf: 'https://psebfiles.s3.ap-south-1.amazonaws.com/media/1697190820_English%20main%20Course%20Book-10.pdf'
				},
				{
					id: 'computer-science',
					name: 'Computer Science',
					teachers: [
						{name: 'Computer Teacher A', email: 'computera@class10.school'},
						{name: 'Computer Teacher B', email: 'computerb@class10.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Computer Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class10/computer/lesson${l+1}.pdf`
					})),
					textbookPdf: 'https://psebfiles.s3.ap-south-1.amazonaws.com/media/1682995981_Computer%20Science-10%28English%29.pdf'
				},
				{
					id: 'health-physical-education',
					name: 'Health & Physical Education',
					teachers: [
						{name: 'PE Teacher A', email: 'pea@class10.school'},
						{name: 'PE Teacher B', email: 'peb@class10.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Health & PE Lesson ${l+1}`,
						pdfUrl: `https://example.com/class10/pe/lesson${l+1}.pdf`
					})),
					textbookPdf: 'https://psebfiles.s3.ap-south-1.amazonaws.com/media/1689741541_Health%20%26%20Physical%20Education-10%28English%29.pdf'
				},
				{
					id: 'social-science',
					name: 'Social Science',
					teachers: [
						{name: 'Social Science Teacher A', email: 'sociala@class10.school'},
						{name: 'Social Science Teacher B', email: 'socialb@class10.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Social Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class10/social/lesson${l+1}.pdf`
					})),
					textbookPdf: 'https://www.selfstudys.com/books/punjab/state-books/class-10th/social-science/social-science-i-part-1/167012'
				},
				{
					id: 'punjabi',
					name: 'Punjabi',
					teachers: [
						{name: 'Punjabi Teacher A', email: 'punjabia@class10.school'},
						{name: 'Punjabi Teacher B', email: 'punjabib@class10.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Punjabi Lesson ${l+1}`,
						pdfUrl: `https://example.com/class10/punjabi/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'hindi',
					name: 'Hindi',
					teachers: [
						{name: 'Hindi Teacher A', email: 'hindia@class10.school'},
						{name: 'Hindi Teacher B', email: 'hindib@class10.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Hindi Lesson ${l+1}`,
						pdfUrl: `https://example.com/class10/hindi/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				},
				{
					id: 'science',
					name: 'Science',
					teachers: [
						{name: 'Science Teacher A', email: 'sciencea@class10.school'},
						{name: 'Science Teacher B', email: 'scienceb@class10.school'}
					],
					lessons: Array.from({length:6}, (_,l)=>({
						id: l+1,
						title: `Science Lesson ${l+1}`,
						pdfUrl: `https://example.com/class10/science/lesson${l+1}.pdf`
					})),
					textbookPdf: '[PLACEHOLDER]'
				}
			]
		}
	];

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
