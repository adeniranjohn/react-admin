import '../styles/Calendar.scss';
import React, { useState} from 'react'
const Calendar = () => {

        const [ event, setEvent ] = useState({
            eventDate: '',
            eventMessage: ''
        })

        const [ events, setEvents ] = useState([]);


    const eventHandler = () => {
        setEvents([...events, event])

    }
    return (
        <section className="calendar"> 
    <h4>Create Event</h4>

    <form onSubmit={eventHandler}>
    <label htmlFor="eventDate">Pick event date with time</label>

    <input id="eventDate" name="eventDate" type="datetime-local" min={Date.now()} onChange={(e) => {setEvent({...event, eventDate: e.target.value})}}/>


        <label htmlFor='eventMessage'>Event Message</label>
        <textarea 
        id="eventMessage"
        name="eventMessage"
        placeholder="Event details"
        onChange={(e) => {setEvent({...event, eventMessage: e.target.value})}} >

        </textarea>
        <button>Create event</button>
           </form>
        
        {
            events && events.map((item, idx) => {
               return  <article key={idx}><h4>Event Date/Time: {item.eventDate}</h4><p>Event message: {item.eventMessage}</p></article>
            })
        }


        </section>
    )
}

export default Calendar;

