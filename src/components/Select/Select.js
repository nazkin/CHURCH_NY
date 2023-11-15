import * as React from "react";
import { MenuItem } from "@mui/material";

import { StyledSelect, SelectIcon } from "./Select.styles";

const Select = ({ value, onChange, renderValue, list = [], ...rest }) => {
    console.log(list)
    return (
        <StyledSelect
            value={value}
            onChange={onChange}
            renderValue={renderValue}
            {...rest}
        >
            {list.map(({ value, title, icon }, index) => (
                <MenuItem key={index} value={value}>
                    {icon && <SelectIcon>{icon}</SelectIcon>}
                    {title}
                </MenuItem>
            ))}
        </StyledSelect>
    );
}

export { Select };