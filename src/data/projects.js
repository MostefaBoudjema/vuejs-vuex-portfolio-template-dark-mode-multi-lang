// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Google Health Platform',
		category: 'Laravel Application',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Phoenix Digital Agency',
		category: 'Vue JS Application',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'Html Design',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'Laravel API App',
		img: require('@/assets/images/ui-project-2.jpg'),
	},
	{
		id: 5,
		title: 'Social App',
		category: 'Laravel VueJS Inertia Application',
		img: require('@/assets/images/mobile-project-1.jpg'),
	},
	{
		id: 6,
		title: 'eCommerce Store',
		category: 'Wordpress site',
		img: require('@/assets/images/web-project-1.jpg'),
	},
];

export default projects;
