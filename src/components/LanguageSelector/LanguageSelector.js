import * as React from "react";

import { Select } from "../Select";
import { LANGUAGE_ICON, LANGUAGES } from "../../constants";

import { getManuList } from "./LanguageSelector.props";

const LanguageSelector = ({ language, changeLanguage }) => {
    const renderValue = (value) => LANGUAGE_ICON[value];

    return (
        <Select
            value={language}
            onChange={changeLanguage}
            renderValue={renderValue}
            list={getManuList(LANGUAGES)}
        />
    );
};

export { LanguageSelector };