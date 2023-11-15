import { LANGUAGE_ICON } from "../../constants";

export const getManuList = (languages) =>
    languages?.map((id) => {
        const icon = LANGUAGE_ICON[id];

        return { value: id, title: `${icon} ${id.toUpperCase()}` };
    });