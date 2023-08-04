import i18n from '../i18n';
const { t }=i18n.global;

const EmplymentHistory=[
    {
        title: t("JobTitle1"),
        company: t("JobCompany1"),
        startDate: t("JobStartDate1"),
        endDate: t("JobEndDate1"),
        logo: require('@/assets/images/brands/mesnja_color.png'),
        description: t("JobDescription1")
    },
    {
        title: t("JobTitle2"),
        company: t("JobCompany2"),
        startDate: t("JobStartDate2"),
        endDate: t("JobEndDate2"),
        logo: require('@/assets/images/brands/upwork_color.png'),
        description: t("JobDescription2")
    },
    {
        title: t("JobTitle3"),
        company: t("JobCompany3"),
        startDate: t("JobStartDate3"),
        endDate: t("JobEndDate3"),
        logo: require('@/assets/images/brands/biginformatique_color.png'),
        description: t("JobDescription3")
    },
];

export default EmplymentHistory;
