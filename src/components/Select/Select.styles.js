import { styled, Select } from "@mui/material";

const StyledSelect = styled(Select, {
    name: "StyledSelect",
})({
    "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
        "&:hover, &.Mui-focused": {
            border: "none",
        },
    },
});

const SelectIcon = styled("span", {
    name: "SelectIcon",
})({
    position: "relative",
    top: "4px",
    paddingRight: "10px",
});

export { StyledSelect, SelectIcon };