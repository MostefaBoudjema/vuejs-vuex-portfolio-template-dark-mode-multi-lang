// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

import projects from '@/data/projects';
import i18n from '../i18n';
const { t } = i18n.global;

const relatedProject = {
    relatedProjectsHeading: t("Related Projects"),
    relatedProjects: projects,
};

export default relatedProject;
