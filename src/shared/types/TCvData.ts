import { TContactMeProps } from '../../modules/ContactMe';
import { TEducationAndExperienceProps } from '../../modules/EducationAndExperience';
import { TMainInfoProps } from '../../modules/MainInfo';
import { TProjectsListProps } from '../../modules/ProjectsList';
import { TSkillsListProps } from '../../modules/SkillsList';

export type TCvData = TContactMeProps &
    TEducationAndExperienceProps &
    TMainInfoProps &
    TProjectsListProps &
    TSkillsListProps;
