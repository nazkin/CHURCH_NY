import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useEffect } from 'react';
import { steelBlue, white } from '../../constants/colors';

// Sample event data (replace with your actual data source)
const eventsData = [
    {
        id: '1',
        month: 1,
        title: 'New Year Celebration',
        date: '2024-01-01',
        summary: 'Celebrate the start of the new year!',
        description: 'Join us for a festive celebration with fireworks, music, and dancing.',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        id: '2',
        month: 1,
        title: 'January Event 2',
        date: '2024-01-15',
        summary: 'Another event in January',
        description: 'Details for the second January event.',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        id: '3',
        month: 2,
        title: 'Valentine\'s Day',
        date: '2024-02-14',
        summary: 'Celebrate love and affection.',
        description: 'A romantic evening with dinner and music.',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        id: '4',
        month: 3,
        title: 'St. Patrick\'s Day',
        date: '2024-03-17',
        summary: 'Celebrate Irish culture!',
        description: 'Join the parade and enjoy traditional Irish food and drinks.',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        id: '5',
        month: 3,
        title: 'March Event 2',
        date: '2024-03-25',
        summary: 'A second event in March',
        description: 'More March details',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        id: '6',
        month: 4,
        title: 'April Fools\' Day',
        date: '2024-04-01',
        summary: 'Get ready for some pranks!',
        description: 'A day of fun and laughter.',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        id: '7',
        month: 5,
        title: 'Cinco de Mayo',
        date: '2024-05-05',
        summary: 'Celebrate Mexican heritage.',
        description: 'Enjoy Mexican food, music, and dancing.',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        id: '8',
        month: 5,
        title: 'Mother\'s Day',
        date: '2024-05-12',
        summary: 'Honor mothers and motherhood.',
        description: 'A day to celebrate the special women in our lives.',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        id: '9',
        month: 6,
        title: 'Father\'s Day',
        date: '2024-06-16',
        summary: 'Celebrate fatherhood.',
        description: 'A day to honor fathers and father figures.',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
    },
    {
        id: '10',
        month: 7,
        title: 'Independence Day',
        date: '2024-07-04',
        summary: 'Celebrate freedom and independence!',
        description: 'Fireworks, parades, and patriotic festivities.',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C',
    },
    // {
    //     id: '11',
    //     month: 8,
    //     title: 'August Event',
    //     date: '2024-08-10',
    //     summary: 'August summary',
    //     description: 'August description',
    //     imageUrl: 'https://placehold.co/600x400/EEE/31343C'
    // },
    {
        id: '12',
        month: 9,
        title: 'September Event',
        date: '2024-09-10',
        summary: 'September summary',
        description: 'September description',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C'
    },
    {
        id: '13',
        month: 10,
        title: 'October Event',
        date: '2024-10-10',
        summary: 'October summary',
        description: 'October description',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C'
    },
    {
        id: '14',
        month: 11,
        title: 'November Event',
        date: '2024-11-10',
        summary: 'November summary',
        description: 'November description',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C'
    },
    {
        id: '15',
        month: 12,
        title: 'December Event',
        date: '2024-12-10',
        summary: 'December summary',
        description: 'December description',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C'
    },
    {
        id: '16',
        month: 12,
        title: 'Christmas',
        date: '2024-12-25',
        summary: 'Celebrate the birth of Jesus.',
        description: 'A time for family, gifts, and joy.',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C'
    }
];

// Styled Components for better UI
const TwoColumnContainer = styled(Box)({
    display: 'flex',
    height: '600px',
    width: '100%',
    overflow: 'hidden',
    // backgroundColor: '#f5f5f5',
    padding: '16px',
    gap: '20px',
    '@media (max-width: 600px)': {  // Added media query for small screens
        flexDirection: 'column',
        height: 'auto',
    },
});

const MonthColumn = styled(Box)({
    flex: '0 0 150px',
    overflowY: 'auto',
    paddingRight: '10px',
    // paddingTop: '65px',
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
    },
    '@media (max-width: 600px)': {  // Added media query for small screens
        flex: '0 0 auto',
        width: '100%',
        borderRight: 'none',
        borderBottom: '1px solid #ccc',
        paddingBottom: '10px',
        marginBottom: '10px',
        overflowX: 'auto; overflowY: hidden;',
        whiteSpace: 'nowrap',
    },
});

const EventsColumn = styled(Box)({
    flex: '1',
    overflowY: 'auto',
    paddingLeft: '10px',
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '4px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
    },
    '@media (max-width: 600px)': {  // Added media query for small screens
        paddingLeft: '0px',
    },
});

const MonthButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'isHighlighted',
})(({ theme, isHighlighted }) => ({
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '4px 4px',
    borderRadius: '4px',
    marginBottom: '4px',
    backgroundColor: 'transparent',
    color: isHighlighted ? theme.palette.primary.main : theme.palette.text.primary,
    fontWeight: isHighlighted ? 'bold' : 'normal',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
    '@media (max-width: 600px)': {  // Added media query for small screens
        display: 'inline-block',
        width: 'auto',
        marginRight: '10px',
        marginBottom: '0px',
    },
}));

const EventCard = styled(motion.div)(({ theme }) => ({
    backgroundColor: white,
    color: '#FFD700',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
    marginBottom: '16px',
    padding: '16px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
}));

const EventImage = styled('img')({
    width: '80%',
    height: 'auto',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '12px',
});

const EventTitle = styled(Typography)({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: steelBlue,
});

const EventDate = styled(Typography)({
    fontSize: '0.9rem',
    color: 'darkslategray',
    marginBottom: '4px',
});

const EventSummary = styled(Typography)({
    fontSize: '1rem',
    color: 'darkslategray',
    marginBottom: '12px',
});

const EventDescription = styled(Typography)({
    fontSize: '1rem',
    color: 'darkslategray',
    lineHeight: 1.6,
    '& img': {
        cursor: 'pointer',
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '4px',
        margin: '8px 0',
    }
});

const EventsList = ({language}) => {
    const [selectedMonth, setSelectedMonth] = useState(null);
    const eventsColumnRef = useRef(null);
    const [openImage, setOpenImage] = useState(null);

    const months = [
        { number: 1, name: language == 'en' ? 'January' : 'Січень' },
        { number: 2, name: language == 'en' ? 'February' : 'Лютий' },
        { number: 3, name: language == 'en' ? 'March' : 'Березень' },
        { number: 4, name: language == 'en' ? 'April' : 'Квітень' },
        { number: 5, name: language == 'en' ? 'May' : 'Травень' },
        { number: 6, name: language == 'en' ? 'June' : 'Червень' },
        { number: 7, name: language == 'en' ? 'July' : 'Липень' },
        { number: 8, name: language == 'en' ? 'August' : 'Серпень' },
        { number: 9, name: language == 'en' ? 'September' : 'Вересень' },
        { number: 10, name: language == 'en' ? 'October' : 'Жовтень' },
        { number: 11, name: language == 'en' ? 'November' : 'Листопад' },
        { number: 12, name: language == 'en' ? 'December' : 'Грудень' },
    ];

    const scrollToMonth = useCallback(
        (month) => {
            setSelectedMonth(month);
            if (eventsColumnRef.current) {
                const targetEvent = document.getElementById(`month-${month}`);
                if (targetEvent) {
                    targetEvent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        },
        []
    );

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

    const filteredEvents = eventsData//selectedMonth ? getMonthEvents(selectedMonth) : eventsData;

      //Fixes "document is not defined" during build
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }


    return (
        <Box sx={{ width: '80%', maxWidth: '1000px', backgroundColor: '#ffffff', padding: 2, borderRadius: '8px', boxShadow: 2, paddingTop: '70px', paddingBottom: 5, margin: '0 auto'}} justifySelf={'center'}>
        <TwoColumnContainer>
            <MonthColumn alignContent={'center'}>
                {highlightedMonths.map((month) => (
                    <MonthButton
                        key={month.number}
                        isHighlighted={month.hasEvents}
                        onClick={() => scrollToMonth(month.number)}
                        disabled={!month.hasEvents}
                    >
                        <Typography fontSize={'10pt'}>
                        {month.name}
                        </Typography>
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
                        <center><EventImage
                            src={event.imageUrl}
                            alt={event.title}
                            onClick={() => handleImageClick(event.imageUrl)}
                        />
                        </center>
                        <EventTitle>{event.title}</EventTitle>
                        <EventDate>Date: {event.date}</EventDate>
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
                                if (e.target.tagName === 'IMG') {
                                     handleImageClick(e.target.src);
                                }
                            }}
                        />
                    </EventCard>
                ))}
            </EventsColumn>
             <Dialog
                open={!!openImage}
                onClose={() => setOpenImage(null)}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>Image Preview</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <img
                            src={openImage}
                            alt="Full Size"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </TwoColumnContainer>
        </Box>
    );
};

export default EventsList;
