
/* OTHERS PAGES */


/* Get Home Page */
module.exports.home = function (req, res) {
	res.render('homepage', {

		title: 'Bookshelff',

		home_data: {

			hero: {

				herotitle: 'Bookshelf',

				hero_box_1a: 'Global',

				hero_box_1b: 'Feed',

				hero_box_1c: 'The art of avoiding failure.',

				hero_box_2a: 'Team',

				hero_box_2b: 'Feed',

				hero_box_2c: 'Exploring the art of the possible.'


			},

			boxs: [{

				header: 'What is it?',

				body: ''
			}, {

				header: 'Why use it?',

				body: ''
			}]
		}
	});
};

/* Get About Page */
module.exports.about = function (req, res) {
	res.render('about', {

		title: 'About',

		about_body: {
			header: 'About',
			body_section_A: 'Research, the scary eight letter word, in academia is unavoidable. To succeed at anything in school, whether homework, paper, or test, one must do the time, that is, research. Research encompass a lot of events. Most of all these events orient themselves around one thing: Resource. Simply, a resource is something that is useful for a task at hand or future task. Now a days, resources can be gathered from almost anywhere, YouTube, Google, libraries, journals, etc… All these different avenues to accrue resources begin to make remembering and storing resources a nightmare for individual and especially for collaborative research.',
			body_section_B: 'I wanted to make resource gathering easier especially for collaborative efforts. I thought there had to be an easier way to document several things: First, where you got your resource. Second, add a description about your resource. Third, add information so others can obtain resource. Finally, have control on how you organize documentation in your resource directory. Finally, make it easy for users to navigate. That is when I thought what if a platform existed that could solve these issues. '
		}

	});
};


