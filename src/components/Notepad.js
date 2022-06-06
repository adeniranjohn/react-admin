import '../styles/Notepad.scss'
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import Note from './Note';

const Notepad = () => {

    const uniqueId = uuid();
    const [ note, setNote ] = useState({
        subject: "",
        message: "",
        id: ""
    })

    const [ notes, setNotes ] = useState([])
    const notepadHandler = (e) => {
        e.preventDefault();
        note.id = uniqueId;
        setNotes((n) => [...n, note]);

    }


    const editNoteHandler = () => { 

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
          {notes && notes.map(theNote => 
              <Note key={note.id} note={theNote} editNote={editNoteHandler} /> 
              )}
        </section>

    )
}

export default Notepad