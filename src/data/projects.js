import i18n from '../i18n';
const { t }=i18n.global;

const projects=[{
	id: 0,
	title: 'Popular Movie DB Website',
	hide: true,
	smallImages: [{
		id: 1,
		alt: "react",
		src: require('@/assets/images/technology/react.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "api",
		src: require('@/assets/images/technology/api.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "bootstrap",
		src: require('@/assets/images/technology/bootstrap.png'),
		width: '60px',
	},
	],
	category: 'React App',
	outer_link: 'https://popular-moviedb.vercel.app/',
	img: require('@/assets/images/movie-db/0.png'),
	link: 'movie-db',
	singleProjectHeader: {
		singleProjectTitle: t("Popular Movie DB Website"),
		singleProjectDate: "09 august 2023",
		singleProjectTag: t("Frontend"),
	},
	projectImages: [{
		id: 0,
		img: require("@/assets/images/movie-db/0.png"),
	},
	{
		id: 1,
		img: require("@/assets/images/movie-db/1.png"),
	},
	{
		id: 2,
		img: require("@/assets/images/movie-db/2.png"),
	},
	{
		id: 3,
		img: require("@/assets/images/movie-db/3.png"),
	},
	{
		id: 4,
		img: require("@/assets/images/movie-db/4.png"),
	},
	{
		id: 5,
		img: require("@/assets/images/movie-db/5.png"),
	},

	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("MovieDb"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("movie ranking services"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://popular-moviedb.vercel.app/",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective0"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"HTML",
				"CSS",
				"JavaScript",
				"React.js",
				"Bootstrap5",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details0A"),
		},
		{
			id: 2,
			details: t("details0B"),
		},
		{
			id: 3,
			details: t("details0C"),
		},
		{
			id: 4,
			details: t("details0D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},
},
{
	id: 1,
	title: 'Business Website',
	hide: false,
	category: 'Laravel Application',
	outer_link: 'https://tamtamtools.com/',
	img: require('@/assets/images/tamtamtools/0.png'),
	link: 'tamtamtools',
	smallImages: [{
		id: 1,
		alt: "laravel",
		src: require('@/assets/images/technology/laravel.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "jquery",
		src: require('@/assets/images/technology/jquery.png'),
		width: '60px',
	},
	{
		id: 4,
		alt: "bootstrap",
		src: require('@/assets/images/technology/bootstrap.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Tamtam Tools"),
		singleProjectDate: "02 Apr 2023",
		singleProjectTag: t(" Frontend / Backend"),
	},
	projectImages: [{
		id: 0,
		img: require("@/assets/images/tamtamtools/0.png"),
	},
	{
		id: 1,
		img: require("@/assets/images/tamtamtools/1.png"),
	},
	{
		id: 2,
		img: require("@/assets/images/tamtamtools/2.png"),
	},
	{
		id: 3,
		img: require("@/assets/images/tamtamtools/3.png"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Tamtam tools Ltd"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Campaign generation services"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://tamtamtools.com/",
		},
		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective1"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Laravel",
				"PHP",
				"JavaScript",
				"Jquery",
				"CSS",
				"HTML",
				"Bootstrap",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details1A"),
		},
		{
			id: 2,
			details: t("details1B"),
		},
		{
			id: 3,
			details: t("details1C"),
		},
		{
			id: 4,
			details: t("details1D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Instagram",
			icon: "instagram",
			url: "https://www.instagram.com/tamtamgestioncreativa",
		},
		{
			id: 2,
			name: "Facebook",
			icon: "facebook",
			url: "https://www.facebook.com/profile.php?id=100086499687468",
		},
		{
			id: 3,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://www.linkedin.com/company/tamtamtools",
		},
		],
	},
},

{
	id: 2,
	title: 'Elearn',
	hide: true,
	category: 'Wordpress site',
	outer_link: 'https://websitedemos.net/online-courses-02/',
	link: 'Elearn',
	img: require('@/assets/images/Elearn/1.webp'),
	smallImages: [{
		id: 1,
		alt: "wordpress",
		src: require('@/assets/images/technology/wordpress.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "jquery",
		src: require('@/assets/images/technology/jquery.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Elearn"),
		singleProjectDate: "16 Jan 2023",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 1,
		img: require("@/assets/images/Elearn/1.webp"),
	},
	{
		id: 2,
		img: require("@/assets/images/Elearn/2.webp"),
	},
	{
		id: 3,
		img: require("@/assets/images/Elearn/3.webp"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("eLearn"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("UI Design & Frontend Development"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://websitedemos.net/online-courses-02/",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective2"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"HTML",
				"CSS",
				"JavaScript",
				"Wordpress",
				"PHP",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details2A"),
		},
		{
			id: 2,
			details: t("details2B"),
		},
		{
			id: 3,
			details: t("details2C"),
		},
		{
			id: 4,
			details: t("details2D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},

},

{
	id: 3,
	title: 'iAuto Business Website',
	hide: false,
	category: 'Laravel Vue Application',
	outer_link: 'https://iauto.no/',
	// video: require('@/assets/videos/iauto/0.mp4'),
	img: require('@/assets/images/iauto/0.png'),
	link: 'iauto',
	smallImages: [{
		id: 1,
		alt: "laravel",
		src: require('@/assets/images/technology/laravel.png'),
		width: '60px',
	},

	{
		id: 2,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "vue",
		src: require('@/assets/images/technology/vue.png'),
		width: '60px',
	},
	{
		id: 4,
		alt: "bootstrap",
		src: require('@/assets/images/technology/bootstrap.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("iAuto Business Website"),
		singleProjectDate: "04 mai 2023",
		singleProjectTag: t(" Frontend / Backend"),
	},
	projectImages: [{
		id: 0,
		img: require("@/assets/images/iauto/0.png"),
	},
	{
		id: 1,
		img: require("@/assets/images/iauto/1.png"),
	},
	{
		id: 2,
		img: require("@/assets/images/iauto/2.png"),
	},
	{
		id: 3,
		img: require("@/assets/images/iauto/3.png"),
	},
	{
		id: 4,
		img: require("@/assets/images/iauto/4.png"),
	},
	{
		id: 5,
		img: require("@/assets/images/iauto/5.png"),
	},
	{
		id: 6,
		img: require("@/assets/images/iauto/6.png"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("iAuto"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Car store services"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://iauto.no/",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective3"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Laravel",
				"Vue.js",
				"PHP",
				"Bootstrap",
				"HTML",
				"CSS",
				"JavaScript",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details3A"),
		},
		{
			id: 2,
			details: t("details3B"),
		},
		{
			id: 3,
			details: t("details3C"),
		},
		{
			id: 4,
			details: t("details3D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},
},
{
	id: 4,
	title: 'Business',
	hide: true,
	category: 'Wordpress site',
	outer_link: 'https://websitedemos.net/kathryn-ebook-author-02/',
	link: 'Business',
	img: require('@/assets/images/Business/1.webp'),
	smallImages: [{
		id: 1,
		alt: "wordpress",
		src: require('@/assets/images/technology/wordpress.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "jquery",
		src: require('@/assets/images/technology/jquery.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Business"),
		singleProjectDate: "18 Sep 2017",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 1,
		img: require("@/assets/images/Business/1.webp"),
	},
	{
		id: 2,
		img: require("@/assets/images/Business/2.webp"),
	},
	{
		id: 3,
		img: require("@/assets/images/Business/3.webp"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("eBook"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("UI Design & Frontend Development"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://websitedemos.net/kathryn-ebook-author-02/",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective4"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Wordpress",
				"PHP",
				"HTML",
				"CSS",
				"JavaScript",
				"jQuery",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details4A"),
		},
		{
			id: 2,
			details: t("details4B"),
		},
		{
			id: 3,
			details: t("details4C"),
		},
		{
			id: 4,
			details: t("details4D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},

},
{
	id: 5,
	title: 'Blog',
	category: 'Vue App',
	hide: false,
	outer_link: 'https://saadaahnews.com/',
	link: 'Blog',
	img: require('@/assets/images/Blog/1.webp'),
	smallImages: [{
		id: 1,
		alt: "vue",
		src: require('@/assets/images/technology/vue.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "api",
		src: require('@/assets/images/technology/api.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Blog"),
		singleProjectDate: "08 Mar 2020",
		singleProjectTag: t(" Frontend / Backend"),
	},
	projectImages: [{
		id: 1,
		img: require("@/assets/images/Blog/1.webp"),
	},
	{
		id: 2,
		img: require("@/assets/images/Blog/2.webp"),
	},
	{
		id: 3,
		img: require("@/assets/images/Blog/3.webp"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Saadaah News"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Blog Services"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://saadaahnews.com/",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective5"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Vue.js",
				"JavaScript",
				"TailwindCSS",
				"HTML",
				"CSS",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details5A"),
		},
		{
			id: 2,
			details: t("details5B"),
		},
		{
			id: 3,
			details: t("details5C"),
		},
		{
			id: 4,
			details: t("details5D"),
		},
		{
			id: 4,
			details: t("details5E"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},

},
{
	id: 6,
	title: 'Clothes Store',
	hide: false,
	category: 'Wordpress site',
	outer_link: 'https://websitedemos.net/brandstore-02/',
	link: 'ClothesStore',
	img: require('@/assets/images/ClothesStore/1.webp'),
	smallImages: [{
		id: 1,
		alt: "wordpress",
		src: require('@/assets/images/technology/wordpress.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "jquery",
		src: require('@/assets/images/technology/jquery.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Clothes Store"),
		singleProjectDate: "24 Sep 2022",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 1,
		img: require("@/assets/images/ClothesStore/1.webp"),
	},
	{
		id: 2,
		img: require("@/assets/images/ClothesStore/2.webp"),
	},
	{
		id: 3,
		img: require("@/assets/images/ClothesStore/3.webp"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Clothes Store"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("UI Design & Frontend Development"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://websitedemos.net/brandstore-02/",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective6"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Wordpress",
				"PHP",
				"HTML",
				"CSS",
				"JavaScript",
				"jQuery",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details6A"),
		},
		{
			id: 2,
			details: t("details6B"),
		},
		{
			id: 3,
			details: t("details6C"),
		},
		{
			id: 4,
			details: t("detailsCD"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},

},
{
	id: 7,
	title: 'Portfolio',
	hide: true,
	category: 'Vue App',
	outer_link: 'https://webpress-annaba.netlify.app/',
	link: 'Portfolio',
	img: require('@/assets/images/Portfolio/1.webp'),
	smallImages: [{
		id: 1,
		alt: "vue",
		src: require('@/assets/images/technology/vue.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "tailwind",
		src: require('@/assets/images/technology/tailwind.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Portfolio"),
		singleProjectDate: "20 Mar 2023",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 1,
		img: require("@/assets/images/Portfolio/1.webp"),
	},
	{
		id: 2,
		img: require("@/assets/images/Portfolio/2.webp"),
	},
	{
		id: 3,
		img: require("@/assets/images/Portfolio/3.webp"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Portfolio"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("UI Design & Frontend Development"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://webpress-annaba.netlify.app/",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective7"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Vue.js",
				"HTML",
				"CSS",
				"JavaScript",
				"TailwindCSS",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details7A"),
		},
		{
			id: 2,
			details: t("details7B"),
		},
		{
			id: 3,
			details: t("details7C"),
		},
		{
			id: 4,
			details: t("details7D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},

},

{
	id: 8,
	title: 'Image Generator OpenAI',
	hide: true,
	category: 'Vue App',
	outer_link: '#',
	img: require('@/assets/images/ImageGeneratorOpenAI/1.png'),
	link: 'ai-image-generation',
	smallImages: [{
		id: 1,
		alt: "vue",
		src: require('@/assets/images/technology/vue.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "api",
		src: require('@/assets/images/technology/api.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "bootstrap",
		src: require('@/assets/images/technology/bootstrap.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Image Generator OpenAI"),
		singleProjectDate: "02 Apr 2023",
		singleProjectTag: t("Frontend / API"),
	},
	projectImages: [{
		id: 1,
		img: require("@/assets/images/ImageGeneratorOpenAI/1.png"),
	},
	{
		id: 2,
		img: require("@/assets/images/ImageGeneratorOpenAI/2.png"),
	},
	{
		id: 3,
		img: require("@/assets/images/ImageGeneratorOpenAI/3.png"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Image Generator"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("AI image generation"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "#",
		},
		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective8"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Vue.js",
				"API",
				"JavaScript",
				"TailwindCSS",
				"CSS",
				"HTML",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details8A"),
		},
		{
			id: 2,
			details: t("details8B"),
		},
		{
			id: 3,
			details: t("details8C"),
		},
		{
			id: 4,
			details: t("details8D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},
},
{
	id: 9,
	title: 'Laravel Vue Ecommerce Phone',
	hide: false,
	category: 'Laravel Vue Application',
	outer_link: '#',
	link: 'LaravelVueEcommercePhone',
	img: require('@/assets/images/LaravelVueEcommercePhone/A.png'),
	smallImages: [{
		id: 1,
		alt: "laravel",
		src: require('@/assets/images/technology/laravel.png'),
		width: '60px',
	},

	{
		id: 2,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "vue",
		src: require('@/assets/images/technology/vue.png'),
		width: '60px',
	},
	{
		id: 4,
		alt: "bootstrap",
		src: require('@/assets/images/technology/bootstrap.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Laravel Vue Ecommerce Phone"),
		singleProjectDate: "26 Jul 2021",
		singleProjectTag: t(" Frontend / Backend"),
	},
	projectImages: [{
		id: 0,
		img: require("@/assets/images/LaravelVueEcommercePhone/A.png"),
	},
	{
		id: 1,
		img: require("@/assets/images/LaravelVueEcommercePhone/A (1).png"),
	},
	{
		id: 2,
		img: require("@/assets/images/LaravelVueEcommercePhone/A (2).png"),
	},
	{
		id: 3,
		img: require("@/assets/images/LaravelVueEcommercePhone/A (3).png"),
	},
	{
		id: 4,
		img: require("@/assets/images/LaravelVueEcommercePhone/A (4).png"),
	},
	{
		id: 5,
		img: require("@/assets/images/LaravelVueEcommercePhone/A (5).png"),
	},
	{
		id: 6,
		img: require("@/assets/images/LaravelVueEcommercePhone/A (6).png"),
	},
	{
		id: 7,
		img: require("@/assets/images/LaravelVueEcommercePhone/A (7).png"),
	},
	{
		id: 1,
		img: require("@/assets/images/LaravelVueEcommercePhone/B (1).png"),
	},
	{
		id: 2,
		img: require("@/assets/images/LaravelVueEcommercePhone/B (2).png"),
	},
	{
		id: 3,
		img: require("@/assets/images/LaravelVueEcommercePhone/B (3).png"),
	},
	{
		id: 4,
		img: require("@/assets/images/LaravelVueEcommercePhone/B (4).png"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("eCommerce phone Store"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Phone store services"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "#",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective9"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Laravel",
				"Vue.js",
				"CSS",
				"JavaScript",
				"Bootstrap",
				"HTML",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details9A"),
		},
		{
			id: 2,
			details: t("details9B"),
		},
		{
			id: 3,
			details: t("details9C"),
		},
		{
			id: 4,
			details: t("details9D"),
		},
		{
			id: 5,
			details: t("details9E"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},
},

{
	id: 10,
	title: 'Phones Store',
	hide: false,
	category: 'Wordpress site',
	outer_link: '#',
	link: 'PhonesStore',
	img: require('@/assets/images/PhonesStore/1.webp'),
	smallImages: [{
		id: 1,
		alt: "wordpress",
		src: require('@/assets/images/technology/wordpress.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "jquery",
		src: require('@/assets/images/technology/jquery.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Phones Store"),
		singleProjectDate: "26 Jul 2021",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 1,
		img: require("@/assets/images/PhonesStore/1.webp"),
	},
	{
		id: 2,
		img: require("@/assets/images/PhonesStore/2.webp"),
	},
	{
		id: 3,
		img: require("@/assets/images/PhonesStore/3.webp"),
	},
	{
		id: 4,
		img: require("@/assets/images/PhonesStore/4.webp"),
	},
	{
		id: 5,
		img: require("@/assets/images/PhonesStore/5.webp"),
	},
	{
		id: 6,
		img: require("@/assets/images/PhonesStore/6.webp"),
	},
	{
		id: 6,
		img: require("@/assets/images/PhonesStore/7.webp"),
	},
	{
		id: 6,
		img: require("@/assets/images/PhonesStore/8.webp"),
	},
	{
		id: 6,
		img: require("@/assets/images/PhonesStore/9.webp"),
	},
	{
		id: 6,
		img: require("@/assets/images/PhonesStore/10.webp"),
	},
	{
		id: 6,
		img: require("@/assets/images/PhonesStore/11.webp"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("eCommerce phone Store"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Phone store services"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "#",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective10"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Wordpress",
				"PHP",
				"jQuery",
				"HTML",
				"CSS",
				"JavaScript",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details10A"),
		},
		{
			id: 2,
			details: t("details10B"),
		},
		{
			id: 3,
			details: t("details10C"),
		},
		{
			id: 4,
			details: t("details10D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},

},
{
	id: 11,
	title: 'Landing Page',
	hide: false,
	category: 'React App',
	outer_link: 'https://landing-page-next-react.netlify.app',
	link: 'landing-page',
	img: require('@/assets/images/react-landing/0.png'),
	smallImages: [{
		id: 1,
		alt: "next",
		src: require('@/assets/images/technology/next.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "react",
		src: require('@/assets/images/technology/react.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Landing Page"),
		singleProjectDate: "26 Aug 2023",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 0,
		img: require("@/assets/images/react-landing/0.png"),
	},
	{
		id: 1,
		img: require("@/assets/images/react-landing/1.png"),
	},
	{
		id: 2,
		img: require("@/assets/images/react-landing/2.png"),
	},
	{
		id: 3,
		img: require("@/assets/images/react-landing/3.png"),
	},
	{
		id: 4,
		img: require("@/assets/images/react-landing/4.png"),
	},
	{
		id: 5,
		img: require("@/assets/images/react-landing/5.png"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Landing Page"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Landing Page"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://landing-page-next-react.netlify.app/",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective11"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"React",
				"Next",
				"HTML",
				"CSS",
				"JavaScript",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details11A"),
		},
		{
			id: 2,
			details: t("details11B"),
		},
		{
			id: 3,
			details: t("details11C"),
		},
		{
			id: 4,
			details: t("details11D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		{
			id: 5,
			name: "Youtube",
			icon: "youtube",
			url: "https://www.youtube.com/",
		},
		],
	},

},
{
	id: 12,
	title: 'Bash Gate Landing Page',
	hide: false,
	category: 'React App',
	outer_link: 'https://infogate.sa',
	link: 'infogate',
	img: require('@/assets/images/infogate/0.png'),
	smallImages: [{
		id: 1,
		alt: "react",
		src: require('@/assets/images/technology/react.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "laravel",
		src: require('@/assets/images/technology/laravel.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 4,
		alt: "bootstrap",
		src: require('@/assets/images/technology/bootstrap.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Bash Gate"),
		singleProjectDate: "31 Dec 2023",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 0,
		img: require("@/assets/images/infogate/0.png"),
	},
	{
		id: 1,
		img: require("@/assets/images/infogate/1.png"),
	},
	{
		id: 2,
		img: require("@/assets/images/infogate/2.png"),
	},
	{
		id: 3,
		img: require("@/assets/images/infogate/3.png"),
	},
	{
		id: 4,
		img: require("@/assets/images/infogate/4.png"),
	},
	{
		id: 5,
		img: require("@/assets/images/infogate/5.png"),
	},
	{
		id: 6,
		img: require("@/assets/images/infogate/6.png"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Bash Gate"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Online Services"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://infogate.sa",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective12"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"React",
				"Laravel",
				"PHP",
				"Bootstrap",
				"JavaScript",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details12A"),
		},
		{
			id: 2,
			details: t("details12B"),
		},
		{
			id: 3,
			details: t("details12C"),
		},
		{
			id: 4,
			details: t("details12D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/BashGateSa",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://www.instagram.com/bashgatesa",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://www.facebook.com/bashgatesa",
		},
		{
			id: 4,
			name: "Whatsapp",
			icon: "phone",
			url: "https://api.whatsapp.com/send?phone=966503003675",
		},
		],
	},

},
{
	id: 13,
	title: 'Stockifly - Stock management system',
	hide: true,
	category: 'Laravel Vue Application',
	outer_link: '#',
	link: 'stockifly',
	img: require('@/assets/images/stockifly/0.png'),
	smallImages: [{
		id: 1,
		alt: "laravel",
		src: require('@/assets/images/technology/laravel.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "vue",
		src: require('@/assets/images/technology/vue.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 4,
		alt: "bootstrap",
		src: require('@/assets/images/technology/bootstrap.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Stockifly"),
		singleProjectDate: "16 Oct 2022",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 0,
		img: require("@/assets/images/stockifly/0.png"),
	},
	{
		id: 1,
		img: require("@/assets/images/stockifly/1.png"),
	},
	{
		id: 2,
		img: require("@/assets/images/stockifly/2.png"),
	},
	{
		id: 3,
		img: require("@/assets/images/stockifly/3.png"),
	},
	{
		id: 4,
		img: require("@/assets/images/stockifly/4.png"),
	},
	{
		id: 5,
		img: require("@/assets/images/stockifly/5.png"),
	}
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Stockifly"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Online Services"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "#",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective13"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Laravel",
				"Vue",
				"PHP",
				"Bootstrap",
				"JavaScript",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details13A"),
		},
		{
			id: 2,
			details: t("details13B"),
		},
		{
			id: 3,
			details: t("details13C"),
		},
		{
			id: 4,
			details: t("details13D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://www.instagram.com",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://www.facebook.com",
		},
		{
			id: 4,
			name: "Whatsapp",
			icon: "phone",
			url: "https://api.whatsapp.com/",
		},
		],
	},

},
{
	id: 14,
	title: 'Roxboro - Content Management System',
	hide: false,
	category: 'Laravel Application',
	outer_link: 'https://roxboro.ca',
	link: 'roxboro',
	img: require('@/assets/images/roxboro/0.png'),
	smallImages: [{
		id: 1,
		alt: "laravel",
		src: require('@/assets/images/technology/laravel.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "bootstrap",
		src: require('@/assets/images/technology/bootstrap.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Roxboro"),
		singleProjectDate: "03 Mar 2024",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 0,
		img: require("@/assets/images/roxboro/0.png"),
	},
	{
		id: 1,
		img: require("@/assets/images/roxboro/1.png"),
	},
	{
		id: 2,
		img: require("@/assets/images/roxboro/2.png"),
	},
	{
		id: 3,
		img: require("@/assets/images/roxboro/3.png"),
	},
	{
		id: 4,
		img: require("@/assets/images/roxboro/4.png"),
	},
	{
		id: 5,
		img: require("@/assets/images/roxboro/5.png"),
	},
	{
		id: 6,
		img: require("@/assets/images/roxboro/6.png"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Roxboro"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Online Services"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://roxboro.ca",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective14"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Laravel",
				"PHP",
				"Bootstrap",
				"JavaScript",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details14A"),
		},
		{
			id: 2,
			details: t("details14B"),
		},
		{
			id: 3,
			details: t("details14C"),
		},
		{
			id: 4,
			details: t("details14D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://www.instagram.com",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://www.facebook.com",
		},
		{
			id: 4,
			name: "Whatsapp",
			icon: "phone",
			url: "https://api.whatsapp.com/",
		},
		],
	},

},
{
	id: 15,
	title: 'Stock management SaaS Garage',
	hide: false,
	category: 'Laravel Application',
	outer_link: '#',
	link: 'garage',
	img: require('@/assets/images/garage/0.png'),
	smallImages: [{
		id: 1,
		alt: "laravel",
		src: require('@/assets/images/technology/laravel.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "bootstrap",
		src: require('@/assets/images/technology/bootstrap.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Garage"),
		singleProjectDate: "05 Dec 2023",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 0,
		img: require("@/assets/images/garage/0.png"),
	},
	{
		id: 1,
		img: require("@/assets/images/garage/1.png"),
	},
	{
		id: 2,
		img: require("@/assets/images/garage/2.png"),
	},
	{
		id: 3,
		img: require("@/assets/images/garage/3.png"),
	},
	{
		id: 4,
		img: require("@/assets/images/garage/4.png"),
	},
	{
		id: 5,
		img: require("@/assets/images/garage/5.png"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Garage"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Online Services"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "#",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective15"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Laravel",
				"PHP",
				"Bootstrap",
				"JavaScript",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details15A"),
		},
		{
			id: 2,
			details: t("details15B"),
		},
		{
			id: 3,
			details: t("details15C"),
		},
		{
			id: 4,
			details: t("details15D"),
		},
		{
			id: 5,
			details: t("details15E"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://www.instagram.com",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://www.facebook.com",
		},
		{
			id: 4,
			name: "Whatsapp",
			icon: "phone",
			url: "https://api.whatsapp.com/",
		},
		],
	},

},
{
	id: 16,
	title: 'Alphanex',
	hide: false,
	category: 'Wordpress site',
	outer_link: 'https://alphanex.fr/',
	link: 'Alphanex',
	img: require('@/assets/images/alphanex/0.webp'),
	smallImages: [{
		id: 1,
		alt: "wordpress",
		src: require('@/assets/images/technology/wordpress.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "jquery",
		src: require('@/assets/images/technology/jquery.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Alphanex"),
		singleProjectDate: "16 Jan 2023",
		singleProjectTag: t("UI / Frontend"),
	},
	projectImages: [{
		id: 1,
		img: require("@/assets/images/alphanex/1.webp"),
	},
	{
		id: 2,
		img: require("@/assets/images/alphanex/2.webp"),
	},
	{
		id: 3,
		img: require("@/assets/images/alphanex/3.webp"),
	},
	{
		id: 4,
		img: require("@/assets/images/alphanex/4.webp"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("Alphanex"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("UI Design & Frontend Development"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "https://alphanex.fr/",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective16"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"Wordpress",
				"CSS",
				"JavaScript",
				"PHP",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details16A"),
		},
		{
			id: 2,
			details: t("details16B"),
		},
		{
			id: 3,
			details: t("details16C"),
		},
		{
			id: 4,
			details: t("details16D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		],
	},

},
{
	id: 17,
	title: 'Event Management',
	hide: false,
	category: 'Laravel React Web App',
	outer_link: '#',
	link: 'event-management',
	img: require('@/assets/images/event-management/0.png'),
	smallImages: [{
		id: 1,
		alt: "react",
		src: require('@/assets/images/technology/react.png'),
		width: '60px',
	},
	{
		id: 2,
		alt: "laravel",
		src: require('@/assets/images/technology/laravel.png'),
		width: '60px',
	},
	{
		id: 3,
		alt: "php",
		src: require('@/assets/images/technology/php.png'),
		width: '60px',
	},
	{
		id: 4,
		alt: "tailwind",
		src: require('@/assets/images/technology/tailwind.png'),
		width: '60px',
	},
	],
	singleProjectHeader: {
		singleProjectTitle: t("Event Management"),
		singleProjectDate: "22 Feb 2025",
		singleProjectTag: t("Backend / Frontend"),
	},
	projectImages: [{
		id: 1,
		img: require("@/assets/images/event-management/1.png"),
	},
	{
		id: 2,
		img: require("@/assets/images/event-management/2.png"),
	},
	{
		id: 3,
		img: require("@/assets/images/event-management/3.png"),
	},
	{
		id: 4,
		img: require("@/assets/images/event-management/4.png"),
	},
	{
		id: 5,
		img: require("@/assets/images/event-management/5.png"),
	},
	{
		id: 6,
		img: require("@/assets/images/event-management/6.png"),
	},
	{
		id: 7,
		img: require("@/assets/images/event-management/7.png"),
	},
	{
		id: 8,
		img: require("@/assets/images/event-management/8.png"),
	},
	{
		id: 9,
		img: require("@/assets/images/event-management/9.png"),
	},
	{
		id: 10,
		img: require("@/assets/images/event-management/10.png"),
	},
	{
		id: 11,
		img: require("@/assets/images/event-management/11.png"),
	},
	{
		id: 12,
		img: require("@/assets/images/event-management/12.png"),
	},
	{
		id: 13,
		img: require("@/assets/images/event-management/13.png"),
	},
	{
		id: 14,
		img: require("@/assets/images/event-management/14.png"),
	},
	{
		id: 15,
		img: require("@/assets/images/event-management/15.png"),
	},
	],
	projectInfo: {
		clientHeading: t("About Client"),
		companyInfos: [{
			id: 1,
			title: t("Name"),
			details: t("NewDay"),
		},
		{
			id: 2,
			title: t("Services"),
			details: t("Backend & Frontend Development"),
		},
		{
			id: 3,
			title: t("Website"),
			details: "#",
		},

		],
		objectivesHeading: t("Objective"),
		objectivesDetails: t("Objective17"),
		technologies: [{
			title: t("Tools & Technologies"),
			techs: [
				"React",
				"Laravel",
				"Tailwind CSS",
				"PHP",
			],
		},],
		projectDetailsHeading: t("Challenge"),
		projectDetails: [{
			id: 1,
			details: t("details17A"),
		},
		{
			id: 2,
			details: t("details17B"),
		},
		{
			id: 3,
			details: t("details17C"),
		},
		{
			id: 4,
			details: t("details17D"),
		},
		],
		socialSharingsHeading: t("Share This"),
		socialSharings: [{
			id: 1,
			name: "Twitter",
			icon: "twitter",
			url: "https://twitter.com/",
		},
		{
			id: 2,
			name: "Instagram",
			icon: "instagram",
			url: "https://instagram.com/",
		},
		{
			id: 3,
			name: "Facebook",
			icon: "facebook",
			url: "https://facebook.com/",
		},
		{
			id: 4,
			name: "LinkedIn",
			icon: "linkedin",
			url: "https://linkedin.com/",
		},
		],
	},

},
];

export default projects;