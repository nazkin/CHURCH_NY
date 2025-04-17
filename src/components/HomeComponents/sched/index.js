import React from "react";
import "./sched.css";

const events = [
  {
    time: "5:00pm",
    title: "Saturday (English)",
  },
  {
    time: "8:30am & 10:00am",
    title: "Sunday (Ukrainian)",
  },
  {
    time: "9:00am - 7:00pm",
    title: "Holy Days",
  },
  {
    time: "9:00am - 7:00pm",
    title: "Special Intentions (Weekdays)",
  },
];

export default function Schedule() {
  return (
    <div id="content">
      <ul className="timeline">
        {events.map((event, idx) => (
          <li
            key={idx}
            className="event"
            data-date={event.time}
            id={idx === 1 ? "fader" : undefined}
          >
            <div className="member-infos">
              <h1 className="member-title">{event.title}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
