import  React,{ useState } from 'react';

  
  const ResetEmail = ({ changeLogin }) => {

    const [ resetEmail, setEmailReset ] = useState("");
    const emailResetHandler = () => {
        console.log(resetEmail)
    }

    return (
      <section>
          <form onSubmit={emailResetHandler}>
        <p>Click to go to<span onClick={changeLogin}>login</span> page</p>
        <label>Reset Email</label>
   
        <input type="email" placeholder="Email" onChange={(e) => setEmailReset(e.target.value)} />
        <button type="submit"> Reset</button>
        </form>
      </section>
    )
  }


  export default ResetEmail;
