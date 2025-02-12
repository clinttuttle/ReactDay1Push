import React from 'react';
import Button from '@mui/material/Button';

const events = [
    { date: 'Feb 7', description: 'Employee Hack-a-thon' },
    { date: 'Mar 7', description: 'Food Bank Volunteering' },
    { date: 'Apr 4', description: 'Company Retreat' },
    { date: 'May 5', description: 'Annual Picnic' }
];

const EventsList = () => (
    <section>
        <h2>Upcoming Events</h2>
        <ul>
            {events.slice(0,4 ).map((event, index) => (
                <li key={index}>
                    <strong>{event.date}</strong>: {event.description}
                </li>
            ))}
        </ul>
        <Button>
            Submit an event idea
        </Button>
     </section>
);

export default EventsList;
