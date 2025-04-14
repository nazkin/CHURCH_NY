import * as React from "react"

export const EVENTS_CONTENT = {
    en: {
        title: "Calendar of Events",
        content: <>
            <div style={{display: "flex", width: "80%", height: "80%"}} data-events-calendar-app data-project-id="proj_rcajbWhaMnIMxDi4zif5R" ></div>
            <script type="text/javascript" src="//dist.eventscalendar.co/embed.js"></script>
        </>
    },
    ua: {
        title: "Календар Подій",
        content: <>
            <div style={{display: "flex", width: "80%", height: "80%"}} data-events-calendar-app data-project-id="proj_rcajbWhaMnIMxDi4zif5R" ></div>
            <script type="text/javascript" src="//dist.eventscalendar.co/embed.js"></script>
        </>
    }
}