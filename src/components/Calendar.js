import '../styles/Calendar.scss';
import React, { useState} from 'react'
const Calendar = () => {

        const [ event, setEvent ] = useState({
            eventDate: '',
            eventMessage: ''
        })
    return (
        <section className="calendar"> 
    <h4>Create Event</h4>

    <form>
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



        </section>
    )
}

export default Calendar;

