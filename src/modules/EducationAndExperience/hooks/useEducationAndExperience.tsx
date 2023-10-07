import { EducationCard, ExperienceCard } from "../components";
import { TEducationAndExperienceProps } from "../types/TEducationAndExperience";

export const useEducationAndExperience = (props: TEducationAndExperienceProps) => {
    const { education, experience } = props;

    const educationCards = education.map((item) => <EducationCard {...item} key={item.years} />);
    const experienceCards = experience.map((item) => <ExperienceCard {...item} key={item.years} />);

    return { educationCards, experienceCards };
}
