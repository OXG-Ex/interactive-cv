import { TProjectArea } from '../../../types/TProjectsList';

const projectAreas: Record<TProjectArea, string> = {
    desktop: 'Desktop',
    mobile: 'Mobile',
    web: 'Web-app',
};

export const getProjectAreaTitle = (area: TProjectArea) => projectAreas[area];
