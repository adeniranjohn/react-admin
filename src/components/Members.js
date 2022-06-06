import '../styles/Members.scss'
import Member from './Member';
import { useState } from 'react';
import data from '../utils/data.json'

const Members = () => {
    

    const [ users, setUsers ] = useState(data.users);

    const searchUser = (e) => {
     
        if(e.target.value.length <= 0){
            setUsers(data.users);
        }else {
        const theUsers = users.filter(user => user.firstName.toLowerCase().includes(e.target.value.trim().toLowerCase()) || user.lastName.toLowerCase().includes(e.target.value.trim().toLowerCase()));
        setUsers(theUsers)

        }


    }






    return (
        <section className="members">
            <h3>Members</h3>
            <input type="search" placeholder=" Search user by name"  onChange={searchUser}/>
         {
                users.map(member => <Member key={member.id} member={member}/>)
            }
        </section>
    )
}

export default Members;