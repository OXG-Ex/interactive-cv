export type TEducationInfo = {
    specialization: string;
    years: string;
    description: string;
    institution: string;
}

export type TExperienceInfo = {
    companyName: string;
    position: string;
    years: string;
    responsibilities: string[];
    country?: string;
}

export type TEducationAndExperienceProps = {
    experience: TExperienceInfo[];
    education: TEducationInfo[];
}
