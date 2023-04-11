import i18n from '../i18n';
const { t } = i18n.global;

// import relatedProject from '../data/relatedProjects';
const projects = [
	{
		id: 0,
		title: 'Phones Store',
		category: 'Ecommerce',
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
		id: 1,
		title: 'Business',
		category: 'Business Website',
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
		id: 2,
		title: 'Blog',
		category: 'Blogs',
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
		id: 3,
		title: 'Clothes Store',
		category: 'Ecommerce',
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
		id: 4,
		title: 'Portfolio',
		category: 'Portfolio',
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
		id: 5,
		title: 'Elearn',
		category: 'Elearn',
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
];

export default projects;
