import {
  darkBlue,
  white,
  lightYellow,
  darkYellow,
  lightBlue,
} from "../../../constants/colors";

export const mainHeroContainer = {
  padding: 0,
  margin: "50px 0 40px 0",
  width: "100%",
  height: 520,
  backgroundImage: `url('background.JPG')`,
  backgroundPosition: "right 35% bottom 80%",
  backgroundSize: "cover",
};
export const heroImageOpacityStyle = {
  background: "rgba(0,0,0,0.5)",
  width: "100%",
  height: "100%",
};

export const flexColSpaceAround = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
};

export const heroTextContainerSm = {
  width: "100%",
  color: "whitesmoke",
  textAlign: "center",
  fontSize: "20px",
  display: "flex",
  justifyConten: "center",
  alignItems: "center",
};

export const heroTextContainerLg = {
  width: "100%",
  color: "whitesmoke",
  textAlign: "center",
  fontSize: "34px",
  display: "flex",
  justifyConten: "center",
  alignItems: "center",
};

export const heroBtnsContainer = {
  width: "100%",
  marginTop: "10px",
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
};

export const heroHumanitarianBtn = {
  color: "#4682B4",
  background: "gold",
  border: `6px solid #4682B4`,
  fontSize: 24,
  margin: "0px 15px 0px 15px",
  "&:hover": {
    opacity: 0.85,
    color: "#4682B4",
    background: "gold",
    border: `6px solid #4682B4`,
  },
};
