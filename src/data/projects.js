import i18n from '../i18n';
const { t } = i18n.global;

const projects = [
	{
		id: 0,
		title: 'Laravel Expense Manager',
		category: 'Laravel Application',
		link: 'LaravelExpenseManager',
		img: require('@/assets/images/LaravelExpenseManager/1.webp'),
		singleProjectHeader: {
			singleProjectTitle: t("Laravel Expense Manager"),
			singleProjectDate: "26 Jul 2021",
			singleProjectTag: t("UI / Frontend"),
		},
		projectImages: [
			{
				id: 1,
				title: "Project Image",
				img: require("@/assets/images/LaravelExpenseManager/1.webp"),
			},
			{
				id: 2,
				title: "Project Image",
				img: require("@/assets/images/LaravelExpenseManager/2.webp"),
			},
			{
				id: 3,
				title: "Project Image",
				img: require("@/assets/images/LaravelExpenseManager/3.webp"),
			},
		],
		projectInfo: {
			clientHeading: t("About Client"),
			companyInfos: [
				{
					id: 1,
					title: t("Name"),
					details: t("Company Ltd"),
				},
				{
					id: 2,
					title: t("Services"),
					details: t("Phone store services"),
				},
				{
					id: 3,
					title: t("Website"),
					details: "https://company.com",
				},
				{
					id: 4,
					title: t("Phone"),
					details: "555 8888 888",
				},
			],
			objectivesHeading: t("Objective"),
			objectivesDetails:t("Objective1"),
					technologies: [
				{
					title: t("Tools & Technologies"),
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Vue.js",
						"TailwindCSS",
						"AdobeXD",
					],
				},
			],
			projectDetailsHeading: t("Challenge"),
			projectDetails: [
				{
					id: 1,
					details: t("details1"),
				},
				{
					id: 2,
					details: t("details2"),
				},
				{
					id: 3,
					details: t("details3"),
				},
				{
					id: 4,
					details: t("details4"),
				},
			],
			socialSharingsHeading: t("Share This"),
			socialSharings: [
				{
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
		title: 'Laravel Voting System',
		category: 'Laravel Application',
		img: require('@/assets/images/LaravelVotingSystem/1.webp'),
		link: 'LaravelVotingSystem',
		singleProjectHeader: {
			singleProjectTitle: t("Laravel Voting System"),
			singleProjectDate: "26 Jul 2021",
			singleProjectTag: t("UI / Frontend"),
		},
		projectImages: [
			{
				id: 1,
				title: "Project Image",
				img: require("@/assets/images/LaravelVotingSystem/1.webp"),
			},
			{
				id: 2,
				title: "Project Image",
				img: require("@/assets/images/LaravelVotingSystem/2.webp"),
			},
			{
				id: 3,
				title: "Project Image",
				img: require("@/assets/images/LaravelVotingSystem/3.webp"),
			},
			{
				id: 4,
				title: "Project Image",
				img: require("@/assets/images/LaravelVotingSystem/4.webp"),
			},
		],
		projectInfo: {
			clientHeading: t("About Client"),
			companyInfos: [
				{
					id: 1,
					title: t("Name"),
					details: t("Company Ltd"),
				},
				{
					id: 2,
					title: t("Services"),
					details: t("Phone store services"),
				},
				{
					id: 3,
					title: t("Website"),
					details: "https://company.com",
				},
				{
					id: 4,
					title: t("Phone"),
					details: "555 8888 888",
				},
			],
			objectivesHeading: t("Objective"),
			objectivesDetails:t("Objective1"),
					technologies: [
				{
					title: t("Tools & Technologies"),
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Vue.js",
						"TailwindCSS",
						"AdobeXD",
					],
				},
			],
			projectDetailsHeading: t("Challenge"),
			projectDetails: [
				{
					id: 1,
					details: t("details1"),
				},
				{
					id: 2,
					details: t("details2"),
				},
				{
					id: 3,
					details: t("details3"),
				},
				{
					id: 4,
					details: t("details4"),
				},
			],
			socialSharingsHeading: t("Share This"),
			socialSharings: [
				{
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
		id: 2,
		title: 'Laravel Vue Ecommerce Phone',
		category: 'Laravel Vue Application',
		link: 'LaravelVueEcommercePhone',
		img: require('@/assets/images/ui-project-2.jpg'),
		singleProjectHeader: {
			singleProjectTitle: t("Laravel Vue Ecommerce Phone"),
			singleProjectDate: "26 Jul 2021",
			singleProjectTag: t("UI / Frontend"),
		},
		projectImages: [
			{
				id: 1,
				title: "Project Image",
				img: require("@/assets/images/LaravelVueEcommercePhone/1.webp"),
			},
			{
				id: 2,
				title: "Project Image",
				img: require("@/assets/images/LaravelVueEcommercePhone/2.webp"),
			},
			{
				id: 3,
				title: "Project Image",
				img: require("@/assets/images/LaravelVueEcommercePhone/3.webp"),
			},
			{
				id: 4,
				title: "Project Image",
				img: require("@/assets/images/LaravelVueEcommercePhone/4.webp"),
			},
			{
				id: 5,
				title: "Project Image",
				img: require("@/assets/images/LaravelVueEcommercePhone/5.webp"),
			},
			{
				id: 6,
				title: "Project Image",
				img: require("@/assets/images/LaravelVueEcommercePhone/6.webp"),
			},
		],
		projectInfo: {
			clientHeading: t("About Client"),
			companyInfos: [
				{
					id: 1,
					title: t("Name"),
					details: t("Company Ltd"),
				},
				{
					id: 2,
					title: t("Services"),
					details: t("Phone store services"),
				},
				{
					id: 3,
					title: t("Website"),
					details: "https://company.com",
				},
				{
					id: 4,
					title: t("Phone"),
					details: "555 8888 888",
				},
			],
			objectivesHeading: t("Objective"),
			objectivesDetails:t("Objective1"),
					technologies: [
				{
					title: t("Tools & Technologies"),
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Vue.js",
						"TailwindCSS",
						"AdobeXD",
					],
				},
			],
			projectDetailsHeading: t("Challenge"),
			projectDetails: [
				{
					id: 1,
					details: t("details1"),
				},
				{
					id: 2,
					details: t("details2"),
				},
				{
					id: 3,
					details: t("details3"),
				},
				{
					id: 4,
					details: t("details4"),
				},
			],
			socialSharingsHeading: t("Share This"),
			socialSharings: [
				{
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
		title: 'Phones Store',
		category: 'Wordpress site',
		link: 'PhonesStore',
		img: require('@/assets/images/PhonesStore/1.webp'),
		singleProjectHeader: {
			singleProjectTitle: t("Phones Store"),
			singleProjectDate: "26 Jul 2021",
			singleProjectTag: t("UI / Frontend"),
		},
		projectImages: [
			{
				id: 1,
				title: "Project Image",
				img: require("@/assets/images/PhonesStore/1.webp"),
			},
			{
				id: 2,
				title: "Project Image",
				img: require("@/assets/images/PhonesStore/2.webp"),
			},
			{
				id: 3,
				title: "Project Image",
				img: require("@/assets/images/PhonesStore/3.webp"),
			},
			{
				id: 4,
				title: "Project Image",
				img: require("@/assets/images/PhonesStore/4.webp"),
			},
			{
				id: 5,
				title: "Project Image",
				img: require("@/assets/images/PhonesStore/5.webp"),
			},
			{
				id: 6,
				title: "Project Image",
				img: require("@/assets/images/PhonesStore/6.webp"),
			},
		],
		projectInfo: {
			clientHeading: t("About Client"),
			companyInfos: [
				{
					id: 1,
					title: t("Name"),
					details: t("Company Ltd"),
				},
				{
					id: 2,
					title: t("Services"),
					details: t("Phone store services"),
				},
				{
					id: 3,
					title: t("Website"),
					details: "https://company.com",
				},
				{
					id: 4,
					title: t("Phone"),
					details: "555 8888 888",
				},
			],
			objectivesHeading: t("Objective"),
			objectivesDetails:t("Objective1"),
					technologies: [
				{
					title: t("Tools & Technologies"),
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Vue.js",
						"TailwindCSS",
						"AdobeXD",
					],
				},
			],
			projectDetailsHeading: t("Challenge"),
			projectDetails: [
				{
					id: 1,
					details: t("details1"),
				},
				{
					id: 2,
					details: t("details2"),
				},
				{
					id: 3,
					details: t("details3"),
				},
				{
					id: 4,
					details: t("details4"),
				},
			],
			socialSharingsHeading: t("Share This"),
			socialSharings: [
				{
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
		//relatedProject,
	},
	{
		id: 4,
		title: 'Business',
		category: 'Wordpress site',
		link: 'Business',
		img: require('@/assets/images/Business/1.webp'),
		singleProjectHeader: {
			singleProjectTitle: t("Business"),
			singleProjectDate: "18 Sep 2017",
			singleProjectTag: t("UI / Frontend"),
		},
		projectImages: [
			{
				id: 1,
				title: "Project Image",
				img: require("@/assets/images/Business/1.webp"),
			},
			{
				id: 2,
				title: "Project Image",
				img: require("@/assets/images/Business/2.webp"),
			},
			{
				id: 3,
				title: "Project Image",
				img: require("@/assets/images/Business/3.webp"),
			},
		],
		projectInfo: {
			clientHeading: t("About Client"),
			companyInfos: [
				{
					id: 1,
					title: t("Name"),
					details: t("Company Ltd"),
				},
				{
					id: 2,
					title: t("Services"),
					details: t("UI Design & Frontend Development"),
				},
				{
					id: 3,
					title: t("Website"),
					details: "https://company.com",
				},
				{
					id: 4,
					title: t("Phone"),
					details: "555 8888 888",
				},
			],
			objectivesHeading: t("Objective"),
			objectivesDetails:t("Objective1"),
					technologies: [
				{
					title: t("Tools & Technologies"),
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Vue.js",
						"TailwindCSS",
						"AdobeXD",
					],
				},
			],
			projectDetailsHeading: t("Challenge"),
			projectDetails: [
				{
					id: 1,
					details: t("details1"),
				},
				{
					id: 2,
					details: t("details2"),
				},
				{
					id: 3,
					details: t("details3"),
				},
				{
					id: 4,
					details: t("details4"),
				},
			],
			socialSharingsHeading: t("Share This"),
			socialSharings: [
				{
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
		//relatedProject,
	},
	{
		id: 5,
		title: 'Blog',
		category: 'Vue App',
		link: 'Blog',
		img: require('@/assets/images/Blog/1.webp'),
		singleProjectHeader: {
			singleProjectTitle: t("Blog"),
			singleProjectDate: "08 Mar 2020",
			singleProjectTag: t("UI / Frontend"),
		},
		projectImages: [
			{
				id: 1,
				title: "Project Image",
				img: require("@/assets/images/Blog/1.webp"),
			},
			{
				id: 2,
				title: "Project Image",
				img: require("@/assets/images/Blog/2.webp"),
			},
			{
				id: 3,
				title: "Project Image",
				img: require("@/assets/images/Blog/3.webp"),
			},
		],
		projectInfo: {
			clientHeading: t("About Client"),
			companyInfos: [
				{
					id: 1,
					title: t("Name"),
					details: t("Company Ltd"),
				},
				{
					id: 2,
					title: t("Services"),
					details: t("Blog Services"),
				},
				{
					id: 3,
					title: t("Website"),
					details: "https://company.com",
				},
				{
					id: 4,
					title: t("Phone"),
					details: "555 8888 888",
				},
			],
			objectivesHeading: t("Objective"),
			objectivesDetails: t("Objective1"),
			technologies: [
				{
					title: t("Tools & Technologies"),
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Vue.js",
						"TailwindCSS",
						"AdobeXD",
					],
				},
			],
			projectDetailsHeading: t("Challenge"),
			projectDetails: [
				{
					id: 1,
					details: t("details1"),
				},
				{
					id: 2,
					details: t("details2"),
				},
				{
					id: 3,
					details: t("details3"),
				},
				{
					id: 4,
					details: t("details4"),
				},
			],
			socialSharingsHeading: t("Share This"),
			socialSharings: [
				{
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
		//relatedProject,
	},
	{
		id: 6,
		title: 'Clothes Store',
		category: 'Wordpress site',
		link: 'ClothesStore',
		img: require('@/assets/images/ClothesStore/1.webp'),
		singleProjectHeader: {
			singleProjectTitle: t("Clothes Store"),
			singleProjectDate: "24 Sep 2022",
			singleProjectTag: t("UI / Frontend"),
		},
		projectImages: [
			{
				id: 1,
				title: "Project Image",
				img: require("@/assets/images/ClothesStore/1.webp"),
			},
			{
				id: 2,
				title: "Project Image",
				img: require("@/assets/images/ClothesStore/2.webp"),
			},
			{
				id: 3,
				title: "Project Image",
				img: require("@/assets/images/ClothesStore/3.webp"),
			},
		],
		projectInfo: {
			clientHeading: t("About Client"),
			companyInfos: [
				{
					id: 1,
					title: t("Name"),
					details: t("Company Ltd"),
				},
				{
					id: 2,
					title: t("Services"),
					details: t("UI Design & Frontend Development"),
				},
				{
					id: 3,
					title: t("Website"),
					details: "https://company.com",
				},
				{
					id: 4,
					title: t("Phone"),
					details: "555 8888 888",
				},
			],
			objectivesHeading: t("Objective"),
			objectivesDetails:t("Objective1"),
					technologies: [
				{
					title: t("Tools & Technologies"),
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Vue.js",
						"TailwindCSS",
						"AdobeXD",
					],
				},
			],
			projectDetailsHeading: t("Challenge"),
			projectDetails: [
				{
					id: 1,
					details: t("details1"),
				},
				{
					id: 2,
					details: t("details2"),
				},
				{
					id: 3,
					details: t("details3"),
				},
				{
					id: 4,
					details: t("details4"),
				},
			],
			socialSharingsHeading: t("Share This"),
			socialSharings: [
				{
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
		//relatedProject,
	},
	{
		id: 7,
		title: 'Portfolio',
		category: 'Vue App',
		link: 'Portfolio',
		img: require('@/assets/images/Portfolio/1.webp'),
		singleProjectHeader: {
			singleProjectTitle: t("Portfolio"),
			singleProjectDate: "20 Mar 2023",
			singleProjectTag: t("UI / Frontend"),
		},
		projectImages: [
			{
				id: 1,
				title: "Project Image",
				img: require("@/assets/images/Portfolio/1.webp"),
			},
			{
				id: 2,
				title: "Project Image",
				img: require("@/assets/images/Portfolio/2.webp"),
			},
			{
				id: 3,
				title: "Project Image",
				img: require("@/assets/images/Portfolio/3.webp"),
			},
		],
		projectInfo: {
			clientHeading: t("About Client"),
			companyInfos: [
				{
					id: 1,
					title: t("Name"),
					details: t("Company Ltd"),
				},
				{
					id: 2,
					title: t("Services"),
					details: t("UI Design & Frontend Development"),
				},
				{
					id: 3,
					title: t("Website"),
					details: "https://company.com",
				},
				{
					id: 4,
					title: t("Phone"),
					details: "555 8888 888",
				},
			],
			objectivesHeading: t("Objective"),
			objectivesDetails:t("Objective1"),
					technologies: [
				{
					title: t("Tools & Technologies"),
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Vue.js",
						"TailwindCSS",
						"AdobeXD",
					],
				},
			],
			projectDetailsHeading: t("Challenge"),
			projectDetails: [
				{
					id: 1,
					details: t("details1"),
				},
				{
					id: 2,
					details: t("details2"),
				},
				{
					id: 3,
					details: t("details3"),
				},
				{
					id: 4,
					details: t("details4"),
				},
			],
			socialSharingsHeading: t("Share This"),
			socialSharings: [
				{
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
		//relatedProject,
	},
	{
		id: 8,
		title: 'Elearn',
		category: 'Wordpress site',
		link: 'Elearn',
		img: require('@/assets/images/Elearn/1.webp'),
		singleProjectHeader: {
			singleProjectTitle: t("Elearn"),
			singleProjectDate: "16 Jan 2023",
			singleProjectTag: t("UI / Frontend"),
		},
		projectImages: [
			{
				id: 1,
				title: "Project Image",
				img: require("@/assets/images/Elearn/1.webp"),
			},
			{
				id: 2,
				title: "Project Image",
				img: require("@/assets/images/Elearn/2.webp"),
			},
			{
				id: 3,
				title: "Project Image",
				img: require("@/assets/images/Elearn/3.webp"),
			},
		],
		projectInfo: {
			clientHeading: t("About Client"),
			companyInfos: [
				{
					id: 1,
					title: t("Name"),
					details: t("Company Ltd"),
				},
				{
					id: 2,
					title: t("Services"),
					details: t("UI Design & Frontend Development"),
				},
				{
					id: 3,
					title: t("Website"),
					details: "https://company.com",
				},
				{
					id: 4,
					title: t("Phone"),
					details: "555 8888 888",
				},
			],
			objectivesHeading: t("Objective"),
			objectivesDetails:t("Objective1"),
					technologies: [
				{
					title: t("Tools & Technologies"),
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Vue.js",
						"TailwindCSS",
						"AdobeXD",
					],
				},
			],
			projectDetailsHeading: t("Challenge"),
			projectDetails: [
				{
					id: 1,
					details: t("details1"),
				},
				{
					id: 2,
					details: t("details2"),
				},
				{
					id: 3,
					details: t("details3"),
				},
				{
					id: 4,
					details: t("details4"),
				},
			],
			socialSharingsHeading: t("Share This"),
			socialSharings: [
				{
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
		//relatedProject,
	},
	{
		id: 9,
		title: 'Image Generator OpenAI',
		category: 'Vue App',
		img: require('@/assets/images/ImageGeneratorOpenAI/1.png'),
		link: 'LaravelVotingSystem',
		singleProjectHeader: {
			singleProjectTitle: t("Image Generator OpenAI"),
			singleProjectDate: "02 Apr 2023",
			singleProjectTag: t("UI / Frontend"),
		},
		projectImages: [
			{
				id: 1,
				title: "Project Image",
				img: require("@/assets/images/ImageGeneratorOpenAI/1.png"),
			},
			{
				id: 2,
				title: "Project Image",
				img: require("@/assets/images/ImageGeneratorOpenAI/2.png"),
			},
			{
				id: 3,
				title: "Project Image",
				img: require("@/assets/images/ImageGeneratorOpenAI/3.png"),
			},
		],
		projectInfo: {
			clientHeading: t("About Client"),
			companyInfos: [
				{
					id: 1,
					title: t("Name"),
					details: t("Company Ltd"),
				},
				{
					id: 2,
					title: t("Services"),
					details: t("Phone store services"),
				},
				{
					id: 3,
					title: t("Website"),
					details: "https://company.com",
				},
				{
					id: 4,
					title: t("Phone"),
					details: "555 8888 888",
				},
			],
			objectivesHeading: t("Objective"),
			objectivesDetails:t("Objective1"),
					technologies: [
				{
					title: t("Tools & Technologies"),
					techs: [
						"HTML",
						"CSS",
						"JavaScript",
						"Vue.js",
						"TailwindCSS",
						"AdobeXD",
					],
				},
			],
			projectDetailsHeading: t("Challenge"),
			projectDetails: [
				{
					id: 1,
					details: t("details1"),
				},
				{
					id: 2,
					details: t("details2"),
				},
				{
					id: 3,
					details: t("details3"),
				},
				{
					id: 4,
					details: t("details4"),
				},
			],
			socialSharingsHeading: t("Share This"),
			socialSharings: [
				{
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
	// {
	// 	id: 4,
	// 	title: 'Social App',
	// 	category: 'Laravel VueJS Inertia Application',
	// 	link: 'About',
	// 	img: require('@/assets/images/mobile-project-1.jpg'),
	// 	singleProjectHeader: {
	// 		singleProjectTitle: t("Phones Store"),
	// 		singleProjectDate: "26 Jul 2021",
	// 		singleProjectTag: t("UI / Frontend"),
	// 	},
	// 	projectImages: [
	// 		{
	// 			id: 1,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/1.webp"),
	// 		},
	// 		{
	// 			id: 2,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/2.webp"),
	// 		},
	// 		{
	// 			id: 3,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/3.webp"),
	// 		},
	// 		{
	// 			id: 4,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/4.webp"),
	// 		},
	// 		{
	// 			id: 5,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/5.webp"),
	// 		},
	// 		{
	// 			id: 6,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/6.webp"),
	// 		},
	// 	],
	// 	projectInfo: {
	// 		clientHeading: t("About Client"),
	// 		companyInfos: [
	// 			{
	// 				id: 1,
	// 				title: t("Name"),
	// 				details: t("Company Ltd"),
	// 			},
	// 			{
	// 				id: 2,
	// 				title: t("Services"),
	// 				details: t("Phone store services"),
	// 			},
	// 			{
	// 				id: 3,
	// 				title: t("Website"),
	// 				details: "https://company.com",
	// 			},
	// 			{
	// 				id: 4,
	// 				title: t("Phone"),
	// 				details: "555 8888 888",
	// 			},
	// 		],
	// 		objectivesHeading: t("Objective"),
	// 		objectivesDetails:t("Objective1"),
	// 				technologies: [
	// 			{
	// 				title: t("Tools & Technologies"),
	// 				techs: [
	// 					"HTML",
	// 					"CSS",
	// 					"JavaScript",
	// 					"Vue.js",
	// 					"TailwindCSS",
	// 					"AdobeXD",
	// 				],
	// 			},
	// 		],
	// 		projectDetailsHeading: t("Challenge"),
	// 		projectDetails: [
	// 			{
	// 				id: 1,
	// 				details: t("details1"),
	// 			},
	// 			{
	// 				id: 2,
	// 				details: t("details2"),
	// 			},
	// 			{
	// 				id: 3,
	// 				details: t("details3"),
	// 			},
	// 			{
	// 				id: 4,
	// 				details: t("details4"),
	// 			},
	// 		],
	// 		socialSharingsHeading: t("Share This"),
	// 		socialSharings: [
	// 			{
	// 				id: 1,
	// 				name: "Twitter",
	// 				icon: "twitter",
	// 				url: "https://twitter.com/",
	// 			},
	// 			{
	// 				id: 2,
	// 				name: "Instagram",
	// 				icon: "instagram",
	// 				url: "https://instagram.com/",
	// 			},
	// 			{
	// 				id: 3,
	// 				name: "Facebook",
	// 				icon: "facebook",
	// 				url: "https://facebook.com/",
	// 			},
	// 			{
	// 				id: 4,
	// 				name: "LinkedIn",
	// 				icon: "linkedin",
	// 				url: "https://linkedin.com/",
	// 			},
	// 			{
	// 				id: 5,
	// 				name: "Youtube",
	// 				icon: "youtube",
	// 				url: "https://www.youtube.com/",
	// 			},
	// 		],
	// 	},
	// },
	// {
	// 	id: 5,
	// 	title: 'eCommerce Store',
	// 	category: 'Wordpress site',
	// 	link: 'About',
	// 	img: require('@/assets/images/web-project-1.jpg'),
	// 	singleProjectHeader: {
	// 		singleProjectTitle: t("Phones Store"),
	// 		singleProjectDate: "26 Jul 2021",
	// 		singleProjectTag: t("UI / Frontend"),
	// 	},
	// 	projectImages: [
	// 		{
	// 			id: 1,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/1.webp"),
	// 		},
	// 		{
	// 			id: 2,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/2.webp"),
	// 		},
	// 		{
	// 			id: 3,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/3.webp"),
	// 		},
	// 		{
	// 			id: 4,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/4.webp"),
	// 		},
	// 		{
	// 			id: 5,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/5.webp"),
	// 		},
	// 		{
	// 			id: 6,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/6.webp"),
	// 		},
	// 	],
	// 	projectInfo: {
	// 		clientHeading: t("About Client"),
	// 		companyInfos: [
	// 			{
	// 				id: 1,
	// 				title: t("Name"),
	// 				details: t("Company Ltd"),
	// 			},
	// 			{
	// 				id: 2,
	// 				title: t("Services"),
	// 				details: t("Phone store services"),
	// 			},
	// 			{
	// 				id: 3,
	// 				title: t("Website"),
	// 				details: "https://company.com",
	// 			},
	// 			{
	// 				id: 4,
	// 				title: t("Phone"),
	// 				details: "555 8888 888",
	// 			},
	// 		],
	// 		objectivesHeading: t("Objective"),
	// 		objectivesDetails:t("Objective1"),
	// 				technologies: [
	// 			{
	// 				title: t("Tools & Technologies"),
	// 				techs: [
	// 					"HTML",
	// 					"CSS",
	// 					"JavaScript",
	// 					"Vue.js",
	// 					"TailwindCSS",
	// 					"AdobeXD",
	// 				],
	// 			},
	// 		],
	// 		projectDetailsHeading: t("Challenge"),
	// 		projectDetails: [
	// 			{
	// 				id: 1,
	// 				details: t("details1"),
	// 			},
	// 			{
	// 				id: 2,
	// 				details: t("details2"),
	// 			},
	// 			{
	// 				id: 3,
	// 				details: t("details3"),
	// 			},
	// 			{
	// 				id: 4,
	// 				details: t("details4"),
	// 			},
	// 		],
	// 		socialSharingsHeading: t("Share This"),
	// 		socialSharings: [
	// 			{
	// 				id: 1,
	// 				name: "Twitter",
	// 				icon: "twitter",
	// 				url: "https://twitter.com/",
	// 			},
	// 			{
	// 				id: 2,
	// 				name: "Instagram",
	// 				icon: "instagram",
	// 				url: "https://instagram.com/",
	// 			},
	// 			{
	// 				id: 3,
	// 				name: "Facebook",
	// 				icon: "facebook",
	// 				url: "https://facebook.com/",
	// 			},
	// 			{
	// 				id: 4,
	// 				name: "LinkedIn",
	// 				icon: "linkedin",
	// 				url: "https://linkedin.com/",
	// 			},
	// 			{
	// 				id: 5,
	// 				name: "Youtube",
	// 				icon: "youtube",
	// 				url: "https://www.youtube.com/",
	// 			},
	// 		],
	// 	},
	// },
	// {
	// 	id: 1,
	// 	title: 'Phoenix Digital Agency',
	// 	category: 'Vue JS Application',
	// 	img: require('@/assets/images/mobile-project-2.jpg'),
	// 	link: 'About',
	// 	singleProjectHeader: {
	// 		singleProjectTitle: t("Phones Store"),
	// 		singleProjectDate: "26 Jul 2021",
	// 		singleProjectTag: t("UI / Frontend"),
	// 	},
	// 	projectImages: [
	// 		{
	// 			id: 1,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/1.webp"),
	// 		},
	// 		{
	// 			id: 2,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/2.webp"),
	// 		},
	// 		{
	// 			id: 3,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/3.webp"),
	// 		},
	// 		{
	// 			id: 4,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/4.webp"),
	// 		},
	// 		{
	// 			id: 5,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/5.webp"),
	// 		},
	// 		{
	// 			id: 6,
	// 			title: "Project Image",
	// 			img: require("@/assets/images/PhonesStore/6.webp"),
	// 		},
	// 	],
	// 	projectInfo: {
	// 		clientHeading: t("About Client"),
	// 		companyInfos: [
	// 			{
	// 				id: 1,
	// 				title: t("Name"),
	// 				details: t("Company Ltd"),
	// 			},
	// 			{
	// 				id: 2,
	// 				title: t("Services"),
	// 				details: t("Phone store services"),
	// 			},
	// 			{
	// 				id: 3,
	// 				title: t("Website"),
	// 				details: "https://company.com",
	// 			},
	// 			{
	// 				id: 4,
	// 				title: t("Phone"),
	// 				details: "555 8888 888",
	// 			},
	// 		],
	// 		objectivesHeading: t("Objective"),
	// 		objectivesDetails:t("Objective1"),
	// 				technologies: [
	// 			{
	// 				title: t("Tools & Technologies"),
	// 				techs: [
	// 					"HTML",
	// 					"CSS",
	// 					"JavaScript",
	// 					"Vue.js",
	// 					"TailwindCSS",
	// 					"AdobeXD",
	// 				],
	// 			},
	// 		],
	// 		projectDetailsHeading: t("Challenge"),
	// 		projectDetails: [
	// 			{
	// 				id: 1,
	// 				details: t("details1"),
	// 			},
	// 			{
	// 				id: 2,
	// 				details: t("details2"),
	// 			},
	// 			{
	// 				id: 3,
	// 				details: t("details3"),
	// 			},
	// 			{
	// 				id: 4,
	// 				details: t("details4"),
	// 			},
	// 		],
	// 		socialSharingsHeading: t("Share This"),
	// 		socialSharings: [
	// 			{
	// 				id: 1,
	// 				name: "Twitter",
	// 				icon: "twitter",
	// 				url: "https://twitter.com/",
	// 			},
	// 			{
	// 				id: 2,
	// 				name: "Instagram",
	// 				icon: "instagram",
	// 				url: "https://instagram.com/",
	// 			},
	// 			{
	// 				id: 3,
	// 				name: "Facebook",
	// 				icon: "facebook",
	// 				url: "https://facebook.com/",
	// 			},
	// 			{
	// 				id: 4,
	// 				name: "LinkedIn",
	// 				icon: "linkedin",
	// 				url: "https://linkedin.com/",
	// 			},
	// 			{
	// 				id: 5,
	// 				name: "Youtube",
	// 				icon: "youtube",
	// 				url: "https://www.youtube.com/",
	// 			},
	// 		],
	// 	},
	// },
];

export default projects;
