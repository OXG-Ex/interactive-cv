import { SkillType } from '../enums/SkillType';

export type TSkill = {
    title: string;
    percent: number;
    type: SkillType;
};

export type TSkillsListProps = {
    skills: TSkill[];
};
