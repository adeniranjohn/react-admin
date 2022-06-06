import '../styles/Member.scss'
import React from "react";
const Member = ({member}) => {

    const editUserHandler = (e) => {
        e.preventDefault();
        console.log(member)
    }

    const viewProfileHandler = (e) => {
        e.preventDefault();
        console.log(member)
    }
    return (
        <article>
            <h4>{member.lastName.toUpperCase()+ ' ' +  member.firstName}</h4>
            <p>{member.email}</p>
            <div className="space-between">
            <span onClick={editUserHandler}>Edit User</span>
            <span onClick={viewProfileHandler}>View Profile</span>
            </div>
        </article>
    )
}

export default Member;
