import { useEffect, useState } from "react";

export const useUserAvatar = (technologiesUrls: string[]) => {
    const [technologyUrlIndex, setTechnologyUrlIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>
            setTechnologyUrlIndex((currentIndex) =>
                currentIndex + 1 >= technologiesUrls.length ? 0 : currentIndex + 1
            ), 3000
        );

        return () => clearInterval(interval);
    }, [technologiesUrls.length]);

    const technologyUrl = technologiesUrls[technologyUrlIndex];

    return { technologyUrl };
};
