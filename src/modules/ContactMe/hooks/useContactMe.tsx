import { ContactCard } from '../components';
import { TContactMeProps } from '../types/TContactMe';

export const useContactMe = ({ contacts }: TContactMeProps) => {
    const contactCards = contacts.map((contact) => (
        <ContactCard {...contact} key={contact.title} />
    ));

    return { contactCards };
};
