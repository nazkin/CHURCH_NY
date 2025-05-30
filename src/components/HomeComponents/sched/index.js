import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { HOME_CONTENT } from "../../../constants/content/home";

import "./sched.css";

export default function Schedule({ language }) {
  const theme = useTheme();
  const phoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  const events = [
    {
      time: "5:00 P.M.",
      title: HOME_CONTENT[language].saturday,
    },
    {
      time: "8:30 A.M. & 10:00 A.M.",
      title: HOME_CONTENT[language].sunday,
    },
    {
      time: "9:00 A.M. & 7:00 P.M.",
      title: HOME_CONTENT[language].holyDays,
    },
    {
      time: "9:00 A.M. & 7:00 P.M.",
      title: HOME_CONTENT[language].specialIntentions,
    },
  ];
  return (
    <div id="content">
      <ul className={phoneSize ? "timeline-mobile" : "timeline"}>
        {events.map((event, idx) => (
          <li
            key={idx}
            className="event"
            data-date={event.time}
            id={idx === 1 ? "fader" : undefined}
          >
            <div className={phoneSize ? "member-infos-mobile" : "member-infos"}>
              <h1 className="member-title">{event.title}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
