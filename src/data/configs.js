const configs=
{
	hero_image: require('@/assets/images/developer.svg'),
	hero_image_dark: require('@/assets/images/developer-dark.svg'),
	logo_dark: require("@/assets/images/logo-dark.svg"),
	logo_light: require("@/assets/images/logo-light.svg"),
	page_404: require("@/assets/images/404-page.png"),
	profile_photo: require("@/assets/images/me2.jpg"),
	whatsapp: require("@/assets/images/whatsapp2.svg"),
	cv_path: process.env.VUE_APP_CV_PATH || '/files/MostefaBoudjema-Resume.pdf',
	videoLinkEn: process.env.VUE_APP_VIDEO_LINK_EN || "https://www.youtube.com/embed/CMu_27ZURwA?si=sriXHIbvcos5620e",
	whatsappNumber: process.env.VUE_APP_WHATSAPP_NUMBER || "213793692289",
	full_list: JSON.parse(process.env.VUE_APP_FULL_LIST || '[3,9,1,10,0,11,5,2,4,6,7,8]'),
	home_list: JSON.parse(process.env.VUE_APP_HOME_LIST || '[3,14,15,6,9,10]'),
	show_cv: process.env.VUE_APP_SHOW_CV === 'true' || true,
	show_multi_lang: process.env.VUE_APP_SHOW_MULTI_LANG === 'true' || false,
	show_hire_me: process.env.VUE_APP_SHOW_HIRE_ME === 'true' || true,
	show_contact_form: process.env.VUE_APP_SHOW_CONTACT_FORM === 'true' || true,
	contacts: [
		{
			id: 1,
			name: 'Annaba, Algeria',
			icon: 'map-pin',
		},
		{
			id: 2,
			name: 'mostefa.boudjema.dev@gmail.com',
			icon: 'mail',
		},
		{
			id: 3,
			name: '+213 793 69 22 89',
			icon: 'phone',
		},
	],
	socials: [
		{
			id: 1,
			name: 'Telegram',
			link: 'Telegram',
			icon: 'map-pin',
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

export default configs;
