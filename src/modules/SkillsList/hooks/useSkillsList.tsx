import { HardSkill, SoftSkill } from "../components";
import { SkillType } from "../enums/SkillType";
import { TSkillsListProps } from "../types/TSkillsList";

export const useSkillsList = (props: TSkillsListProps) => {
    const { skills } = props;

    const hardSkills = skills
        .filter(skill => skill.type === SkillType.Hard)
        .map(skill => <HardSkill skill={skill} key={skill.title} />);

    const softSkills = skills
        .filter(skill => skill.type === SkillType.Soft)
        .map(skill => <SoftSkill skill={skill} key={skill.title} />);

    return { hardSkills, softSkills };
}
