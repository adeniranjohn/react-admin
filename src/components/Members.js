import '../styles/Members.scss'
import Member from './Member';
import data from '../utils/data.json'

const Members = () => {
    
 const { users } = data;
    return (
        <section className="members">
            <p>List of all Members</p>
         {
                users.map(member => <Member key={member.id} member={member}/>)
            }
        </section>
    )
}

export default Members;