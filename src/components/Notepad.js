import '../styles/Notepad.scss'
import { useState } from 'react';

const Notepad = () => {
    const [ note, setNote ] = useState({
        subject: "",
        message: ""
    })

    const [ notes, setNotes ] = useState([])
    const notepadHandler = (e) => {
        e.preventDefault();
        setNotes((n) => [...n, note]);
    }

    return (
        <section className='notepad'>
          <form onSubmit={notepadHandler}>
            <h3>Notepad</h3>

        

            <label htmlFor='subject'>Subject</label>
            <input
            id="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={(e) => {
                setNote({ ...note, subject: e.target.value });
              }}
            />
            <label htmlFor='message'>Message</label>
            <textarea
            id="message"
              name="message"
              placeholder="Message"
              onChange={
                  (e) => {
                setNote({ ...note, message: e.target.value });
              }}
            ></textarea>
            

            <button type="submit">Save</button>
          </form>
          {notes}
        </section>

    )
}

export default Notepad