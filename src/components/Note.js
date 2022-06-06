const Note = ({note, editNote}) => {



    return (
        <article>
            <h4>
            {note.subject}
            </h4>
            <p>
            {note.message}
            </p>
            <span onClick={editNote} >Edit note</span>
        </article>
    )
}

export default Note;