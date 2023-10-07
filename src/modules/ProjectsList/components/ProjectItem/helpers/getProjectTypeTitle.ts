import { TProjectType } from '../../../types/TProjectsList';

const projectTypes: Record<TProjectType, string> = {
    commercial: 'Коммерческий проект',
    pet_project: 'Пет-проджект',
    test_task: 'Тестовое задание',
};

export const getProjectTypeTitle = (type: TProjectType) => projectTypes[type];
