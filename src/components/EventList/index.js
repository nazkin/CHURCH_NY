import React from 'react';
import { Stack, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const LeftBox = styled(Box)({
    width: '20%',
    overflowY: 'scroll',
    padding: '16px',
    height: '100%',
});

const RightBox = styled(Box)({
    width: '80%',
    overflowY: 'auto',
    padding: '16px',
    // backgroundColor: '#e0e0e0',
    height: '100%',
    // '@media (max-width: 600px)': {
    //     width: '100%',
    //     height: '200px',
    // }
});

const MonthButton = styled(Button)({
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '8px 12px',
    borderRadius: '4px',
    marginBottom: '4px',
    backgroundColor: 'transparent',
    color: '#333',
    // '&:hover': {
    //     backgroundColor: 'rgba(0, 0, 0, 0.04)',
    // },
});

const EventsList = ({language}) => {
    return (
        <Stack direction="row" style={{ width: '100%', height: '100%' }}>
            <LeftBox>
                {months.map((month) => (
                    <Button variant="text" key={month.number}>
                        {month.name}
                    </Button>
                ))}
            </LeftBox>
            <RightBox>
                <h2>Events</h2>
                <p>Event 1: Description of event 1.</p>
                <p>Event 2: Description of event 2.</p>
                <p>Event 3: Description of event 3.</p>
                <p>Event 4: Description of event 4.</p>
                <p>Event 5: Description of event 5.</p>
                <p>Event 6: Description of event 6.</p>
                <p>Event 7: Description of event 7.</p>
                <p>Event 8: Description of event 8.</p>
                <p>Event 9: Description of event 9.</p>
                <p>Event 10: Description of event 10.</p>
                <p>Event 11: Description of event 11.</p>
                <p>Event 12: Description of event 12.</p>
            </RightBox>
        </Stack>
    );
};

export default EventsList;
