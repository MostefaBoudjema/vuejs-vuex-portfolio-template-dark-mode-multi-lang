const settings=
{
	cv_path: '/files/MostefaBoudjema-Resume.pdf',
	hero_image: require('@/assets/images/developer.svg'),
	hero_image_dark: require('@/assets/images/developer-dark.svg'),
	logo_dark: require("@/assets/images/logo-dark.svg"),
	logo_light: require("@/assets/images/logo-light.svg"),
	page_404: require("@/assets/images/404-page.png"),
	profile_photo: require("@/assets/images/me2.jpg"),
	whatsapp: require("@/assets/images/whatsapp.svg"),
	full_list: [3, 9, 1, 10, 0, 11, 5, 2, 4, 6, 7, 8],
	home_list: [3, 9, 1, 10, 0, 11],
	// home_list: [{
	// 	id: 3,
	// }, {
	// 	id: 9,
	// }, {
	// 	id: 1,
	// }, {
	// 	id: 10,
	// }, {
	// 	id: 0,
	// }, {
	// 	id: 11,
	// }],
	show_cv: true,
	show_multi_lang: false,
	show_hire_me: false,
	show_contact_form: false,
	contacts: [
		{
			id: 1,
			name: 'Annaba, Algeria',
			icon: 'map-pin',
		},
		{
			id: 2,
			name: 'Boudjema.Mustafa.big@gmail.com',
			icon: 'mail',
		},
		{
			id: 3,
			name: '+213 793 692 2 89',
			icon: 'phone',
		},
	],
	categories: [
		{
			id: 1,
			value: "Laravel Application",
			name: "Laravel Application",
		},
		{
			id: 2,
			value: "Laravel Vue Application",
			name: "Laravel Vue Application",
		},
		{
			id: 3,
			value: "Wordpress site",
			name: "Wordpress site",
		},
		{
			id: 4,
			value: "Vue App",
			name: "Vue App",
		},
	],
}

export default settings;
