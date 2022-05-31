import '../styles/SendEmail.scss'
import { useState } from 'react';

const SendEmail = () => {

    const [ input, setInput ] = useState({
        recipients: '',
        subject: '',
        message: ''
    })
    const sendEmailHandler = (e) => {
        e.preventDefault();
        console.log(input);

    }


                                                

    return (
        <section className='sendEmail'>
          <form onSubmit={sendEmailHandler}>
            <h3>Send Email</h3>

            <label>Email</label>
            <input
              type="email"
              name="recipients"
              placeholder="Recepients (seperated transfer with ',')"
              onChange={(e) => {
                setInput({ ...input, recipients: e.target.value });
              }}
            />

            <label>Last name</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={(e) => {
                setInput({ ...input, subject: e.target.value });
              }}
            />
            <label>Message</label>
            <textarea
              placeholder="Message"
              onChange={(e) => {
                setInput({ ...input, message: e.target.value });
              }}
            ></textarea>
            

            <button type="submit">Send E-mail</button>
          </form>
        </section>
    )
}


export default SendEmail;