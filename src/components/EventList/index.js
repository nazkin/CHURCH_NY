import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

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
    {
        id: '11',
        month: 8,
        title: 'August Event',
        date: '2024-08-10',
        summary: 'August summary',
        description: 'August description',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C'
    },
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
    height: '500px', // Or any desired height
    width: '100%',
    overflow: 'hidden', // Important: prevent scrollbar on container
    backgroundColor: '#f5f5f5',
    padding: '16px',
    gap: '20px',
});

const MonthColumn = styled(Box)({
    flex: '0 0 120px', // Fixed width for month column
    overflowY: 'auto',
    paddingRight: '10px',
    borderRight: '1px solid #ccc',
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
});

const EventsColumn = styled(Box)({
    flex: '1', // Take up remaining space
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
});

const MonthButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'isHighlighted',
})(({ theme, isHighlighted }) => ({
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '8px 12px',
    borderRadius: '4px',
    marginBottom: '4px',
    backgroundColor: 'transparent',
    color: isHighlighted ? theme.palette.primary.main : theme.palette.text.primary,
    fontWeight: isHighlighted ? 'bold' : 'normal',
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)', // Light hover effect
    },
}));

const EventCard = styled(motion.div)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)', // Subtle shadow
    marginBottom: '16px',
    padding: '16px',
    transition: 'transform 0.2s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)', // Slight scale on hover
    },
}));

const EventImage = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    cursor: 'pointer', // Indicate clickable for full-size view
    marginBottom: '12px',
});

const EventTitle = styled(Typography)({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#2c3e50', // Darker title color
});

const EventDate = styled(Typography)({
    fontSize: '0.9rem',
    color: '#7f8c8d', // Muted date color
    marginBottom: '4px',
});

const EventSummary = styled(Typography)({
    fontSize: '1rem',
    color: '#34495e', // Slightly darker summary
    marginBottom: '12px',
});

const EventDescription = styled(Typography)({
    fontSize: '1rem',
    color: '#555', //  darker description
    lineHeight: 1.6, // Improved readability
    '& img': {
        cursor: 'pointer', // Indicate clickable images in description.
        maxWidth: '100%',  // Ensure images don't overflow
        height: 'auto',
        borderRadius: '4px',
        margin: '8px 0',
    }
});

const months = [
    { number: 1, name: 'January' },
    { number: 2, name: 'February' },
    { number: 3, name: 'March' },
    { number: 4, name: 'April' },
    { number: 5, name: 'May' },
    { number: 6, name: 'June' },
    { number: 7, name: 'July' },
    { number: 8, name: 'August' },
    { number: 9, name: 'September' },
    { number: 10, name: 'October' },
    { number: 11, name: 'November' },
    { number: 12, name: 'December' },
];

const EventsList = () => {
    const [selectedMonth, setSelectedMonth] = useState(null);
    const eventsColumnRef = useRef(null);
    const [openImage, setOpenImage] = useState(null); // State for the image dialog

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

    const filteredEvents = selectedMonth ? getMonthEvents(selectedMonth) : eventsData;

    return (
        <TwoColumnContainer>
            <MonthColumn>
                {highlightedMonths.map((month) => (
                    <MonthButton
                        key={month.number}
                        isHighlighted={month.hasEvents}
                        onClick={() => scrollToMonth(month.number)}
                    >
                        {month.name}
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
                        id={`month-${event.month}`} // Add ID for scrolling
                    >
                        <EventImage
                            src={event.imageUrl}
                            alt={event.title}
                            onClick={() => handleImageClick(event.imageUrl)}
                        />
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
    );
};

export default EventsList;
