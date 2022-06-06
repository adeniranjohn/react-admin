import '../styles/Members.scss'
import Member from './Member';
import data from '../utils/data.json'

const Members = () => {
    



    return (
        <section className="members">
            <h3>Members</h3>
            <input type="search" />
         {
                users.map(member => <Member key={member.id} member={member}/>)
            }
        </section>
    )
}

export default Members;