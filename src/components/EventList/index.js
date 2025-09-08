import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect } from "react";
import { steelBlue, white } from "../../constants/colors";
import { useStaticQuery, graphql } from "gatsby";
import { GENERAL_CONTENT } from "../../constants/content/general";

// Styled Components for better UI
const TwoColumnContainer = styled(Box)({
  display: "flex",
  height: "900px",
  width: "100%",
  overflow: "hidden",
  // backgroundColor: '#f5f5f5',
  padding: "16px",
  gap: "20px",
  "@media (max-width: 600px)": {
    // Added media query for small screens
    flexDirection: "column",
    height: "auto",
  },
});

const MonthColumn = styled(Box)({
  flex: "0 0 150px",
  overflowY: "auto",
  paddingRight: "10px",
  // paddingTop: '65px',
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
  "@media (max-width: 600px)": {
    // Added media query for small screens
    flex: "0 0 auto",
    width: "100%",
    borderRight: "none",
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    marginBottom: "10px",
    overflowX: "auto; overflowY: hidden;",
    whiteSpace: "nowrap",
  },
});

const EventsColumn = styled(Box)({
  flex: "1",
  overflowY: "auto",
  marginTop: "50px",
  padding: "0px 0px 0px 10px",
  height: "85%",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
  "@media (max-width: 600px)": {
    // Added media query for small screens
    paddingLeft: "0px",
  },
});

const MonthButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isHighlighted",
})(({ theme, isHighlighted }) => ({
  display: "block",
  width: "100%",
  textAlign: "left",
  padding: "4px 4px",
  borderRadius: "4px",
  marginBottom: "4px",
  backgroundColor: "transparent",
  color: isHighlighted
    ? theme.palette.primary.main
    : theme.palette.text.primary,
  fontWeight: isHighlighted ? "bold" : "normal",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.04)",
  },
  "@media (max-width: 600px)": {
    // Added media query for small screens
    display: "inline-block",
    width: "auto",
    marginRight: "10px",
    marginBottom: "0px",
  },
}));

const EventCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: white,
  color: "#FFD700",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
  marginBottom: "16px",
  padding: "16px",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const EventImage = styled("img")({
  width: "80%",
  height: "auto",
  borderRadius: "4px",
  cursor: "pointer",
  marginBottom: "12px",
});

const EventTitle = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "8px",
  color: steelBlue,
});

const EventDate = styled(Typography)({
  fontSize: "0.9rem",
  color: "darkslategray",
  marginBottom: "4px",
});

const EventSummary = styled(Typography)({
  fontSize: "1rem",
  color: "darkslategray",
  marginBottom: "12px",
});

const EventLink = styled(Typography)({
  fontSize: "0.8rem",
  color: "darkslategray",
  marginBottom: "12px",
});

const EventDescription = styled(Typography)({
  fontSize: "1rem",
  color: "darkslategray",
  lineHeight: 1.6,
  "& img": {
    cursor: "pointer",
    maxWidth: "100%",
    height: "auto",
    borderRadius: "4px",
    margin: "8px 0",
  },
});

function getMonthFromDate(dateString, language) {
  const monthNames = {
    January: "Січня",
    February: "Лютого",
    March: "Березня",
    April: "Квітня",
    May: "Травня",
    June: "Червня",
    July: "Липня",
    August: "Серпня",
    September: "Вересня",
    October: "Жовтня",
    November: "Листопада",
    December: "Грудня",
  };

  const date = new Date(dateString);
  const month = date.getMonth(); // getMonth() returns a zero-based index
  const monthName = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  ); // Get full month name

  const day = date.getDate();
  const year = date.getFullYear();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm}`;

  const finalMonthName = language == "en" ? monthName : monthNames[monthName];

  return {
    monthNumber: month + 1,
    monthName: finalMonthName,
    formattedDate:
      language == "en"
        ? `${finalMonthName} ${day}, ${year} at ${formattedTime}`
        : `${day} ${finalMonthName}, ${year} o ${formattedTime}`,
  };
}

const EventsList = ({ language }) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const eventsColumnRef = useRef(null);
  const [openImage, setOpenImage] = useState(null);

  const { allContentfulEvents } = useStaticQuery(graphql`
    query getEventsQuery {
      allContentfulEvents {
        nodes {
          date
          linkUrl
          id
          titleUa
          title
          summaryUa {
            summaryUa
          }
          summary {
            summary
          }
          image {
            publicUrl
          }
        }
        totalCount
      }
    }
  `);

  const sortedEvents = allContentfulEvents.nodes.filter(
    (event) => event.title !== "Test [DO NOT DELETE]"
  );
  const eventsData = sortedEvents
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((e) => {
      const dateData = getMonthFromDate(e.date, language);
      return {
        id: e.id,
        month: dateData.monthNumber,
        title: language == "en" ? e.title : e.titleUa,
        date: dateData.formattedDate,
        summary: language == "en" ? e.summary.summary : e.summaryUa.summaryUa,
        description: "",
        linkUrl: e.linkUrl,
        imageUrl: e.image?.publicUrl,
      };
    });

  const months = [
    { number: 1, name: language == "en" ? "January" : "Січень" },
    { number: 2, name: language == "en" ? "February" : "Лютий" },
    { number: 3, name: language == "en" ? "March" : "Березень" },
    { number: 4, name: language == "en" ? "April" : "Квітень" },
    { number: 5, name: language == "en" ? "May" : "Травень" },
    { number: 6, name: language == "en" ? "June" : "Червень" },
    { number: 7, name: language == "en" ? "July" : "Липень" },
    { number: 8, name: language == "en" ? "August" : "Серпень" },
    { number: 9, name: language == "en" ? "September" : "Вересень" },
    { number: 10, name: language == "en" ? "October" : "Жовтень" },
    { number: 11, name: language == "en" ? "November" : "Листопад" },
    { number: 12, name: language == "en" ? "December" : "Грудень" },
  ];

  const scrollToMonth = useCallback((month) => {
    setSelectedMonth(month);
    if (eventsColumnRef.current) {
      const targetEvent = document.getElementById(`month-${month}`);
      if (targetEvent) {
        targetEvent.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  const getMonthEvents = (month) => {
    return eventsData.filter((event) => event.month === month);
  };

  const highlightedMonths = months.map((month) => ({
    ...month,
    hasEvents: eventsData.some((event) => event.month === month.number),
  }));

  const handleImageClick = (imageUrl) => {
    setOpenImage(imageUrl);
  };

  const filteredEvents = eventsData; //selectedMonth ? getMonthEvents(selectedMonth) : eventsData;

  //Fixes "document is not defined" during build
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Box
      sx={{
        width: "80%",
        minHeight: "100vh",
        maxWidth: "1000px",
        backgroundColor: "#ffffff",
        padding: 2,
        borderRadius: "8px",
        boxShadow: 2,
        paddingTop: "70px",
        paddingBottom: 5,
        margin: "0 auto",
      }}
      justifySelf={"center"}
    >
      <TwoColumnContainer>
        <MonthColumn alignContent={"center"}>
          {highlightedMonths.map((month) => (
            <MonthButton
              key={month.number}
              isHighlighted={month.hasEvents}
              onClick={() => scrollToMonth(month.number)}
              disabled={!month.hasEvents}
            >
              <Typography fontSize={"10pt"}>{month.name}</Typography>
            </MonthButton>
          ))}
        </MonthColumn>
        <EventsColumn ref={eventsColumnRef}>
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              id={`month-${event.month}`}
            >
              <center>
                <EventImage
                  src={event.imageUrl}
                  alt={event.title}
                  onClick={() => handleImageClick(event.imageUrl)}
                />
              </center>
              <EventTitle>{event.title}</EventTitle>
              <EventDate>{event.date}</EventDate>
              <EventSummary>{event.summary}</EventSummary>
              <EventDescription
                dangerouslySetInnerHTML={{
                  __html: event.description.replace(
                    /<img.*?src="(.*?)".*?>/g,
                    (match, src) =>
                      `<img src="${src}" onclick="this.dispatchEvent(new CustomEvent('imageclick', {bubbles: true, detail: {src: '${src}'}}));" style="cursor:pointer;" />`
                  ),
                }}
                onClick={(e) => {
                  if (e.target.tagName === "IMG") {
                    handleImageClick(e.target.src);
                  }
                }}
              />
              <center>
                <EventLink>
                  <a
                    style={{ color: steelBlue }}
                    href={event.linkUrl}
                    target="_blank"
                  >
                    {GENERAL_CONTENT[language].showDetails}
                  </a>
                </EventLink>
              </center>
            </EventCard>
          ))}
        </EventsColumn>
        <Dialog
          open={!!openImage}
          onClose={() => setOpenImage(null)}
          maxWidth="md"
          fullWidth
        >
          <center>
            <DialogContent>
              <DialogContentText>
                <img
                  src={openImage}
                  alt="Full Size"
                  style={{ width: "100%", height: "auto" }}
                />
              </DialogContentText>
            </DialogContent>
          </center>
        </Dialog>
      </TwoColumnContainer>
    </Box>
  );
};

export default EventsList;
