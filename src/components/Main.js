import React from 'react';
import EventsList from './EventsList';
import CoreValues from './CoreValues';

const Main = () => (
    <main>
        <EventsList />
        <CoreValues value="hello"/>
        <section>
            <h2>Latest Event</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis animi laudantium eos atque sed debitis eum deleniti cumque saepe aut voluptatibus, dolores commodi corporis quibusdam numquam perferendis, molestias tenetur suscipit!.</p>
            <p>Kickball outing Happy Hour</p>
            <img src="https://plus.unsplash.com/premium_photo-1709247069711-068d383b8497?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Dodgeball outing" />

            <img src="https://images.unsplash.com/photo-1631801751858-9f4f5a2fbdb4?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="DodgeBall action shot" />
         </section>
    </main>
);

export default Main;


