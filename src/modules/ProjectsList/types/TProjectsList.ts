export type TProjectType = 'pet_project' | 'test_task' | 'commercial';
export type TProjectArea = 'mobile' | 'web' | 'desktop';

export type TProject = {
    name: string;
    type?: string;
    area?: string;
    link?: string;
    tags?: string[];
    description: string;
    imageUrl: string;
};

export type TProjectsListProps = {
    projects: TProject[];
};
